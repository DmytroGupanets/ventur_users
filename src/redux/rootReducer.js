import { combineReducers } from "redux";
import {
  usersReducer,
  isLoadingReducer,
  errorReducer,
} from "./users/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default rootReducer;
