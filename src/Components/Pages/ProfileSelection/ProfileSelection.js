import React from "react";
import "./ProfileSelection.css";

const ProfileSelection = ({
  setAdmin,
  setUser,
  setLoggedIn,
  family,
  members,
  avatar,
  setAvatar,
}) => {
  useEffect(() => {
    const fetchAvatarData = async (user) => {
      const response = await fetch(
        `https://api.multiavatar.com/${user.name}.svg`
      );
      const data = await response.json();
      setAvatar(data);
    };
    fetchAvatarData();
  }, []);

  return (
    <div className="netflix-container">
      <h1>Who are you?</h1>
      {members.map((user, index) => {
        return (
          <div key={index} className="user-container">
            <img src={avatar} alt="avatar" />
            <h4>{user.name}</h4>
            <button onClick={setLoggedIn(true)}>Login</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSelection;
