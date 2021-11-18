import { createReducer } from "@reduxjs/toolkit";
import {
  getAllUsersError,
  getAllUsersRequest,
  getAllUsersSuccess,
} from "./usersActions";

export const usersReducer = createReducer([], {
  [getAllUsersSuccess]: (state, { payload }) => payload.data,
});

export const isLoadingReducer = createReducer(false, {
  [getAllUsersRequest]: () => true,
  [getAllUsersSuccess]: () => false,
  [getAllUsersError]: () => false,
});

export const errorReducer = createReducer("", {
  [getAllUsersRequest]: () => "",
  [getAllUsersError]: (_, { payload }) => payload.error,
});
