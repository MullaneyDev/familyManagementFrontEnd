import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  return (
    <div className="TaskCard">
      <p>
        {task.taskname}
        <></> <></> <></>
        {task.points}
      </p>
    </div>
  );
};

export default TaskCard;
