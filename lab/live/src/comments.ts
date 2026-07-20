import { SITE_CONFIG } from './config';
import type { CommentDB, WorldComment } from './types';
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

/**
 * 世界観コメント流し(仕様§3-4/§6)。
 * - replyTo無しのコメントを1〜3件/分でランダムに流す(同一コメントの連続出現禁止)
 * - replyTo付きは該当セリフの再生完了から数秒後に流す
 * - 実在視聴者の偽装をしない: 表示はUI側で「観測記録」バッジ付き
 */
export class CommentFeed {
  private db: CommentDB = { comments: [] };
  private lastText: string | null = null;
  private timer: number | null = null;

  constructor(private ui: UI) {}

  async load(): Promise<void> {
    try {
      const res = await fetch(SITE_CONFIG.paths.comments);
      if (res.ok) this.db = (await res.json()) as CommentDB;
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
    const replies = this.db.comments.filter((c) => c.replyTo === serifuId);
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
    const pool = this.db.comments.filter((c) => c.replyTo === null && c.text !== this.lastText);
    const c = weightedPick(pool);
    if (c) this.push(c);
  }

  private push(c: WorldComment): void {
    this.lastText = c.text;
    this.ui.addComment({ name: c.name, badge: c.badge, text: c.text });
  }
}
