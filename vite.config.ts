import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import type { UserConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default ({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      react(),
      svgr({
        // svgr options: https://react-svgr.com/docs/options/
        svgrOptions: {
          exportType: 'default',
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: '**/*.svg',
      }),
    ],
    esbuild: {
      target: 'es2022',
    },
    build: {
      target: 'es2022',
    },
    server: {
      open: true,
      host: true,
      port: parseInt(env.VITE_PORT) || 3000,
      strictPort: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/globals" as *;`,
        },
      },
    },
  });
};
