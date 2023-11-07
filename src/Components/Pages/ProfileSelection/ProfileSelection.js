import React from "react";
import "./ProfileSelection.css";

const ProfileSelection = ({
  setAdmin,
  setUser,
  setLoggedIn,
  family,
  members,
}) => {
  return (
    <div className="netflix-container">
      <h1>Who are you?</h1>
      {members.map((user, index) => {
        return (
          <div key={index} className="user-container">
            <button onClick={setLoggedIn(true)}>{user.name}</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSelection;
