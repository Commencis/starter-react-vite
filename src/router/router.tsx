import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { NotFoundPage } from '@/pages/not-found/not-found.page';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import('@/pages/homepage/home.page');
          return { loader: HomePage.loader, Component: HomePage };
        },
      },
    ],
  },
  {
    path: ROUTES.WILDCARD,
    element: <NotFoundPage />,
  },
]);
