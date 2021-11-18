import { createAction } from "@reduxjs/toolkit";

export const getAllUsersRequest = createAction("users/getAllUsersRequest");
export const getAllUsersSuccess = createAction("users/getAllUsersSuccess");
export const getAllUsersError = createAction("users/getAllUsersError");
