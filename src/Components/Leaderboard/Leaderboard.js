import React from "react";
import "./Leaderboard.css";
import LeaderboardCard from "./LeaderboardCard";

const Leaderboard = ({members}) => {

  const membersOrdered = members.sort(function(a,b){return b.totalPoints-a.totalPoints})

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      {membersOrdered.map((member, index) => (
        <LeaderboardCard key={index} member={member} />
      ))}
    </div>
  );
};

export default Leaderboard;
