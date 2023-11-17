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
          ? "Cardboard Box"
          : member.totalPoints >= 100 && member.totalPoints < 300
          ? "Lunch Box"
          : member.totalPoints >= 300 && member.totalPoints < 600
          ? "Tool Box"
          : member.totalPoints >= 600 && member.totalPoints < 700
          ? "Jack in the Box"
          : member.totalPoints >= 700 && member.totalPoints < 800
          ? "Boom Box"
          : member.totalPoints >= 800 && member.totalPoints < 900
          ? "Kick Boxer"
          : member.totalPoints >= 900 && member.totalPoints < 1000
          ? "Box Office"
          : member.totalPoints >= 1000
          ? "Pandora's Box"
          : "Who are you?"}
      </p>
      <p>{member.totalPoints}</p>
    </div>
  );
};

export default LeaderboardCard;
