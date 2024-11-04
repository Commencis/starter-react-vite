import { ENVIRONMENTS } from '@/constants';
import { Environment } from '@/types';

export const getCurrentEnvironment = (): Environment => {
  const env = import.meta.env.MODE as Environment;

  if (!ENVIRONMENTS.includes(env)) {
    throw new Error(`Invalid environment: ${env}`);
  }

  return env;
};
