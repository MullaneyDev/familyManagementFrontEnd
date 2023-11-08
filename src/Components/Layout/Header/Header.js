import React from "react";
import "./Header.css";
import AccountManagementAdmin from "../../AccountManagement/AccountManagementAdmin";
import AccountManagement from "../../AccountManagement/AccountManagement";

const Header = ({ admin, loggedIn, family, setFamily, setLoggedIn,setMembers,setUser }) => {
  if (loggedIn) {
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
          />
        </div>
      );
    }
    <div className="header">
      <h1>BoxedOff</h1>
      <AccountManagement
        family={family}
        setFamily={setFamily}
        setLoggedIn={setLoggedIn}
        setMembers={setMembers}
        setUser={setUser}
      />
    </div>;
  }


  return (
    <div className="header">
      <h1>BoxedOff</h1>
      <h3 className="signIn">Sign up / Sign in</h3>
    </div>
  );
};

export default Header;



