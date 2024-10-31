import {
  createBrowserRouter,
  LazyRouteFunction,
  RouteObject,
} from 'react-router-dom';

import { ROUTES } from '@/constants';
import { NotFoundPage } from '@/pages/not-found/not-found.page';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';

const homePageLazyLoader: LazyRouteFunction<RouteObject> = async () => {
  const { HomePage } = await import('@/pages/homepage/home.page');
  return { loader: HomePage.loader, Component: HomePage };
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        lazy: homePageLazyLoader,
      },
    ],
  },
  {
    path: ROUTES.UNKNOWN,
    element: <NotFoundPage />,
  },
]);
