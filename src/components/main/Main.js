import React from "react";

import { Route, Routes } from "react-router-dom";

import AddUserPage from "../../pages/AddUserPage";
import HomePage from "../../pages/HomePage";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/new-user" element={<AddUserPage />} />
    </Routes>
  );
};

export default Main;
