import { ReactElement } from 'react';

import { MainLayout } from '@/layouts';

import { Home } from '@/modules/home';

async function loader(): Promise<unknown> {
  return null;
}

export function HomePage(): ReactElement {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

HomePage.loader = loader;
