/// <reference types="vite-plugin-svgr/client"/>

declare module '*.svg' {
  import type { ReactElement } from 'react';

  import type { SVGComponentProps } from './svg';

  const SVGComponent: (props: SVGComponentProps) => ReactElement;
  export default SVGComponent;
}
