import { SITE_CONFIG } from './config';
import type { Weather } from './types';

/**
 * Open-Meteo(APIキー不要・個人利用無料)で現在天気を取得する。
 * 静的サイトのままクライアントfetchで完結。取得失敗・オフライン時は null を返し、
 * 呼び出し側は weather 条件付きセリフを候補から外す(通常idleにフォールバック)。
 *
 * テスト用に `?weather=rain` クエリで天候を偽装できる。
 */
export async function fetchWeather(): Promise<Weather | null> {
  const forced = new URLSearchParams(location.search).get('weather');
  if (forced === 'clear' || forced === 'cloud' || forced === 'rain' || forced === 'snow') {
    return forced;
  }

  const { latitude, longitude, url } = SITE_CONFIG.weather;
  try {
    const res = await fetch(`${url}?latitude=${latitude}&longitude=${longitude}&current=weather_code`);
    if (!res.ok) return null;
    const data = (await res.json()) as { current?: { weather_code?: number } };
    const code = data.current?.weather_code;
    if (typeof code !== 'number') return null;
    return mapWmoCode(code);
  } catch {
    return null;
  }
}

/** WMO weather_code を clear|cloud|rain|snow へ(目安マッピング) */
function mapWmoCode(code: number): Weather {
  if (code === 0) return 'clear';
  // 降雪・着氷性の雪: 71-77, 85, 86
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
  // 降雨・霧雨・にわか雨・雷雨: 51-67, 80-82, 95-99
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || (code >= 95 && code <= 99)) {
    return 'rain';
  }
  // それ以外(1-3の薄曇〜曇, 45/48の霧 など)は cloud 扱い
  return 'cloud';
}
