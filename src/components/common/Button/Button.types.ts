import { ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'filled' | 'outlined' | 'text';

export type ButtonProps = {
  label: string;
  size?: ButtonSize;
  variant?: ButtonType;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
