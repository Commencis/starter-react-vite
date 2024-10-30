import { useMemo } from 'react';

import { type Config, getConfig } from '@/config';

export const useConfig = (): Config => {
  const config = useMemo<Config>(() => getConfig(), []);

  return config;
};
