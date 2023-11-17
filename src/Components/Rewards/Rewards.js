import React from "react";
import "./Rewards.css";
import {
  getRewards,
  addFamilyReward,
  deleteReward,
  editReward,
} from "../../Utils";
import { useEffect, useState } from "react";
import RewardsCard from "./RewardsCard/RewardsCard";
import Modal from "react-modal";

const Rewards = ({ rewards, setRewards, admin, members, user }) => {
  const [tier, setTier] = useState();
  const [rewardPoints, setRewardPoints] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [displayed, setDisplayed] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await getRewards();
      setRewards(response.result);
    };
    getData();
  }, [setRewards]);

  const rewardsOrdered = rewards.sort(function (a, b) {
    return b.rewardPoints - a.rewardPoints;
  });

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

  const handleEdit = async (e) => {
    e.preventDefault();
    await editReward(displayed.id, displayed.tier, displayed.rewardPoints);
    const newRewards = [...rewards];
    const index = newRewards.findIndex((reward) => reward.id === displayed.id);
    newRewards[index] = displayed;
    setRewards(newRewards);
    setIsOpen(false);
  };

  //useeffect to get
  //add edit and delete protected by admin
  // map through globalstate that will hold the get request
  return (
    <div className="rewardWindow">
      <h1>Rewards</h1>
      <div className="addreward-container">
        {user.admin === true ? (
          <>
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
                    disabled={
                      rewards.findIndex(
                        (reward) => reward.rewardPoints === option.value
                      ) === -1
                        ? false
                        : true
                    }
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
          </>
        ) : (
          <div></div>
        )}
      </div>
      <div className="map-container-reward">
        {rewardsOrdered.map((reward, index) => (
          <RewardsCard
            reward={reward}
            key={index}
            admin={admin}
            handleDelete={handleDelete}
            setIsOpen={setIsOpen}
            setDisplayed={setDisplayed}
            user={user}
          />
        ))}
      </div>

      <Modal
        className="ModalStyle"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className="editreward-container">
          <h3 className="edit-reward-center">Edit family Reward</h3>
          <form className="edit-reward" onSubmit={handleEdit}>
            <h4>{displayed.rewardPoints}</h4>
            <input
              type="text"
              name="tier"
              className="input-reward"
              placeholder="edit reward"
              value={displayed.tier}
              required="true"
              onChange={(e) =>
                setDisplayed({ ...displayed, tier: e.target.value })
              }
            />

            <input
              className="save-edit-btn-reward"
              type="submit"
              value="Edit Reward"
            />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Rewards;
