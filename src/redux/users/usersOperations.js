import { getAllUsers } from "../../services/usersApi";
import {
  getAllUsersError,
  getAllUsersRequest,
  getAllUsersSuccess,
} from "./usersActions";

export const getAllUsersOperation = () => async (dispatch, _) => {
  try {
    dispatch(getAllUsersRequest());

    const res = await getAllUsers();

    dispatch(getAllUsersSuccess(res.data));
  } catch (error) {
    dispatch(getAllUsersError());
  }
};
