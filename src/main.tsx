import React from 'react';
import { createRoot } from 'react-dom/client';

import { getConfig } from '@/config';

import App from '@/App';

import '@/styles/main.scss';

const { isDevelopment } = getConfig();

const prepare = async (): Promise<void> => {
  if (isDevelopment) {
    const { worker } = await import('./lib/mocks/browser');
    worker.start({ onUnhandledRequest: 'bypass' });
  }
};

prepare().then(() =>
  createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
);
