import React, { useEffect } from "react";
import "./ProfileSelection.css";

const apiKey = "yWrOSvTVeZ4RFA";
const ProfileSelection = ({
  setAdmin,
  setUser,
  setLoggedIn,
  family,
  members,
  avatar,
  setAvatar,
  user,
}) => {
  useEffect(() => {
    const fetchAvatarData = async () => {
      const response = await fetch(
        `https://api.multiavatar.com/${user.name}.svg?apikey=${apiKey}`
      );
      const data = await response.json();
      setAvatar(data);
    };
    fetchAvatarData();
  }, []);

  const handleAddMemberSubmit = () => {};

  const handleAddMember = () => {};

  return (
    <div className="netflix-container">
      <div className="add-member-container">
        <form onSubmit={handleAddMemberSubmit}>
          <label>Add a Member</label>
          <input
            type="text"
            name="member"
            className="input-field"
            placeholder="Member Name"
            onChange={handleAddMember}
          />
          <input type="submit" value="Add Member" />
        </form>
      </div>
      <h1>Who are you?</h1>
      {members.map((user, index) => {
        return (
          <div key={index} className="indi-user-container">
            <img src={avatar} alt="avatar" />
            <h4>{user.name}</h4>
            <button className="login-button" onClick={setLoggedIn(true)}>
              Login
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSelection;
