import React from "react";
import "./NotLoggedIn.css";
import ProfileSelection from "../ProfileSelection/ProfileSelection";
import UserContainer from "../../User/UserContainer/UserContainer";

const NotLoggedIn = ({
  setLoggedIn,
  setAdmin,
  admin,
  setFamily,
  setUser,
  family,
  members,
  setMembers,
  user,
  verified,
  setVerified,
  activeTasks,
  setActiveTasks,
  nullTasks,
  setNullTasks,
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
      admin={admin}
      setUser={setUser}
      setLoggedIn={setLoggedIn}
      user={user}
      family={family}
      members={members}
      setMembers={setMembers}
      setVerified={setVerified}
      activeTasks={activeTasks}
      setActiveTasks={setActiveTasks}
      nullTasks={nullTasks}
      setNullTasks={setNullTasks}
    />
  );
};

export default NotLoggedIn;
