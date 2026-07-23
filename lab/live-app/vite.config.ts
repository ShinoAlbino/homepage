import { defineConfig } from 'vite';

export default defineConfig({
  // 相対パス出力: サブパス(/lab/live/)配下でもそのまま動く(base不一致=真っ白を回避)
  base: './',
  build: {
    // ソースは lab/live-app/、公開物は lab/live/ 直下へ出す(URLから /dist/ を除去)
    outDir: '../live',
    emptyOutDir: true,
    target: 'es2020',
    chunkSizeWarningLimit: 1600,
  },
});
