import { http, HttpResponse } from 'msw';

import { getConfig } from '@/config';

const { baseApiUrl } = getConfig();

export const handlers = [
  http.post(`${baseApiUrl}/auth/login`, () => {
    return HttpResponse.json({
      token: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      userId: '1',
    });
  }),
  http.post(`${baseApiUrl}/auth/logout`, () => {
    return HttpResponse.json({
      success: true,
    });
  }),
  http.get(`${baseApiUrl}/user/*`, () => {
    return HttpResponse.json({
      name: 'Commencis WFE',
      email: 'wfe@commencis.com',
    });
  }),
];
