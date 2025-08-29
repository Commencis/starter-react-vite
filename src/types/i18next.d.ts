import type common from '@/assets/locales/en/common.json';
import type home from '@/assets/locales/en/home.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNs: 'common';
    resources: {
      common: typeof common;
      home: typeof home;
    };
  }
}
