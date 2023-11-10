import React from 'react'
import "./LeaderboardCard.css"

const LeaderboardCard = ({member}) => {
    const colour = member.colour
  return (
    <div className='leaderboardCard' style={{backgroundColor:colour}}>
        <img className='avatar' src={member.url} alt='avatar' />
        <p>{member.name}</p>
        <p>{member.totalPoints}</p>
    </div>
  )
}

export default LeaderboardCard