import type { ENVIRONMENT } from '@/constants';

import type { ObjectValues } from './generic';

export type Environment = ObjectValues<typeof ENVIRONMENT>;
