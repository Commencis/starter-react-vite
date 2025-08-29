import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { TextProps } from '@/components/ui/Text/Text.types';
import styles from '@/components/ui/Text/Text.module.scss';

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
