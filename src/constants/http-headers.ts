import type { HttpHeader } from '@/types';

export const HEADER_KEY = {
  ACCEPT: 'Accept',
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization',
} as const;

export const HEADERS = {
  CONTENT_TYPE_JSON: { [HEADER_KEY.CONTENT_TYPE]: 'application/json' },
  ACCEPT_JSON: { [HEADER_KEY.ACCEPT]: 'application/json' },
} as const satisfies Record<string, HttpHeader>;
