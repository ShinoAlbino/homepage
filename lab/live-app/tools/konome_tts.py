# -*- coding: utf-8 -*-
"""
此芽ボイス一括WAV化スクリプト (VOICEVOX ローカルエンジン使用)

声のレシピ:
  ベース         : 冥鳴ひまり (ノーマル)
  モーフィング相手: ナースロボ＿タイプＴ (ノーマル)
  morph_rate     : 0.44
  話速0.93 / 音高0.00 / 抑揚0.96 / 音量0.70 / 間1.60 / 開始無音0.20 / 終了無音0.20

使い方:
  python konome_tts.py --limit 3      # 先頭3本だけ試す
  python konome_tts.py                # 全210本
"""
import argparse
import json
import os
import sys
import time
import urllib.parse
import urllib.request

ENGINE = "http://127.0.0.1:50021"

# 声のレシピ
BASE_NAME = "冥鳴ひまり"
BASE_STYLE = "ノーマル"
TARGET_NAME = "ナースロボ＿タイプＴ"
TARGET_STYLE = "ノーマル"
MORPH_RATE = 0.44

PARAMS = {
    "speedScale": 0.93,        # 話速
    "pitchScale": 0.00,        # 音高
    "intonationScale": 0.96,   # 抑揚
    "volumeScale": 0.70,       # 音量
    "pauseLengthScale": 1.60,  # 間
    "prePhonemeLength": 0.20,  # 開始無音
    "postPhonemeLength": 0.20, # 終了無音
}

HERE = os.path.dirname(os.path.abspath(__file__))
SERIFU = os.path.join(HERE, "..", "public", "data", "serifu.json")
# 正規ルート: public/voice/ に出力 → viteビルドで lab/live/voice/ へコピーされ本番反映される。
# (lab/live/ に直接置くと emptyOutDir:true の次回ビルドで消えるため不可)
OUT_ROOT = os.path.join(HERE, "..", "public", "voice")


def http_get(path):
    with urllib.request.urlopen(ENGINE + path, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))


def http_post_json(path, body):
    data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        ENGINE + path, data=data,
        headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()


def resolve_style_id(speakers, speaker_name, style_name):
    """名前からstyle IDを解決 (手打ち禁止)。完全一致→部分一致の順で探す。"""
    for s in speakers:
        if s["name"] == speaker_name:
            for st in s["styles"]:
                if st["name"] == style_name:
                    return st["id"]
            raise SystemExit(
                f"[FATAL] 話者 '{speaker_name}' にスタイル '{style_name}' が見つかりません。"
                f" 利用可能: {[st['name'] for st in s['styles']]}")
    raise SystemExit(f"[FATAL] 話者 '{speaker_name}' が /speakers に見つかりません。")


def sanitize(name):
    """カテゴリ名をファイル/フォルダ名に使える形へ (例: 'program:morning' -> 'program_morning')。"""
    for ch in ':/\\<>|?*"':
        name = name.replace(ch, "_")
    return name


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="先頭N本だけ生成 (0=全部)")
    args = ap.parse_args()

    speakers = http_get("/speakers")
    base_id = resolve_style_id(speakers, BASE_NAME, BASE_STYLE)
    target_id = resolve_style_id(speakers, TARGET_NAME, TARGET_STYLE)
    print(f"base   : {BASE_NAME}({BASE_STYLE}) -> styleID {base_id}")
    print(f"target : {TARGET_NAME}({TARGET_STYLE}) -> styleID {target_id}")
    print(f"morph_rate = {MORPH_RATE}")

    # モーフィング可否チェック
    morphable = http_post_json(f"/morphable_targets",
                               [base_id])
    mt = json.loads(morphable.decode("utf-8"))
    allowed = mt[0].get(str(target_id), {}) if mt else {}
    if allowed and allowed.get("is_morphable") is False:
        raise SystemExit(f"[FATAL] {BASE_NAME}->{TARGET_NAME} はモーフィング不可 (エンジンの許諾設定)。")
    print(f"morphable: {allowed.get('is_morphable', 'unknown')}")

    data = json.load(open(SERIFU, encoding="utf-8"))
    if args.limit > 0:
        data = data[:args.limit]

    total = len(data)
    print(f"合成対象: {total} 本\n")

    ok = 0
    for i, item in enumerate(data, 1):
        sid = item["id"]
        cat = sanitize(item["category"])
        text = item["text"]

        out_dir = os.path.join(OUT_ROOT, cat)
        os.makedirs(out_dir, exist_ok=True)
        out_path = os.path.join(out_dir, f"{cat}_{sid}.wav")

        # 1) audio_query (baseスタイルでクエリ生成)
        query = json.loads(_audio_query(base_id, text))

        # 2) パラメータ上書き
        for k, v in PARAMS.items():
            query[k] = v

        # 3) synthesis_morphing
        mq = urllib.parse.urlencode({
            "base_speaker": base_id,
            "target_speaker": target_id,
            "morph_rate": MORPH_RATE,
        })
        wav = http_post_json(f"/synthesis_morphing?{mq}", query)
        with open(out_path, "wb") as f:
            f.write(wav)

        ok += 1
        rel = os.path.relpath(out_path, HERE).replace("\\", "/")
        print(f"[{i:3d}/{total}] {rel}  ({len(wav)//1024} KB)")

    print(f"\n完了: {ok}/{total} 本を {os.path.relpath(OUT_ROOT, HERE)} に出力しました。")


def _audio_query(speaker, text):
    q = urllib.parse.urlencode({"speaker": speaker, "text": text})
    req = urllib.request.Request(
        ENGINE + f"/audio_query?{q}", data=b"", method="POST")
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode("utf-8")


if __name__ == "__main__":
    main()
