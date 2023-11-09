import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  return (
    <div className="TaskCard">
      <div className="TaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>

        <button className="Assigned">Assigned</button>

        <button className="Done">Done</button>

        <button className="Delete">Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
