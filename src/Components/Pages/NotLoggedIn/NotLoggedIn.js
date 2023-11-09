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
  user,
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
      user={user}
      family={family}
      members={members}
      setMembers={setMembers}
      setVerified={setVerified}
    />
  );
};

export default NotLoggedIn;
