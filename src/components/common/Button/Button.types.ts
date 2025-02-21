import { ButtonHTMLAttributes } from 'react';

import type { TextVariant } from '@/components/common/Text/Text.types';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'filled' | 'outlined' | 'text';

export type ButtonTextVariant = Record<ButtonSize, TextVariant>;
export type ButtonProps = {
  label: string;
  size?: ButtonSize;
  variant?: ButtonType;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
