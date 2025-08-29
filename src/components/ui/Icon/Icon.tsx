import type { ReactElement } from 'react';
import { Suspense, useMemo } from 'react';

import type { SVGComponentProps } from '@/types';

import type { IconName, IconSize } from './Icon.types';
import { lazyLoadIcon } from './Icon.utils';

export type IconProps = {
  name: IconName;
  size?: IconSize;
  color?: string;
} & Omit<SVGComponentProps, 'fill' | 'width' | 'height'>;

export function Icon({
  name,
  color,
  size = 32,
  ...props
}: IconProps): ReactElement {
  const { ref: _, ...svgProps } = props;
  const IconComponent = useMemo(() => lazyLoadIcon(name), [name]);

  return (
    <Suspense fallback={null}>
      <IconComponent
        width={`${size}px`}
        height={`${size}px`}
        fill={color}
        {...svgProps}
      />
    </Suspense>
  );
}
