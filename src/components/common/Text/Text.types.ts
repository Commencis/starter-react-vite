import { JSX } from 'react';

import { ColorPalette, ColorValue } from '@/types';

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

type Color = `${keyof ColorPalette}-${ColorValue}`;

export type TextProps = {
  as?: Extract<keyof JSX.IntrinsicElements, AllowedTextTags>;
  variant?: TextVariant;
  color?: Color;
  children: string;
};
