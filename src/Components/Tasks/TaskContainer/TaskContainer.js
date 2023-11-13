import React from "react";
import "./TaskContainer.css";
import TaskCard from "../TaskCard/TaskCard";
import ActiveTaskCard from "../ActiveTaskCard/ActiveTaskCard";
import { assignMember } from "../../../Utils";
import { addFamilyTask } from "../../../Utils";
import { useState, useEffect } from "react";
import Modal from "react-modal";

const TaskContainer = ({
  activeTasks,
  setActiveTasks,
  nullTasks,
  setNullTasks,
  user,
}) => {
  const [taskname, setTaskname] = useState();
  const [points, setPoints] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [modalAddTask, setModalAddTask] = useState(false);

  const handleTaskSubmit = async (e) => {
    e.preventDefault();

    const shouldSendRequest = taskname !== "" || points !== 0;

    if (shouldSendRequest) {
      const response = await addFamilyTask(taskname, points);

      let openNullTasks = [...nullTasks];
      await openNullTasks.push(response.result);
      await setNullTasks(openNullTasks);
      setPoints("");
      setTaskname("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill in required fields");
    }
  };

  const changeHandler = (e) => {
    setTaskname(e.target.value);
  };
  const handleSetPoints = (value) => {
    setPoints(value);
  };

  const openModal = async (setter) => {
    await setter(true);
  };

  const closeModal = async (setter) => {
    await setter(false);
  };

  const pointOptions = [
    { value: "", display: "Choose an Option" },
    { value: 10, display: 10 },
    { value: 20, display: 20 },
    { value: 50, display: 50 },
    { value: 100, display: 100 },
    { value: 150, display: 150 },
  ];


  const handleAcceptTask = async (e, MemberId, taskid) => {
    e.preventDefault();

    try {
      const response = await assignMember(MemberId, taskid);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  if (!nullTasks) {
    return <p>loading</p>;
  }
  return (
    <div className="TaskContainer">
      <button
        className="addtask-container"
        onClick={() => openModal(setModalAddTask)}
      >
        Add New Family Task
      </button>
      <Modal
        className="ModalStyle"
        isOpen={modalAddTask}
        onRequestClose={() => closeModal(setModalAddTask)}
      >
        <div className="addtask-container">
          <form className="add-task" onSubmit={handleTaskSubmit}>
            <label>Add a Family Task</label>
            <input
              type="text"
              name="taskname"
              className="input-field"
              placeholder="New task info"
              value={taskname}
              required="true"
              onChange={(e) => changeHandler(e)}
            />

            <select
              required
              value={points}
              onChange={(e) => handleSetPoints(e.target.value)}
            >
              {pointOptions.map((option) => (
                <option
                  disabled={option.disabled}
                  key={option.value}
                  value={option.value}
                >
                  {option.display}
                </option>
              ))}
            </select>
            <input type="submit" value="Add Task" />
          </form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </Modal>
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
        <ActiveTaskCard
          task={task}
          key={index}
          user={user}
          activeTasks={activeTasks}
          setActiveTasks={activeTasks}
        />
      ))}
      <h2>Available Challenges</h2>
      {nullTasks.map((task, index) => (
        <TaskCard task={task} key={index} user={user} />
      ))}
    </div>
  );
};

export default TaskContainer;
