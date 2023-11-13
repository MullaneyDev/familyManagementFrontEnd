import React from "react";
import "./TaskContainer.css";
import TaskCard from "../TaskCard/TaskCard";
import ActiveTaskCard from "../ActiveTaskCard/ActiveTaskCard";
import { addFamilyTask } from "../../../Utils";
import { useState, useEffect } from "react";

const TaskContainer = ({
  activeTasks,
  setActiveTasks,
  nullTasks,
  setNullTasks,
}) => {
  const [taskname, setTaskname] = useState();
  const [points, setPoints] = useState();

  // const tempTasks = [
  //   { id: 2, taskname: "Cleaning", points: 10 },
  //   { id: 1, taskname: "Homework", points: 5 },
  //   { id: 3, taskname: "Walk the dog", points: 15 },
  //   { id: 5, taskname: "Cook dinner", points: 20 },
  //   { id: 4, taskname: "Go to run", points: 12 },
  // ];
  // const tempMyTasks = [
  //   { id: 6, taskname: "Tidy bedroom", points: 8 },
  //   { id: 7, taskname: "Sort laundry", points: 14 },
  //   { id: 9, taskname: "Make bed", points: 7 },
  // ];
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    const response = await addFamilyTask(taskname, points);

    let openNullTasks = [...nullTasks];
    openNullTasks.push(response.result);
    setNullTasks(openNullTasks);
  };

  const changeHandler = (e) => {
    setTaskname(e.target.value);
  };
  const handleSetPoints = (value) => {
    setPoints(value);
  };

  if (!nullTasks) {
    return <p>loading</p>;
  }
  return (
    <div className="TaskContainer">
      <div className="addtask-container">
        <form className="add-task" onSubmit={handleTaskSubmit}>
          <label>Add a Family Task</label>
          <input
            type="text"
            name="taskname"
            className="input-field"
            placeholder="New task info"
            onChange={(e) => changeHandler(e)}
          />

          <select onChange={(e) => handleSetPoints(e.target.value)}>
            <option value={null}>assign points</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={150}>150</option>
          </select>
          <input type="submit" value="Add Task" />
        </form>
      </div>
      <h1>My Challenges</h1>
      {activeTasks.map((task, index) => (
        <ActiveTaskCard task={task} key={index} />
      ))}
      <h2>Available Challenges</h2>
      {nullTasks.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
};

export default TaskContainer;
