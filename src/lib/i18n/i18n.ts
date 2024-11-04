import { initReactI18next } from 'react-i18next';

import { createInstance, i18n as i18nType } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import {
  DEFAULT_LOCALE,
  LOCALIZATION_NAMESPACES,
  SUPPORTED_LOCALES,
} from '@/constants';
import { Locale, LocalizationNamespace } from '@/types';

import { getConfig } from '@/config';

export const createI18nInstance = async (): Promise<i18nType> => {
  const { isDevelopment } = getConfig();

  const i18nInstance = createInstance();

  i18nInstance.use(initReactI18next);

  i18nInstance.use(
    resourcesToBackend(
      async (locale: Locale, namespace: LocalizationNamespace) => {
        try {
          const module = await import(
            `@/assets/locales/${locale}/${namespace}.json`
          );
          return module;
        } catch (error) {
          throw new Error(
            `Error loading translations for ${locale}/${namespace}: ${error}`
          );
        }
      }
    )
  );

  await i18nInstance.init({
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
