import React from "react";
import "./LeaderboardCard.css";

const LeaderboardCard = ({ member }) => {
  const colour = member.colour;
  return (
    <div className="leaderboardCard" style={{ backgroundColor: colour }}>
      <img className="avatar" src={member.url} alt="avatar" />
      <p>{member.name}</p>
      <p>
        {member.totalPoints <= 0
          ? "Shrodingers Box"
          : member.totalPoints >= 0 && member.totalPoints < 100
          ? "Boxer"
          : member.totalPoints >= 100 && member.totalPoints < 250
          ? "KickBoxer"
          : member.totalPoints >= 250 && member.totalPoints < 500
          ? "Hot Boxer"
          : "Who are you?"}
      </p>
      <p>{member.totalPoints}</p>
    </div>
  );
};

export default LeaderboardCard;
