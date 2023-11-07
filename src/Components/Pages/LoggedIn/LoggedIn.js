import React from 'react'
import "./LoggedIn.css"

const LoggedIn = ({admin}) => {

    if (admin) {
        return (
            <div>LoggedInAsAdmin</div>
        )
    }
  return (
    <div>LoggedIn</div>
  )
}

export default LoggedIn