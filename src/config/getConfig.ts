import { Environment } from '@/types';

import { ENVIRONMENT } from '@/constants';

import { getCurrentEnvironment } from './getCurrentEnvironment';
import { getPackageInfo } from './getPackageInfo';

export type Config = {
  baseApiUrl: string;
  version: string;
  buildNumber: string;
  environment: Environment;
  isDevelopment: boolean;
  isTest: boolean;
  isUat: boolean;
  isStaging: boolean;
  isProduction: boolean;
};

export const getConfig = (): Config => {
  try {
    const { version, buildNumber } = getPackageInfo();
    const environment = getCurrentEnvironment();

    const config: Config = {
      version,
      buildNumber,
      environment,
      baseApiUrl: import.meta.env.VITE_BASE_API_URL,
      isDevelopment: environment === ENVIRONMENT.DEVELOPMENT,
      isTest: environment === ENVIRONMENT.TEST,
      isUat: environment === ENVIRONMENT.UAT,
      isStaging: environment === ENVIRONMENT.STAGING,
      isProduction: environment === ENVIRONMENT.PRODUCTION,
    };

    Object.entries(config).forEach(([key, value]) => {
      if (typeof value === 'undefined' || value === null) {
        throw new Error(`Missing config/environment variable: ${key}`);
      }
    });

    return config;
  } catch (error) {
    throw new Error(`Failed to load configuration: ${error}`);
  }
};
