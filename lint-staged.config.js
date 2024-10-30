export default {
  '*.json': 'prettier --write',
  '*.{css,scss}': 'stylelint --fix',
  '*.{js,cjs,mjs,jsx,ts,tsx}': 'eslint --fix',
};
