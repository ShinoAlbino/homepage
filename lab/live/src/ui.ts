import { SITE_CONFIG } from './config';
import type { CommentRole, Program } from './types';

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** LIVE UI(入室ゲート/バッジ/テロップ/コメント欄/フッター操作)の制御 */
export class UI {
  private gate = document.getElementById('gate') as HTMLElement;
  private app = document.getElementById('app') as HTMLElement;
  private enterBtn = document.getElementById('gate-enter') as HTMLButtonElement;
  private telop = document.getElementById('telop') as HTMLElement;
  private programName = document.getElementById('program-name') as HTMLElement;
  private nowProgram = document.getElementById('now-program') as HTMLElement;
  private nextProgram = document.getElementById('next-program') as HTMLElement;
  private commentList = document.getElementById('comment-list') as HTMLElement;
  private volumeBtn = document.getElementById('volume-toggle') as HTMLButtonElement;
  private helpBtn = document.getElementById('help-toggle') as HTMLButtonElement;
  private helpDialog = document.getElementById('help-dialog') as HTMLDialogElement;
  private fanboxBtn = document.getElementById('fanbox-button') as HTMLAnchorElement;

  readonly stageEl = document.getElementById('stage') as HTMLElement;

  private telopToken = 0;

  constructor() {
    this.fanboxBtn.href = SITE_CONFIG.fanboxUrl;
    this.helpBtn.addEventListener('click', () => this.helpDialog.showModal());
  }

  /** 入室ゲート。クリック1回だけコールバック(音声アンロックを兼ねる) */
  onEnter(cb: () => void): void {
    this.enterBtn.addEventListener(
      'click',
      () => {
        this.gate.classList.add('gate-leaving');
        this.app.hidden = false;
        setTimeout(() => this.gate.remove(), 650);
        cb();
      },
      { once: true },
    );
  }

  setProgram(current: Program, next: { program: Program; startHour: number }): void {
    this.programName.textContent = current.name;
    this.nowProgram.textContent = current.name;
    this.nextProgram.textContent = `${String(next.startHour).padStart(2, '0')}:00〜 ${next.program.name}`;
  }

  /**
   * 字幕テロップ: 1文字ずつ表示(仕様§3-3)。
   * 音声再生と同時に呼ばれ、音声が無い場合は文字送りのみで進行する。
   */
  async showTelop(text: string, charMs: number, variant?: 'anomaly'): Promise<void> {
    const token = ++this.telopToken;
    this.telop.classList.add('visible');
    // anomaly(異常検知ログ)はモノスペース/グリッチ調に見た目を差別化
    this.telop.classList.toggle('telop-anomaly', variant === 'anomaly');
    if (reducedMotion()) {
      this.telop.textContent = text;
      return;
    }
    this.telop.textContent = '';
    for (let i = 0; i < text.length; i++) {
      if (token !== this.telopToken) return; // 新しいテロップに割り込まれた
      this.telop.textContent = text.slice(0, i + 1);
      await delay(charMs);
    }
  }

  clearTelop(): void {
    ++this.telopToken;
    this.telop.classList.remove('visible');
    this.telop.classList.remove('telop-anomaly');
    this.telop.textContent = '';
  }

  /**
   * 世界観コメントを1件流す。
   * アイコン枠+「観測記録」系バッジで作中演出であることを明示する(仕様§3-4)。
   */
  addComment(c: { name: string; badge: string; text: string; role?: CommentRole }): void {
    const item = document.createElement('div');
    const role = c.role ?? 'viewer';
    // official/operator はシステムメッセージ風に見た目を差別化(CSSで色・バナー化)
    item.className = `comment role-${role}`;

    const icon = document.createElement('span');
    icon.className = 'c-icon';
    icon.textContent = c.name.charAt(0);

    const body = document.createElement('span');
    body.className = 'c-body';

    const name = document.createElement('span');
    name.className = 'c-name';
    name.textContent = c.name;

    const badge = document.createElement('span');
    badge.className = 'c-badge';
    badge.textContent = c.badge || '観測記録';

    const text = document.createElement('span');
    text.className = 'c-text';
    text.textContent = c.text;

    body.append(name, badge, text);
    item.append(icon, body);

    const nearBottom =
      this.commentList.scrollHeight - this.commentList.scrollTop - this.commentList.clientHeight < 80;

    this.commentList.appendChild(item);

    // 溢れたら古いものから削除
    while (this.commentList.children.length > SITE_CONFIG.comments.maxVisible) {
      this.commentList.firstElementChild?.remove();
    }
    if (nearBottom) {
      this.commentList.scrollTop = this.commentList.scrollHeight;
    }
  }

  /** 音量ボタン(状態はlocalStorageに保存: 呼び出し側で管理) */
  bindVolume(isMuted: () => boolean, toggle: () => void): void {
    const render = () => {
      this.volumeBtn.textContent = isMuted() ? '🔇' : '🔊';
      this.volumeBtn.setAttribute('aria-label', isMuted() ? '音声をオンにする' : '音声をオフにする');
    };
    this.volumeBtn.addEventListener('click', () => {
      toggle();
      render();
    });
    render();
  }
}
