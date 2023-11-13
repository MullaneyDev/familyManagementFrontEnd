import React from "react";
import "./LoggedIn.css";
import TaskContainer from "../../Tasks/TaskContainer/TaskContainer";
import userEvent from "@testing-library/user-event";

const LoggedIn = ({
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
  activeTasks,
  setActiveTasks,
  nullTasks,
  setNullTasks,
}) => {
  console.log("HELLO FROM LOGGED IN", user);
  return (
    <div>
      <TaskContainer
        setLoggedIn={setLoggedIn}
        setAdmin={setAdmin}
        setFamily={setFamily}
        setUser={setUser}
        family={family}
        members={members}
        setMembers={setMembers}
        avatar={avatar}
        setAvatar={setAvatar}
        user={user}
        activeTasks={activeTasks}
        setActiveTasks={setActiveTasks}
        nullTasks={nullTasks}
        setNullTasks={setNullTasks}
      />
    </div>
  );
};

export default LoggedIn;
