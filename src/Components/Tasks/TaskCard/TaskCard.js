import React from "react";
import "./TaskCard.css";

const TaskCard = ({ user, task, mytask, handleAcceptTask }) => {
  console.log("HELLO TASK CARD", user);
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

        <button className="Done">Edit</button>

        <button className="Delete">Delete Task</button>
      </div>
    </div>
  );
};

export default TaskCard;
