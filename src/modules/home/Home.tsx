import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { useConfig } from '@/hooks';

import { Icon } from '@/components/ui';

export function Home(): ReactElement {
  const { version } = useConfig();
  const { t } = useTranslation(['common', 'home']);
  return (
    <div>
      <span>
        <h1>{t('starterName')}</h1>
        <Icon name="chevron-down" />
      </span>
      <p>{`${t('home:title')} - ${t('version')}: ${version}`}</p>
    </div>
  );
}
