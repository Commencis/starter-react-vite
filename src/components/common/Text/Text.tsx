import clsx from 'clsx';
import type { ReactElement } from 'react';

import type { TextProps } from '@/components/common/Text/Text.types';

import styles from '@/components/common/Text/Text.module.scss';

export const Text = ({
  variant = 'bodyBold',
  as: Component = 'p',
  children,
}: TextProps): ReactElement => {
  return (
    <Component className={clsx(styles.typography, styles[variant])}>
      {children}
    </Component>
  );
};
