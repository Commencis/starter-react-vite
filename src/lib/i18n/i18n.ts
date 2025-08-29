import type { i18n as i18nType } from 'i18next';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getConfig } from '@/config';
import {
  DEFAULT_LOCALE,
  LOCALIZATION_NAMESPACES,
  SUPPORTED_LOCALES,
} from '@/constants';

import COMMON_EN from '@/assets/locales/en/common.json';
import HOME_EN from '@/assets/locales/en/home.json';
import COMMON_TR from '@/assets/locales/tr/common.json';
import HOME_TR from '@/assets/locales/tr/home.json';

const resources = {
  en: {
    common: COMMON_EN,
    home: HOME_EN,
  },
  tr: {
    common: COMMON_TR,
    home: HOME_TR,
  },
};

export const createI18nInstance = async (): Promise<i18nType> => {
  const { isDevelopment } = getConfig();

  const i18nInstance = createInstance();

  i18nInstance.use(initReactI18next);

  await i18nInstance.init({
    resources,
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES,
    ns: LOCALIZATION_NAMESPACES,
    defaultNS: LOCALIZATION_NAMESPACES[0],
    debug: isDevelopment,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

  return i18nInstance;
};

export const i18n = await createI18nInstance();
