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
  avatar,
  setAvatar,
  user,
  verified,
  setVerified
}) => {
  

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
      avatar={avatar}
      setAvatar={setAvatar}
      setVerified={setVerified}
    />
  );
};

export default NotLoggedIn;
