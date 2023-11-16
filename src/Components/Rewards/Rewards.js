import React from "react";
import "./Rewards.css";

const Rewards = () => {
  //useeffect to get
  //add edit and delete protected by admin
  // map through globalstate that will hold the get request
  return (
    <div className="rewardWindow">
      <h1>Rewards</h1>
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
