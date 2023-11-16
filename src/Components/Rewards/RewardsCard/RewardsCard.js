import React from "react";

const RewardsCard = ({
  rewards,
  setRewards,
  admin,
  reward,
  key,
  index,
  handleDelete,
}) => {
  return (
    <div className="reward-container">
      <p>{reward.tier}</p>
      <p>{reward.rewardPoints}</p>
      <button className="edit-reward-btn">Edit</button>

      <button
        className="delete-btn-reward"
        onClick={(e) => handleDelete(e, reward.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default RewardsCard;
