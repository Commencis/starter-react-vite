import type { AxiosHeaderValue } from 'axios';

import type { HEADER_KEY } from '@/constants';

import type { ObjectValues } from './generic';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type HeaderKey = ObjectValues<typeof HEADER_KEY>;

export type HttpHeader = Partial<Record<HeaderKey, AxiosHeaderValue>>;
