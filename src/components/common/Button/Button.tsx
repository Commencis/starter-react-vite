import { ButtonHTMLAttributes, ReactElement } from 'react';

import clsx from 'clsx';

import styles from '@/components/common/Button/Button.module.scss';

export type ButtonProps = {
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  label,
  size = 'medium',
  variant = 'contained',
  className,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...rest}
    >
      {label}
    </button>
  );
};
