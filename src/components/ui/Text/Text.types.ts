import type { JSX } from 'react';

import type { ColorPalette } from '@/types';

type Color = {
  [K in keyof ColorPalette]: `${K}-${Extract<keyof ColorPalette[K], string | number>}`;
}[keyof ColorPalette];

type AllowedTextTags =
  | 'p'
  | 'span'
  | 'strong'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type TextVariant =
  | 'bodyMedium'
  | 'bodyBold'
  | 'captionMedium'
  | 'captionBold'
  | 'footnoteMedium'
  | 'footnoteBold';

export type TextProps = {
  as?: Extract<keyof JSX.IntrinsicElements, AllowedTextTags>;
  variant?: TextVariant;
  color?: Color;
  children: string;
};
