import type { ReactElement } from 'react';

import clsx from 'clsx';

import type {
  ButtonProps,
  ButtonSize,
} from '@/components/ui/Button/Button.types';
import type { TextVariant } from '@/components/ui/Text/Text.types';
import styles from '@/components/ui/Button/Button.module.scss';
import { Text } from '@/components/ui/Text/Text';

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
