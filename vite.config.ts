import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'globalConfig': path.resolve(__dirname, 'globalConfig')
    },
  },
});
