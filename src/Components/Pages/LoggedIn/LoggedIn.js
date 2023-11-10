import React from "react";
import "./LoggedIn.css";
import TaskContainer from "../../Tasks/TaskContainer/TaskContainer";
import Leaderboard from "../../Leaderboard/Leaderboard";

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
  return (
    <div>
      <h1>Hello{user.name}</h1>
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
      <Leaderboard />
    </div>
  );
};

export default LoggedIn;
