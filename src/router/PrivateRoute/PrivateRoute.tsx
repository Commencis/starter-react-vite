import type { ReactNode } from 'react';

import { Navigate, Outlet } from 'react-router';

import { selectIsAuthenticated, useAppSelector } from '@/store';

export function PrivateRoute(): ReactNode {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
