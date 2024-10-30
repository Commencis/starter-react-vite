import type { Environment } from '@/types';

export const ENVIRONMENT = Object.freeze({
  DEVELOPMENT: 'development',
  TEST: 'test',
  UAT: 'uat',
  STAGING: 'staging',
  PRODUCTION: 'production',
});

export const ENVIRONMENTS: Environment[] = Object.values(ENVIRONMENT);
