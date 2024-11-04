import { commencisReactConfig, defineConfig } from '@commencis/eslint-config';

export default defineConfig(...commencisReactConfig, {
  ignores: ['dist/*', 'storybook-static/*'],
});
