import { ReactElement } from 'react';

import clsx from 'clsx';

import { ButtonProps } from '@/components/common/Button/Button.types';

import styles from '@/components/common/Button/Button.module.scss';

export const Button = ({
  label,
  size = 'medium',
  variant = 'filled',
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
