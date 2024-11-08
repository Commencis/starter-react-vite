/// <reference types="vite-plugin-svgr/client"/>

declare module '*.svg' {
  const SVGComponent: (props: SVGComponentProps) => React.ReactElement;
  export default SVGComponent;
}

import { SVGProps } from 'react';

export type SVGRProps = {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
};

export type SVGComponentProps = SVGProps<SVGSVGElement> & SVGRProps;
