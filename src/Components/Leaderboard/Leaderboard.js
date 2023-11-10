import React from "react";
import "./Leaderboard.css";
import LeaderboardCard from "./LeaderboardCard";

const Leaderboard = ({members}) => {
  const testMembers = [
    {
      name: "mum",
      totalPoints: 10,
      url: "https://api.multiavatar.com/mum.svg?apikey=yWrOSvTVeZ4RFA",
      colour: "var(--user-blue)"
    },
    {
      name: "dad",
      totalPoints: 5,
      url: "https://api.multiavatar.com/dad.svg?apikey=yWrOSvTVeZ4RFA",
      colour: "var(--user-red)"
    },
    {
      name: "steve",
      totalPoints: 27,
      url: "https://api.multiavatar.com/steve.svg?apikey=yWrOSvTVeZ4RFA",
      colour: "var(--user-green)"
    },
    {
      name: "jobe",
      totalPoints: 7,
      url: "https://api.multiavatar.com/jobe.svg?apikey=yWrOSvTVeZ4RFA",
      colour: "var(--user-yellow)"
    },
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
