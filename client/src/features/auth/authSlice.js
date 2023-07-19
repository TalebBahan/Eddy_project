import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const USER_COOKIE_NAME = "user";
const TOKEN_COOKIE_NAME = "token";
const ROLES_COOKIE_NAME = "roles";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: Cookies.get(USER_COOKIE_NAME) ?? null,
    token: Cookies.get(TOKEN_COOKIE_NAME) ?? null,
    roles: Cookies.get(ROLES_COOKIE_NAME) ? JSON.parse(Cookies.get(ROLES_COOKIE_NAME)) : null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, roles } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.roles = roles;
      console.log("roles", roles);
      Cookies.set(USER_COOKIE_NAME, user);
      Cookies.set(TOKEN_COOKIE_NAME, accessToken);
      Cookies.set(ROLES_COOKIE_NAME, JSON.stringify(roles));
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.roles = null;
      Cookies.remove(USER_COOKIE_NAME);
      Cookies.remove(TOKEN_COOKIE_NAME);
      Cookies.remove(ROLES_COOKIE_NAME);
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRoles = (state) => state.auth.roles;
