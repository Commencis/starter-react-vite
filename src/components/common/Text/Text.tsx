import clsx from 'clsx';
import type { ReactElement } from 'react';

import type { TextProps } from '@/components/common/Text/Text.types';

import styles from '@/components/common/Text/Text.module.scss';

export const Text = ({
  as: Component = 'p',
  color,
  variant = 'bodyMedium',
  children,
}: TextProps): ReactElement => {
  return (
    <Component
      className={clsx(
        styles.typography,
        styles[variant],
        color && styles[color]
      )}
    >
      {children}
    </Component>
  );
};
