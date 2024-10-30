import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/scripts/vitest.script.ts',
        mockReset: true,
        exclude: [...configDefaults.exclude, './src/lib/mocks/browser.ts'],
      },
    })
  )
);
