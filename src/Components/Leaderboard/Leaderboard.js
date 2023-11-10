import React from "react";
import "./Leaderboard.css";
import LeaderboardCard from "./LeaderboardCard";

const Leaderboard = () => {
  const testMembers = [
    { name: "mum", totalPoints: 10 },
    { name: "dad", totalPoints: 5 },
    { name: "steve", totalPoints: 27 },
    { name: "jobe", totalPoints: 7 },
  ];
  const testMembersOrdered = testMembers.sort(function(a,b){return b.totalPoints-a.totalPoints})

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      {testMembersOrdered.map((member, index) => (
        <LeaderboardCard key={index} member={member} />
      ))}
    </div>
  );
};

export default Leaderboard;
