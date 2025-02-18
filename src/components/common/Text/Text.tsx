import clsx from 'clsx';
import type { ReactElement } from 'react';

import type { TextProps } from '@/components/common/Text/Text.types';

import styles from '@/components/common/Text/Text.module.scss';

const Text = ({
  variant = 'bodyBold',
  as: Component = 'span',
  className,
  children,
}: TextProps): ReactElement => {
  return (
    <Component className={clsx(styles.typography, styles[variant], className)}>
      {children}
    </Component>
  );
};

export default Text;
