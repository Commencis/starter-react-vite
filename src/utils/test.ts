import { type ReactElement } from 'react';

import type { RenderOptions, RenderResult } from '@testing-library/react';
import { render as rtlRender } from '@testing-library/react';
import type {
  Options as UserEventOptions,
  UserEvent,
} from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';

type CustomRenderOptions = {
  render: Omit<RenderOptions, 'queries'>;
  userEvent: UserEventOptions;
};

type CustomRenderResult = {
  user: UserEvent;
} & RenderResult;

const customRender = (
  component: ReactElement,
  options?: CustomRenderOptions
): CustomRenderResult => ({
  ...rtlRender(component),
  user: userEvent.setup(options?.userEvent),
});

export * from '@testing-library/react';
export { customRender as render };
