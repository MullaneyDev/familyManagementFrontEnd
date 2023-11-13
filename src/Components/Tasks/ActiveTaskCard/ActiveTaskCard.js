import React from "react";
import "./ActiveTaskCard.css";

const ActiveTaskCard = ({ task, handleDeleteActive, id }) => {
  return (
    <div className="ActiveTaskCard">
      <div className="ActiveTaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>

        <button className="Done">Completed</button>

        <button className="Delete" onClick={(e) => handleDeleteActive(e, id)}>
          Trash Task
        </button>
      </div>
    </div>
  );
};

export default ActiveTaskCard;
