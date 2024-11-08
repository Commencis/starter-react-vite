import { ReactElement, Suspense, useMemo } from 'react';

import { SVGComponentProps } from '@/types';

import { IconName } from './Icon.types';
import { lazyLoadIcon } from './Icon.utils';

export type IconProps = {
  name: IconName;
  color?: string;
} & Omit<SVGComponentProps, 'fill'>;

export function Icon({
  name,
  color,
  width = '32px',
  height = '32px',
  ...props
}: IconProps): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref: _, ...svgProps } = props;
  const IconComponent = useMemo(() => lazyLoadIcon(name), [name]);

  return (
    <Suspense fallback={null}>
      <IconComponent width={width} height={height} fill={color} {...svgProps} />
    </Suspense>
  );
}
