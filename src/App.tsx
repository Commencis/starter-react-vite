import { ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { Loading } from '@/components/common';
import { i18n } from '@/lib';
import { ErrorBoundary, PreferencesProvider } from '@/providers';
import { router } from '@/router';
import { store } from '@/store';

export default function App(): ReactElement {
  return (
    <ErrorBoundary>
      <StoreProvider store={store}>
        <I18nextProvider i18n={i18n}>
          <PreferencesProvider>
            <RouterProvider router={router} fallbackElement={<Loading />} />
          </PreferencesProvider>
        </I18nextProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
}
