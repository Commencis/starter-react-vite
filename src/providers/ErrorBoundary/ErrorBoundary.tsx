import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';

import { Error500 } from '@/components/error';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error(
      'An unexpected error occurred. Please try again later.',
      error,
      errorInfo
    );
  }

  override render(): ReactNode {
    if (this.state.hasError) {
      return <Error500 />;
    }

    return this.props.children;
  }
}
