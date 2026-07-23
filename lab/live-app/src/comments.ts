import { SITE_CONFIG } from './config';
import type { CommentRole, WorldComment } from './types';
import type { UI } from './ui';

const rand = (min: number, max: number) => min + Math.random() * (max - min);

function weightedPick<T extends { weight?: number }>(items: T[]): T | null {
  if (items.length === 0) return null;
  const total = items.reduce((s, i) => s + (i.weight ?? 1), 0);
  let r = Math.random() * total;
  for (const i of items) {
    r -= i.weight ?? 1;
    if (r <= 0) return i;
  }
  return items[items.length - 1];
}

/** ロール重み(相対値)からロールを1つ抽選する */
function pickRole(weights: Record<CommentRole, number>): CommentRole {
  const entries = Object.entries(weights) as [CommentRole, number][];
  const total = entries.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * total;
  for (const [role, w] of entries) {
    r -= w;
    if (r <= 0) return role;
  }
  return 'viewer';
}

/**
 * 世界観コメント流し(仕様§3-4/§6)。
 * - まずロール(viewer/recorder/operator/official)を頻度重みで抽選し、その中から
 *   weight 付きで1件選ぶ。viewer主体・recorder低・operator/official極低。
 * - replyTo付きは該当セリフの再生完了から数秒後に流す(頻度制御の外・イベント駆動)。
 * - official/operator はUI側で見た目を差別化(システムメッセージ風)。
 * - 実在視聴者の偽装をしない: 作中名+バッジ+演出告知で「観測記録」と分かる見せ方。
 */
export class CommentFeed {
  private comments: WorldComment[] = [];
  private lastText: string | null = null;
  private timer: number | null = null;

  constructor(private ui: UI) {}

  async load(): Promise<void> {
    try {
      const res = await fetch(SITE_CONFIG.paths.comments);
      if (res.ok) {
        const json = (await res.json()) as unknown;
        // 新形式(トップレベル配列)と旧形式({comments:[...]})の両対応
        this.comments = Array.isArray(json)
          ? (json as WorldComment[])
          : ((json as { comments?: WorldComment[] }).comments ?? []);
      }
    } catch (e) {
      console.warn('[comments] comments.json の読込に失敗:', e);
    }
  }

  start(): void {
    this.scheduleNext(rand(3_000, 8_000)); // 入室直後は早めに1件
  }

  stop(): void {
    if (this.timer !== null) clearTimeout(this.timer);
    this.timer = null;
  }

  /** talk.tsのセリフ再生完了通知を受けて、reply付きコメントを流す */
  notifySerifuPlayed(serifuId: string): void {
    const replies = this.comments.filter((c) => c.replyTo === serifuId);
    for (const reply of replies) {
      const { replyDelayMinMs, replyDelayMaxMs } = SITE_CONFIG.comments;
      setTimeout(() => this.push(reply), rand(replyDelayMinMs, replyDelayMaxMs));
    }
  }

  private scheduleNext(overrideMs?: number): void {
    const { minIntervalMs, maxIntervalMs } = SITE_CONFIG.comments;
    this.timer = window.setTimeout(
      () => {
        this.flowOne();
        this.scheduleNext();
      },
      overrideMs ?? rand(minIntervalMs, maxIntervalMs),
    );
  }

  private flowOne(): void {
    const roleOf = (c: WorldComment): CommentRole => c.role ?? 'viewer';
    // まずロールを頻度重みで抽選し、そのロール内(replyTo無し)から weight 抽選する
    const role = pickRole(SITE_CONFIG.comments.roleWeights);
    let pool = this.comments.filter(
      (c) => roleOf(c) === role && c.replyTo === null && c.text !== this.lastText,
    );
    // 選ばれたロールに候補が無ければ主体の viewer へフォールバック
    if (pool.length === 0) {
      pool = this.comments.filter(
        (c) => roleOf(c) === 'viewer' && c.replyTo === null && c.text !== this.lastText,
      );
    }
    const c = weightedPick(pool);
    if (c) this.push(c);
  }

  private push(c: WorldComment): void {
    this.lastText = c.text;
    this.ui.addComment({ name: c.name, badge: c.badge, text: c.text, role: c.role ?? 'viewer' });
  }
}
