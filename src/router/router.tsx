import {
  createBrowserRouter,
  LazyRouteFunction,
  RouteObject,
} from 'react-router';

import { ROUTES } from '@/constants';

import { Loading } from '@/components/common';
import { NotFoundPage } from '@/pages/not-found/not-found.page';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';

const homePageLazyLoader: LazyRouteFunction<RouteObject> = async () => {
  const [{ HomePage }, { homePageLoader }] = await Promise.all([
    import('@/pages/home/home.page'),
    import('@/pages/home/home.loader'),
  ]);
  return {
    loader: homePageLoader,
    Component: HomePage,
    HydrateFallback: Loading,
  };
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME.PATH,
    element: <PrivateRoute />,
    children: [
      {
        id: ROUTES.HOME.ID,
        index: true,
        lazy: homePageLazyLoader,
      },
    ],
  },
  {
    path: ROUTES.UNKNOWN.PATH,
    id: ROUTES.UNKNOWN.ID,
    element: <NotFoundPage />,
  },
]);
