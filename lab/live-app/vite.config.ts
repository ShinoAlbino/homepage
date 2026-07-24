import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import license from 'rollup-plugin-license';

export default defineConfig({
  // 相対パス出力: サブパス(/lab/live/)配下でもそのまま動く(base不一致=真っ白を回避)
  base: './',
  build: {
    // ソースは lab/live-app/、公開物は lab/live/ 直下へ出す(URLから /dist/ を除去)
    outDir: '../live',
    emptyOutDir: true,
    target: 'es2020',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      plugins: [
        // 依存OSSのライセンス一覧を機械生成(クレジットページから参照。手書き禁止)
        license({
          thirdParty: {
            output: {
              file: fileURLToPath(new URL('../live/THIRD-PARTY-LICENSES.txt', import.meta.url)),
              encoding: 'utf-8',
            },
          },
        }),
      ],
    },
  },
});
