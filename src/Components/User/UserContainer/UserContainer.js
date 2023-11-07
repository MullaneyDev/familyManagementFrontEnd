import React from "react";
import "./UserContainer.css";

import Login from "../Login/Login";
import Register from "../Register/Register";

const UserContainer = ({ setVerified, setFamily, setMembers }) => {
  return (
    <>
      <Login
        setVerified={setVerified}
        setFamily={setFamily}
        setMembers={setMembers}
      />
      <Register />
    </>
  );
};

export default UserContainer;
