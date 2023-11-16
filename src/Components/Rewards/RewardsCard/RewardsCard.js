import React from "react";
import first from "../../../assets/first.svg";
import second from "../../../assets/second.svg";
import third from "../../../assets/third.svg";

import "./RewardsCard.css";

const RewardsCard = ({
  rewards,
  setRewards,
  admin,
  reward,
  key,
  index,
  handleDelete,
  setIsOpen,
  setDisplayed,
}) => {
  return (
    <div
      className="reward-card"
      bronze-theme={reward.rewardPoints === 300 && "bronze"}
      silver-theme={reward.rewardPoints === 600 && "silver"}
      gold-theme={reward.rewardPoints === 1000 && "gold"}
    >
      <div className="circle">
        <h2 className="reward-content">{reward.tier}</h2>
        <h2 className="reward-content">{reward.rewardPoints} Point Required</h2>
        {reward.rewardPoints === 300 && (
          <>
            <h3 className="reward-content">Title Required: Tool Box</h3>
            <img className="medal" src={third} alt="3rd place medal" />
          </>
        )}
        {reward.rewardPoints === 600 && (
          <>
            <h3 className="reward-content">Title Required: Lunch Box</h3>
            <img className="medal" src={second} alt="2nd place medal" />
          </>
        )}
        {reward.rewardPoints === 1000 && (
          <>
            <h3 className="reward-content">Title Required: Pandora's Box</h3>
            <img className="medal" src={first} alt="1st place medal" />
          </>
        )}
        <div className="reward-buttons">
          <button
            className="edit-btn-reward"
            onClick={() => {
              setIsOpen(true);
              setDisplayed(reward);
            }}
          >
            Edit
          </button>

          <button
            className="delete-btn-reward"
            onClick={(e) => handleDelete(e, reward.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardsCard;
