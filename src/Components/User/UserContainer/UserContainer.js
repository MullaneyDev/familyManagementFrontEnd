import React from "react";
import "./UserContainer.css";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import Login from "../Login/Login";
import Register from "../Register/Register";

const UserContainer = ({ setVerified, setFamily, setMembers, members }) => {
  return (
    <div className="userContainer">
      <Logo className="logoLarge" />
      <Register />
      <Login
        setVerified={setVerified}
        setFamily={setFamily}
        setMembers={setMembers}
        members={members}
      />
    </div>
  );
};

export default UserContainer;
