import React from 'react'
import "./LeaderboardCard.css"

const LeaderboardCard = ({member}) => {
  return (
    <div className='leaderboardCard'>
        <p>{member.name}</p>
        <p>{member.totalPoints}</p>
    </div>
  )
}

export default LeaderboardCard