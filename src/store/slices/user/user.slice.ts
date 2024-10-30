import { createAppSlice } from '../../createAppSlice';
import { userApi } from './user.api';

export type User = {
  name: string;
  email: string;
};

export type UserSliceState = {
  user: User | null;
};

const initialState: UserSliceState = {
  user: null,
};

export const userSlice = createAppSlice({
  name: 'user',
  initialState,
  reducers: (create) => ({
    resetUser: create.reducer(() => initialState),
    fetchUserByIdAsync: create.asyncThunk(
      async (userId: string, { dispatch }) =>
        dispatch(userApi.endpoints.getUserById.initiate(userId)),
      {
        fulfilled: (state, action) => {
          if (action.payload.data) {
            state.user = action.payload.data;
          }
        },
      }
    ),
  }),
  selectors: {
    selectUser: (state) => state.user,
  },
});

export const { resetUser, fetchUserByIdAsync } = userSlice.actions;

export const { selectUser } = userSlice.selectors;
