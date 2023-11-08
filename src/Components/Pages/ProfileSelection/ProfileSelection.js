import React, { useEffect, useState } from "react";
import "./ProfileSelection.css";
import { addMember } from "../../../Utils";

const apiKey = "yWrOSvTVeZ4RFA";
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
    const fetchAvatarData = async () => {
      const response = await fetch(
        `https://api.multiavatar.com/cheese.svg?apikey=${apiKey}`
      );
      const data = await response.json();
      setAvatar(data);
    };
    fetchAvatarData();
  }, [setAvatar]);

  const [name, setName] = useState("");

  const handleAddMemberSubmit = async (e) => {
    e.preventDefault();
    const response = await addMember(name);
    console.log(response);
  };

  const handleAddMember = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="netflix-container">
      <div className="add-member-container">
        <form onSubmit={handleAddMemberSubmit}>
          <label>Add a Member</label>
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Member Name"
            onChange={(e) => handleAddMember(e)}
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
