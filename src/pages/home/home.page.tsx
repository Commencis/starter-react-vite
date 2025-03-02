import { ReactElement } from 'react';

import { useLoaderData } from 'react-router';

import { MainLayout } from '@/layouts';
import { Home } from '@/modules/home';

import { HomePageLoaderData } from './home.loader';

export function HomePage(): ReactElement {
  const loaderData = useLoaderData<HomePageLoaderData>();

  return (
    <MainLayout>
      <p>{loaderData.data}</p>
      <Home />
    </MainLayout>
  );
}
