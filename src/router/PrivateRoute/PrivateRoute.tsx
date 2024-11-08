import { PropsWithChildren, ReactNode } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { selectIsAuthenticated, useAppSelector } from '@/store';

export function PrivateRoute({ children }: PropsWithChildren): ReactNode {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children ?? <Outlet />;
}
