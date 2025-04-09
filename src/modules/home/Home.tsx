import { type ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { useConfig } from '@/hooks';

import { Button, Icon, Text } from '@/components/ui';

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
      <Text variant="bodyMedium" color="neutral-700">
        {`${t('home:title')} - ${t('version')}: ${version}`}
      </Text>
    </div>
  );
}
