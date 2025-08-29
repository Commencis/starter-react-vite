import type { PropsWithChildren, ReactElement } from 'react';

export function MainLayout({
  children,
  ...rest
}: PropsWithChildren): ReactElement {
  return (
    <main id="layout-main" {...rest}>
      {children}
    </main>
  );
}
