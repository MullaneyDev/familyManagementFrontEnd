import React from "react";
import "./TaskCard.css";
import Modal from "react-modal";
import { useState } from "react";

const TaskCard = ({
  user,
  task,
  handleEditTask,
  taskname,
  changeHandler,
  pointOptions,
  points,
  handleSetPoints,
  handleTask,
  handleDelete,
  admin,
  index,
}) => {
  const [modalEditTask, setModalEditTask] = useState(false);
  const tasknameDefault = task.taskname;

  const handleCloseOnSubmit = (e) => {
    handleEditTask(e, task.id, taskname, points);
    setModalEditTask(false);
  };

  if (admin) {
    return (
      <div className="TaskCard">
        <div className="TaskCardInner">
          <p>{task.taskname}</p>

          <p>{task.points}</p>
          <div className="button-container">
            <button
              className="accept-task-btn"
              onClick={(e) => handleTask(e, user.id, task.id, "assign", index)}
            >
              Accept
            </button>

            <button
              className="edit-btn-task"
              onClick={() => setModalEditTask(true)}
            >
              Edit
            </button>
            <Modal
              className="ModalStyle"
              isOpen={modalEditTask}
              onRequestClose={() => setModalEditTask(false)}
            >
              <div className="addtask-container">
                <h3>Edit Task Details</h3>
                <form className="add-task" onSubmit={handleCloseOnSubmit}>
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
                  <input
                    className="save-edit-btn-task"
                    type="submit"
                    value="Save Edit"
                  />
                </form>
              </div>
            </Modal>

            <button
              className="delete-btn-task"
              onClick={(e) => handleDelete(e, task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="TaskCard">
      <div className="TaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>

        <button
          className="accept-task-btn"
          onClick={(e) => handleTask(e, user.id, task.id, "assign", index)}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
