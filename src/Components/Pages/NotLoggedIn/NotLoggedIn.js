import React from "react";
import { useState } from "react";
import "./NotLoggedIn.css";
import ProfileSelection from "../ProfileSelection/ProfileSelection";
import UserContainer from "../../User/UserContainer/UserContainer";

const NotLoggedIn = ({
  setLoggedIn,
  setAdmin,
  setFamily,
  setUser,
  family,
  members,
  setMembers,
}) => {
  const [verified, setVerified] = useState(false);

  if (!verified) {
    return (
      <UserContainer
        setVerified={setVerified}
        setFamily={setFamily}
        setMembers={setMembers}
      />
    );
  }
  return (
    <ProfileSelection
      setAdmin={setAdmin}
      setUser={setUser}
      setLoggedIn={setLoggedIn}
      family={family}
      members={members}
    />
  );
};

export default NotLoggedIn;
