import React, { useState } from "react";
import "./ProfileSelection.css";
import { addMember, deleteMember } from "../../../Utils";

const apiKey = "yWrOSvTVeZ4RFA";
const ProfileSelection = ({
  setAdmin,
  setUser,
  setLoggedIn,
  family,
  members,
  setVerified,
}) => {
  const [name, setName] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [url, setUrl] = useState("");

  console.log(name);
  console.log(members);
  console.log(family);

  const handleAddMemberSubmit = async (e) => {
    e.preventDefault();
    await addMember(name);
  };

  const deleteMemberOnClick = async (id) => {
    await deleteMember(id);
  };

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="netflix-container">
      <form className="add-member-container" onSubmit={handleAddMemberSubmit}>
        <label>Add a Member</label>
        <input
          type="text"
          name="name"
          className="input-field"
          placeholder="Member Name"
          onChange={(e) => changeHandler(e)}
        />
        <input type="submit" value="Add Member" />
      </form>

      <h1>Who are you?</h1>
      {members.map((user, i) => {
        console.log(user);
        return (
          <div key={i} className="indi-user-container">
            <img src={user.url} alt="avatar" />
            <h4>{user.name}</h4>
            <button className="login-button" onClick={() => setLoggedIn(true)}>
              Login
            </button>
            <button
              className="delete-button"
              onClick={() => deleteMemberOnClick(user.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      {/* test bench for the map */}
      {/* {name.map((names, i) => {
        return (
          <div className="name-map-container">
            <div key={i} className="name-map-items">
              <img
                className="name-map-image"
                src={`https://api.multiavatar.com/${names}.svg?apikey=${apiKey}`}
                alt="avatar"
              />
              <h1 className="name-map-names">{names}</h1>
              <button
                className="login-button"
                onClick={() => setLoggedIn(true)}
              >
                Login
              </button>
              <button className="delete-button" onClick={() => deleteBtn(i)}>
                Delete
              </button>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default ProfileSelection;
