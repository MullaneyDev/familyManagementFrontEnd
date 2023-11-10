import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task, mytask }) => {
  return (
    <div className="TaskCard">
      <div className="TaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>

        <button className="Assigned">Accept Task</button>

        <button className="Done">Edit</button>

        <button className="Delete">Delete Task</button>
      </div>
    </div>
  );
};

export default TaskCard;
