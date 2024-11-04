import { createAppSlice } from '@/utils';

import { authService, LoginCredentials } from '@/services';
import { fetchUserByIdAsync } from '@/store';

export type AuthSliceState = {
  userId: string;
  isAuthenticated: boolean;
};

const initialState: AuthSliceState = {
  userId: '',
  isAuthenticated: true,
};

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: (create) => ({
    loginAsync: create.asyncThunk(
      async (credentials: LoginCredentials, { dispatch }) => {
        const response = await authService.login(credentials);
        dispatch(fetchUserByIdAsync(response.userId));
        return response;
      },
      {
        fulfilled: (state, action) => {
          state.isAuthenticated = true;
          state.userId = action.payload.userId;
        },
      }
    ),
    logoutAsync: create.asyncThunk(
      async (userId: string) => await authService.logout(userId),
      {
        fulfilled: (state) => {
          state.isAuthenticated = false;
          state.userId = '';
        },
      }
    ),
  }),
  selectors: {
    selectIsAuthenticated: (state) => state.isAuthenticated,
  },
});

export const { loginAsync, logoutAsync } = authSlice.actions;

export const { selectIsAuthenticated } = authSlice.selectors;
