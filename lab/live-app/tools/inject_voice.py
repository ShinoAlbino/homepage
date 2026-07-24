# -*- coding: utf-8 -*-
"""
serifu.json の各項目に voice フィールドを付与する。
  voice = "<category>/<category>_<id>.wav"  (カテゴリの ':' 等はファイル側と同じく '_' に正規化)

既存フォーマット(1項目=1行, 内側スペース付きスタイル, カテゴリ区切りの空行)を壊さないよう、
JSONの再シリアライズはせず、各項目行の末尾 '}' の直前へ voice キーをテキスト挿入する。
改行は LF に統一して出力する(リポジトリの blob は LF 管理のため)。
idempotent: 既に "voice" を含む行はスキップ。

  python inject_voice.py            # 付与
  python inject_voice.py --check    # 付与せず、各行の voice 値を表示するだけ
"""
import argparse
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
SERIFU = os.path.join(HERE, "..", "public", "data", "serifu.json")


def sanitize(name):
    for ch in ':/\\<>|?*"':
        name = name.replace(ch, "_")
    return name


def voice_value(item):
    cat = sanitize(item["category"])
    return f"{cat}/{cat}_{item['id']}.wav"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    # バイナリで読み、CRLF/LF を LF に正規化してから行分割(非項目行はバイト保持)
    raw = open(SERIFU, "rb").read().replace(b"\r\n", b"\n")
    lines = raw.split(b"\n")

    out = []
    n = 0
    for ln in lines:
        if not ln.lstrip().startswith(b"{") or b'"voice"' in ln:
            out.append(ln)
            continue

        txt = ln.decode("utf-8").rstrip()
        trailing_comma = txt.endswith(",")
        core = txt[:-1] if trailing_comma else txt
        item = json.loads(core)
        voice = voice_value(item)

        if args.check:
            print(f'{item["id"]:32s} -> {voice}')
            out.append(ln)
            n += 1
            continue

        # 最後の '}' の直前へ ', "voice": "..."' を挿入(内側スペース書式を維持)
        idx = core.rfind("}")
        head = core[:idx].rstrip()          # '  { ... "weight": 1'
        tail = core[idx:]                    # '}'
        new_core = f'{head}, "voice": "{voice}" {tail}' + ("," if trailing_comma else "")
        out.append(new_core.encode("utf-8"))
        n += 1

    if args.check:
        print(f"(check) 対象 {n} 項目")
        return

    open(SERIFU, "wb").write(b"\n".join(out))  # LF 出力
    print(f"voice フィールドを {n} 項目に付与しました -> {os.path.relpath(SERIFU, HERE)}")


if __name__ == "__main__":
    main()
