import React from "react";
import "./UserContainer.css";
import logo from "../../../assets/logo.svg"

import Login from "../Login/Login";
import Register from "../Register/Register";

const UserContainer = ({ setVerified, setFamily, setMembers }) => {
  return (
    <div className="userContainer">
      <img className="logoLarge"src={logo} alt="Boxed Off Logo" />
      <Register />
      <Login
        setVerified={setVerified}
        setFamily={setFamily}
        setMembers={setMembers}
      />
    </div>
  );
};

export default UserContainer;
