import { AxiosHeaderValue } from 'axios';

import { HEADER_KEY } from '@/constants';

import { ObjectValues } from './generic';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type HeaderKey = ObjectValues<typeof HEADER_KEY>;

export type HttpHeader = Partial<Record<HeaderKey, AxiosHeaderValue>>;
