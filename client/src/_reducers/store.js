import { configureStore } from "@reduxjs/toolkit";
import {userDataSlice, registerSlice, loginSlice } from "./user_reducer";

const store = configureStore({
  reducer: {
    userData : userDataSlice.reducer,
    register : registerSlice.reducer,
    loginSlice: loginSlice.reducer,
  }
})
export default store;

export const { auth } = userDataSlice.actions;
export const { registerUser } = registerSlice.actions;
export const { loginUser } = loginSlice.actions;