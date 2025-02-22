import { ReactElement } from 'react';

import clsx from 'clsx';

import type {
  ButtonProps,
  ButtonTextVariant,
} from '@/components/common/Button/Button.types';
import { Text } from '@/components/common/Text/Text';

import styles from '@/components/common/Button/Button.module.scss';

const BUTTON_TEXT_VARIANT: ButtonTextVariant = {
  small: 'footnoteMedium',
  medium: 'captionMedium',
  large: 'bodyMedium',
};

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
      <Text as="span" variant={BUTTON_TEXT_VARIANT[size]}>
        {label}
      </Text>
    </button>
  );
};
