import { JSX } from 'react';

export type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: TextVariant;
  className?: string;
  children: string;
};

export type TextVariant =
  | 'bodyMedium'
  | 'bodyBold'
  | 'captionMedium'
  | 'captionBold';
