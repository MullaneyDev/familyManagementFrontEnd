import React from "react";
import "./Header.css";
import AccountManagementAdmin from "../../AccountManagement/AccountManagementAdmin";
import AccountManagement from "../../AccountManagement/AccountManagement";

const Header = ({
  admin,
  loggedIn,
  family,
  setFamily,
  setLoggedIn,
  setMembers,
  setUser,
  verified,
  setVerified,
  user
}) => {
  if (verified && !loggedIn) {
    return (
      <div className="header">
        <h1>BoxedOff</h1>
        <h3 className="signIn">Choose Your User</h3>
      </div>
    );
  }

  if (verified && loggedIn) {
      if (admin) {
      return (
        <div className="header">
          <h1>BoxedOff</h1>
          <AccountManagementAdmin
            family={family}
            setFamily={setFamily}
            setLoggedIn={setLoggedIn}
            setMembers={setMembers}
            setUser={setUser}
            verified={verified}
            setVerified={setVerified}
            user={user}
          />
        </div>
      );
    }
    return (
      <div className="header">
        <h1>BoxedOff</h1>
        <AccountManagement
          family={family}
          setFamily={setFamily}
          setLoggedIn={setLoggedIn}
          setMembers={setMembers}
          setUser={setUser}
          verified={verified}
          setVerified={setVerified}
          user={user}
        />
      </div>
    );
  }

  return (
    <div className="header">
      <h1>BoxedOff</h1>
      <h3 className="signIn">Sign up / Sign in</h3>
    </div>
  );
};

export default Header;
