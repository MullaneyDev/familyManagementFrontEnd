import React from "react";
import "./Rewards.css";
import { getRewards, addFamilyReward, deleteReward } from "../../Utils";
import { useEffect, useState } from "react";
import RewardsCard from "./RewardsCard/RewardsCard";

const Rewards = ({ rewards, setRewards, admin }) => {
  const [tier, setTier] = useState();
  const [rewardPoints, setRewardPoints] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await getRewards();
      console.log("TTTTTTT", response);
      setRewards(response.result);
    };
    getData();
  }, []);

  const pointOptions = [
    { value: "", display: "Choose an Option" },
    { value: 300, display: 300 },
    { value: 600, display: 600 },
    { value: 1000, display: 1000 },
  ];

  const changeHandler = (e) => {
    setTier(e.target.value);
  };
  const handleSetPoints = (value) => {
    setRewardPoints(value);
  };

  const handleRewardSubmit = async (e) => {
    e.preventDefault();

    const response = await addFamilyReward(tier, rewardPoints);

    let openRewards = [...rewards];
    await openRewards.push(response.result);
    await setRewards(openRewards);
    setTier("");
    setRewardPoints("");
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await deleteReward(id);
    const newRewards = rewards.filter((reward) => reward.id !== id);
    setRewards(newRewards);
  };

  //useeffect to get
  //add edit and delete protected by admin
  // map through globalstate that will hold the get request
  return (
    <div className="rewardWindow">
      <h1>Rewards</h1>
      <div className="addreward-container">
        <h3 className="add-reward-center">Add a family Reward</h3>
        <form className="add-reward" onSubmit={handleRewardSubmit}>
          <input
            type="text"
            name="tier"
            className="input-field"
            placeholder="New reward"
            value={tier}
            required="true"
            onChange={(e) => changeHandler(e)}
          />

          <select
            required
            value={rewardPoints}
            onChange={(e) => handleSetPoints(e.target.value)}
          >
            {pointOptions.map((option) => (
              <option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                {option.display}
              </option>
            ))}
          </select>
          <input
            className="add-reward-input-btn"
            type="submit"
            value="Add Reward"
          />
        </form>
      </div>
      {rewards.map((reward, index) => (
        <RewardsCard
          reward={reward}
          key={index}
          admin={admin}
          handleDelete={handleDelete}
        />
      ))}
      <div className="goldTier">
        <h2>Choose the family day out</h2>
        <h2>Points needed: 1000</h2>
        <h2>Title Required: Pandora's Box</h2>
      </div>
      <div className="silverTier">
        <h2>Choose the takeaway</h2>
        <h2>Points needed: 600</h2>
        <h2>Title Required: Jack In The Box</h2>
      </div>
      <div className="bronzeTier">
        <h2>Choose the family film</h2>
        <h2>Points needed: 300</h2>
        <h2>Title Required: Tool Box</h2>
      </div>
    </div>
  );
};

export default Rewards;
