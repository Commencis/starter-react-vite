import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { UserResponse, userService } from '@/services';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getUserById: build.query<UserResponse, string>({
      queryFn: async (userId) => {
        const user = await userService.fetchUserById(userId);
        return { data: user };
      },
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
