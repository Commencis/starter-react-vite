import type { SVGProps } from 'react';

export type SVGRProps = {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
};

export type SVGComponentProps = SVGProps<SVGSVGElement> & SVGRProps;
