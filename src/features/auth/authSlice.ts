import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';

import { User } from 'models';

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

export interface LoginPayload {
  username: string;
  password: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state: any, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },

    loginSuccess(state: any, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },

    loginFailed(state: any, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state: any) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
