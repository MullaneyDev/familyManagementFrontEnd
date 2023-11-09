import React from "react";
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
  verified,
  setVerified,
}) => {
  if (!verified) {
    return (
      <UserContainer
        setVerified={setVerified}
        setFamily={setFamily}
        setMembers={setMembers}
        members={members}
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
