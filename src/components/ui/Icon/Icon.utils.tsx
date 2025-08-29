import { type FunctionComponent, lazy, type LazyExoticComponent } from 'react';

import type { SVGComponentProps } from '@/types';

import type { IconName } from './Icon.types';

export type LazyLoadIconReturnType = LazyExoticComponent<
  FunctionComponent<SVGComponentProps>
>;

export function lazyLoadIcon(name: IconName): LazyLoadIconReturnType {
  return lazy(() => import(`@/assets/icons/${name}.svg`));
}
