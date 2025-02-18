import { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { useConfig } from '@/hooks';

import { Button } from '@/components/common/Button/Button';
import Text from '@/components/common/Text/Text';
import { Icon } from '@/components/ui';

export function Home(): ReactElement {
  const { version } = useConfig();
  const { t } = useTranslation(['common', 'home']);
  return (
    <div>
      <span>
        <h1>{t('starterName')}</h1>
        <Icon name="chevron-down" size={24} />
      </span>
      <Button label="Click Me" />
      <Text as="p" variant="bodyMedium">
        {`${t('home:title')} - ${t('version')}: ${version}`}
      </Text>
    </div>
  );
}
