import { defineConfig } from 'vite';

export default defineConfig({
  // 相対パス出力: ルート直下でもサブパス(/konome/等)配下でもそのまま動く
  base: './',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1600,
  },
});
