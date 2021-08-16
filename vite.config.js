import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactJsx from 'vite-react-jsx';

export default defineConfig({
  publicDir: 'static',
  build: {
    outDir: 'build',
  },
  plugins: [reactJsx(), reactRefresh()],
  server: {
    fs: {
      allow: ['.'],
    },
  },
});
