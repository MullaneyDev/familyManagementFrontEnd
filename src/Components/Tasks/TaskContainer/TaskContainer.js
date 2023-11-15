import React from "react";
import "./TaskContainer.css";
import TaskCard from "../TaskCard/TaskCard";
import ActiveTaskCard from "../ActiveTaskCard/ActiveTaskCard";

import { deleteTask } from "../../../Utils";
import { assignMember } from "../../../Utils";
import { addFamilyTask, editTaskDetails } from "../../../Utils";
import { useState } from "react";
import Modal from "react-modal";

const TaskContainer = ({
  activeTasks,
  setActiveTasks,
  nullTasks,
  setNullTasks,
  setTasks,
  user,
  action,
  members,
  setMembers,
  admin,
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

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await deleteTask(id);
    const newTasks = nullTasks.filter((task) => task.id !== id);
    setNullTasks(newTasks);
  };

  const handleTask = async (e, MemberId, taskid, action, index) => {
    e.preventDefault();
    try {
      const response = await assignMember(MemberId, taskid, action);
      let openNullTasks = [...nullTasks];
      let openActiveTasks = [...activeTasks];
      if (action === "unassign") {
        openNullTasks.push(openActiveTasks.splice(index, 1)[0]);
      } else if (action === "assign") {
        openActiveTasks.push(openNullTasks.splice(index, 1)[0]);
      }
      setNullTasks(openNullTasks);
      setActiveTasks(openActiveTasks);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTask = async (e, id, taskname, points) => {
    e.preventDefault();

    try {
      await editTaskDetails(id, taskname, points);
      for (let task of nullTasks) {
        if (task.id === id) {
          task["taskname"] = taskname;
          task["points"] = points;
        }
      }
      setPoints("");
      setTaskname("");
    } catch (error) {
      console.error(error);
    }
  };

  if (!nullTasks) {
    return <p>loading</p>;
  }
  if (admin) {
    return (
      <div className="TaskContainer">
        <button
          className="addtask-btn"
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
            <h3 className="add-task-center">Add a family Task</h3>
            <form className="add-task" onSubmit={handleTaskSubmit}>
              <input
                type="text"
                name="taskname"
                className="input-field"
                placeholder="New task name"
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
              <input
                className="add-task-input-btn"
                type="submit"
                value="Add Task"
              />
            </form>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </Modal>

        <h1>{user.name}'s Challenges</h1>
        {activeTasks.map((task, index) => (
          <ActiveTaskCard
            task={task}
            key={index}
            user={user}
            activeTasks={activeTasks}
            setActiveTasks={setActiveTasks}
            handleTask={handleTask}
            action={action}
            members={members}
            setMembers={setMembers}
            admin={admin}
          />
        ))}
        <h2>Available Challenges</h2>
        {nullTasks.map((task, index) => (
          <TaskCard
            task={task}
            user={user}
            key={index}
            nullTasks={nullTasks}
            setNullTasks={setNullTasks}
            handleTask={handleTask}
            handleDelete={handleDelete}
            action={action}
            handleEditTask={handleEditTask}
            pointOptions={pointOptions}
            changeHandler={changeHandler}
            taskname={taskname}
            setTaskname={setTaskname}
            points={points}
            setPoints={setPoints}
            handleSetPoints={handleSetPoints}
            admin={admin}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="TaskContainer">
      <h1>{user.name}'s Challenges</h1>
      {activeTasks.map((task, index) => (
        <ActiveTaskCard
          task={task}
          key={index}
          user={user}
          activeTasks={activeTasks}
          setActiveTasks={setActiveTasks}
          handleTask={handleTask}
          action={action}
          members={members}
          setMembers={setMembers}
          admin={admin}
          index={index}
        />
      ))}
      <h2>Available Challenges</h2>
      {nullTasks.map((task, index) => (
        <TaskCard
          task={task}
          user={user}
          key={index}
          nullTasks={nullTasks}
          setNullTasks={setNullTasks}
          handleTask={handleTask}
          handleDelete={handleDelete}
          action={action}
          handleEditTask={handleEditTask}
          pointOptions={pointOptions}
          changeHandler={changeHandler}
          taskname={taskname}
          setTaskname={setTaskname}
          points={points}
          setPoints={setPoints}
          handleSetPoints={handleSetPoints}
          admin={admin}
          index={index}
        />
      ))}
    </div>
  );
};

export default TaskContainer;
