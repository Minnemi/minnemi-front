import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function fullPath(path) {
  return fileURLToPath(new URL(path, import.meta.url));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fullPath('./src'),
      '@views': fullPath('./src/views'),
      '@components': fullPath('./src/components'),
      '@@forms': fullPath('./src/components/forms'),
      '@@utils': fullPath('./src/components/utils'),
      '@@lib': fullPath('./src/lib'),
      '@@shared': fullPath('./src/shared'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables.scss";'
      }
    }
  }
});
