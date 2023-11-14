import React from "react";
import "./ActiveTaskCard.css";
import { deleteTask, updatePoints } from "../../../Utils";

const ActiveTaskCard = ({
  key,
  task,
  user,
  activeTasks,
  setActiveTasks,
  handleTask,
  action,
  members,
  setMembers
}) => {
  const colour = user.colour

  const completeTask = async (e,key) => {
    e.preventDefault()
    const userId = user.id;
    const points = task.points;
    const totalPoints = user.totalPoints;
    const response = await updatePoints(userId, points, totalPoints);
    const memberArray = [...members]
    memberArray.push(response.result)
    setMembers(memberArray)
    const updateArray = [...activeTasks];
    updateArray.splice(key, 1);
    setActiveTasks(updateArray);
    await deleteTask(task.id)
  };

  return (
    <div className="ActiveTaskCard" style={{ backgroundColor: colour }}>
      <div className="ActiveTaskCardInner">
        <p>{task.taskname}</p>

        <p>{task.points}</p>

        <button className="Done" onClick={(e) => completeTask(e, key)}>
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
