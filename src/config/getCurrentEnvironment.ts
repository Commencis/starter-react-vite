import type { Environment } from '@/types';
import { ENVIRONMENTS } from '@/constants';

export const getCurrentEnvironment = (): Environment => {
  const env = import.meta.env.MODE as Environment;

  if (!ENVIRONMENTS.includes(env)) {
    throw new Error(`Invalid environment: ${env}`);
  }

  return env;
};
