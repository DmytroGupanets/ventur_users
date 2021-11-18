import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllUsersOperation } from "../../redux/users/usersOperations";
import { getUsers } from "../../redux/users/usersSelectors";
import { ListOfUsersStyled } from "./ListOfUsersStyled";
import UserItem from "./userItem/UserItem";

const ListOfUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  useEffect(() => {
    dispatch(getAllUsersOperation());
  }, [dispatch]);

  return (
    <ListOfUsersStyled>
      {users && users.map((user) => <UserItem key={user.id} user={user} />)}
    </ListOfUsersStyled>
  );
};

export default ListOfUsers;
