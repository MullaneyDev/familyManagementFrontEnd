import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task, mytask, handleDelete, id }) => {
  return (
    <div className="TaskCard">
      <div className="TaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>

        <button className="Assigned">Accept Task</button>

        <button className="Done">Edit</button>

        <button className="Delete" onClick={(e) => handleDelete(e, task.id)}>
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
