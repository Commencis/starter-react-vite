import { ReactElement } from 'react';

import clsx from 'clsx';

import type {
  ButtonProps,
  ButtonSize,
} from '@/components/common/Button/Button.types';
import { Text } from '@/components/common/Text/Text';
import type { TextVariant } from '@/components/common/Text/Text.types';

import styles from '@/components/common/Button/Button.module.scss';

const buttonSizeTextVariantMap = {
  small: 'footnoteMedium',
  medium: 'captionMedium',
  large: 'bodyMedium',
} as const satisfies Record<ButtonSize, TextVariant>;

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
      <Text as="span" variant={buttonSizeTextVariantMap[size]}>
        {label}
      </Text>
    </button>
  );
};
