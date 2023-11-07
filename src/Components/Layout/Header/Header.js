import React from 'react'
import "./Header.css"

const Header = ({ user, loggedIn }) => {
  if (!loggedIn) {
    return (
      <div className="headerTop">
        <h1>Boxed Off</h1>
        <h3>register/sign in</h3>
      </div>
    );
  } else {
    return (
      <div className="headerTop">
        <h1>Boxed Off</h1>
      </div>
    );
  }
};

export default Header

