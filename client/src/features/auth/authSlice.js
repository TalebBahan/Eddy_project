import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const USER_COOKIE_NAME = "user";
const TOKEN_COOKIE_NAME = "token";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: Cookies.get(USER_COOKIE_NAME) ?? null,
    token: Cookies.get(TOKEN_COOKIE_NAME) ?? null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      Cookies.set(USER_COOKIE_NAME, user);
      Cookies.set(TOKEN_COOKIE_NAME, accessToken);
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      Cookies.remove(USER_COOKIE_NAME);
      Cookies.remove(TOKEN_COOKIE_NAME);
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
