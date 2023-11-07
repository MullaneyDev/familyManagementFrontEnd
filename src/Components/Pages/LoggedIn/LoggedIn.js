import React from 'react'

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