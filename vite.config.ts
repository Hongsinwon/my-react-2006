import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/naver': {
          target: 'https://openapi.naver.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/naver/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              if (env.VITE_CLIENT_ID) {
                proxyReq.setHeader('X-Naver-Client-Id', env.VITE_CLIENT_ID);
              }
              if (env.VITE_CLIENT_SECRET) {
                proxyReq.setHeader('X-Naver-Client-Secret', env.VITE_CLIENT_SECRET);
              }
            });
          },
        },
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
    },
  };
});
