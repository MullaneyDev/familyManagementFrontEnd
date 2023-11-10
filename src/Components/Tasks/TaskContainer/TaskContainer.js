import React from "react";
import "./TaskContainer.css";
import TaskCard from "../TaskCard/TaskCard";

const TaskContainer = () => {
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
  return (
    <div className="TaskContainer">
      <h1>My tasks</h1>
      {tempMyTasks.map((task, index) => (
        <TaskCard key={index}task={task} />
      ))}
      <h2>Tasks</h2>
      {tempTasks.map((task,index) => (
        <TaskCard key={index}task={task} />
      ))}
    </div>
  );
};

export default TaskContainer;
