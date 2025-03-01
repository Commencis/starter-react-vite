import React from 'react';
import { createRoot } from 'react-dom/client';

import { getConfig } from '@/config';
import { prepareMocks } from '@/utils';

import App from '@/App';

import '@/styles/main.scss';

const { isDevelopment } = getConfig();

await prepareMocks(isDevelopment);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
