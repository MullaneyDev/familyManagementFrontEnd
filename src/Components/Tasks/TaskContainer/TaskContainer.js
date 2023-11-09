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
    { id: 6, taskname: "Tidy bedroom", points: 8 },
    { id: 7, taskname: "Sort laundry", points: 14 },
    { id: 9, taskname: "Make bed", points: 7 },
    { id: 8, taskname: "Grocery shopping", points: 18 },
  ];
  return (
    <div className="TaskContainer">
      {tempTasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};

export default TaskContainer;
