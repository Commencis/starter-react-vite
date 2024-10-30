import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { useConfig } from '@/hooks';

export function Home(): ReactElement {
  const { version } = useConfig();
  const { t } = useTranslation(['common', 'home']);
  return (
    <div>
      <h1>{t('starterName')}</h1>
      <p>{t('home:title')}</p>
      <p>
        {t('version')}: {version}
      </p>
    </div>
  );
}
