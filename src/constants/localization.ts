import { Locale, LocalizationNamespace } from '@/types';

export const LOCALIZATION_NAMESPACE = Object.freeze({
  COMMON: 'common',
  HOME: 'home',
} as const satisfies Record<string, LocalizationNamespace>);

export const LOCALIZATION_NAMESPACES: LocalizationNamespace[] = Object.values(
  LOCALIZATION_NAMESPACE
);

export const LOCALE = Object.freeze({
  EN: 'en',
  TR: 'tr',
} as const satisfies Record<string, Locale>);

export const SUPPORTED_LOCALES: Locale[] = Object.values(LOCALE);

export const DEFAULT_LOCALE = LOCALE.EN;
