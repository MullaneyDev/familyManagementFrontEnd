import React from "react";
import "./TaskCard.css";
import { editTaskDetails } from "../../../Utils";
import Modal from "react-modal";
import { useState } from "react";

const TaskCard = ({
  user,
  task,
  handleAcceptTask,
  handleEditTask,
  taskname,
  setTaskname,
  setPoints,
  changeHandler,
  pointOptions,
  points,
  handleSetPoints,
}) => {
  const [modalEditTask, setModalEditTask] = useState(false);

  const tasknameDefault = task.taskname;

  const handleCloseOnSubmit = (e) => {
    handleEditTask(e, task.id, taskname, points);
    setModalEditTask(false);
  };
  return (
    <div className="TaskCard">
      <div className="TaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>

        <button
          className="Assigned"
          onClick={(e) => handleAcceptTask(e, user.id, task.id)}
        >
          Accept Task
        </button>

        <button className="edit" onClick={() => setModalEditTask(true)}>
          Edit
        </button>
        <Modal
          className="ModalStyle"
          isOpen={modalEditTask}
          onRequestClose={() => setModalEditTask(false)}
        >
          <div className="addtask-container">
            <form className="add-task" onSubmit={handleCloseOnSubmit}>
              <label>Edit Task Details</label>
              <input
                type="text"
                name="taskname"
                className="input-field"
                placeholder="Edit Task"
                defaultValue={tasknameDefault}
                required="true"
                onChange={(e) => changeHandler(e)}
              />

              <select
                required
                defaultValue={task.points}
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
              <input type="submit" value="Save Edit" />
            </form>
          </div>
        </Modal>

        <button className="Delete">Delete Task</button>
      </div>
    </div>
  );
};

export default TaskCard;
