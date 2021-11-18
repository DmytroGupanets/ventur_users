import React from "react";
import { UserItemStyled } from "./UserItemStyled";

const UserItem = ({ user }) => {
  return (
    <UserItemStyled>
      <p>
        <span className="user__label">Name:</span>
        <span className="user__name">{user.name}</span>
      </p>
      <p>
        <span className="user__label">Email:</span>
        <span className="user__email">{user.email}</span>
      </p>
      <p>
        <span className="user__label">Gender:</span>
        <span className="user__gender">{user.gender}</span>
      </p>
      <p>
        <span className="user__label">Status:</span>
        <span className="user__status">{user.status}</span>
      </p>
    </UserItemStyled>
  );
};

export default UserItem;
