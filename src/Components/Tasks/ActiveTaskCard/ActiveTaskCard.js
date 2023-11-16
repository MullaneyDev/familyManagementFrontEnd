import React from "react";
import "./ActiveTaskCard.css";
import { deleteTask, updatePoints } from "../../../Utils";

const ActiveTaskCard = ({
  task,
  user,
  activeTasks,
  setActiveTasks,
  handleTask,
  setMembers,
  index,
}) => {
  const colour = user.colour;

  const completeTask = async (e, index) => {
    e.preventDefault();
    const userId = user.id;
    const points = task.points;
    const totalPoints = user.totalPoints;
    const FamilyId = user.FamilyId;
    const response = await updatePoints(userId, points, totalPoints, FamilyId);
    const memberArray = response.members;
    setMembers(memberArray);
    const updateArray = [...activeTasks];
    updateArray.splice(index, 1);
    setActiveTasks(updateArray);
    await deleteTask(task.id);
  };

  return (
    <div className="ActiveTaskCard" style={{ backgroundColor: colour }}>
      <div className="ActiveTaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>
        <div className="button-container">
          <button
            className="complete-button-task"
            onClick={(e) => completeTask(e, index)}
          >
            Completed
          </button>

          <button
            className="recycle-button-task"
            onClick={(e) => handleTask(e, user.id, task.id, "unassign", index)}
          >
            Recycle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveTaskCard;
