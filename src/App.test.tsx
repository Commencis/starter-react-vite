import { render } from '@/utils/test';

import App from '@/App';

// Remove this after fixing globals in eslint-config
// eslint-disable-next-line no-undef
test('should render App component', () => {
  render(<App />);
});
