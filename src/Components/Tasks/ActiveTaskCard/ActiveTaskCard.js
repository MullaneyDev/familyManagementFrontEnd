import React from "react";
import "./ActiveTaskCard.css";
import { updatePoints } from "../../../Utils";

const ActiveTaskCard = ({ task,user }) => {

  const completeTask = async () => {
    const userId = user.id
    const points = task.points
    const totalPoints = user.totalPoints
    await updatePoints(userId, points, totalPoints)
  }
  return (
    <div className="ActiveTaskCard">
      <div className="ActiveTaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>

        <button className="Done" onClick={completeTask}>Completed</button>

        <button className="Delete">Trash Task</button>
      </div>
    </div>
  );
};

export default ActiveTaskCard;
