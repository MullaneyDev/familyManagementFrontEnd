import React from "react";
import "./TaskContainer.css";
import TaskCard from "../TaskCard/TaskCard";
import ActiveTaskCard from "../ActiveTaskCard/ActiveTaskCard";
import { assignMember } from "../../../Utils";

const TaskContainer = ({
  activeTasks,
  setActiveTasks,
  nullTasks,
  setNullTasks,
  user,
}) => {
  const tempTasks = [
    { id: 2, taskname: "Cleaning", points: 10 },
    { id: 1, taskname: "Homework", points: 5 },
    { id: 3, taskname: "Walk the dog", points: 15 },
    { id: 5, taskname: "Cook dinner", points: 20 },
    { id: 4, taskname: "Go to run", points: 12 },
  ];
  const tempMyTasks = [
    { id: 6, taskname: "Tidy bedroom", points: 8 },
    { id: 7, taskname: "Sort laundry", points: 14 },
    { id: 9, taskname: "Make bed", points: 7 },
  ];

  const handleAcceptTask = async (e, MemberId, taskid) => {
    e.preventDefault();
    console.log("HELLO FROM TASK CARD", user, taskid);

    try {
      const response = await assignMember(MemberId, taskid);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("HELLO FROM CONTAINER", user);
  if (!nullTasks) {
    return <p>loading</p>;
  }
  return (
    <div className="TaskContainer">
      <h1>My Challenges</h1>
      {activeTasks.map((task, index) => (
        <ActiveTaskCard task={task} user={user} key={index} />
      ))}
      <h2>Available Challenges</h2>
      {nullTasks.map((task, index) => (
        <TaskCard
          task={task}
          user={user}
          key={index}
          handleAcceptTask={handleAcceptTask}
        />
      ))}
    </div>
  );
};

export default TaskContainer;
