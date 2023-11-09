import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  return (
    <div className="TaskCard">
      <div className="TaskCardInner">
        <p>{task.taskname}</p>
        <p>
          <p>{task.points}</p>
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
