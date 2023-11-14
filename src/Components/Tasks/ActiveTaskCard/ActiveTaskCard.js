import React from "react";
import "./ActiveTaskCard.css";
import { updatePoints } from "../../../Utils";

const ActiveTaskCard = ({
  key,
  task,
  user,
  activeTasks,
  setActiveTasks,
  handleTask,
  action,
}) => {
  const completeTask = async (index) => {
    const userId = user.id;
    const points = task.points;
    const totalPoints = user.totalPoints;
    await updatePoints(userId, points, totalPoints);
    const updateArray = [...activeTasks];
    updateArray.splice(index, 1);
    setActiveTasks(updateArray);
  };

  return (
    <div className="ActiveTaskCard">
      <div className="ActiveTaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>

        <button className="Done" onClick={() => completeTask(key)}>
          Completed
        </button>

        <button
          className="Delete"
          onClick={(e) => handleTask(e, user.id, task.id, "unassign")}
        >
          Recycle Task
        </button>
      </div>
    </div>
  );
};

export default ActiveTaskCard;
