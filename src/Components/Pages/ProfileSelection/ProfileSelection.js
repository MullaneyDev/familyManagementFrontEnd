
import React, { useState } from "react";
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

  setVerified,
}) => {
  const [name, setName] = useState([]);
  console.log(name);


  const handleAddMemberSubmit = async (e) => {
    e.preventDefault();
    const response = await addMember(name);


    let storedName = [...name];
    storedName.push(userInput);
    setName(storedName);
    console.log(response);
  };

  const deleteBtn = async (i) => {
    let storedName = [...name];
    storedName.splice(i, 1);
    setName(storedName);
  };

  const [userInput, setUserInput] = useState("");
  const changeHandler = (e) => {
    setUserInput(e.target.value);

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
            onChange={(e) => changeHandler(e)}

          />
          <input type="submit" value="Add Member" />
        </form>
      </div>
      <h1>Who are you?</h1>
      {/* {members.map((user, index) => {
        return (
          <div key={index} className="indi-user-container">
            <img src={avatar} alt="avatar" />
            <h4>{user.name}</h4>
            <button className="login-button" onClick={setLoggedIn(true)}>
              Login
            </button>
          </div>
        );
      })} */}
      {/* test bench for the map */}
      {name.map((names, i) => {
        return (
          <div className="name-map-container">
            <div key={i} className="name-map-items">
              {/* <img src={avatar} alt="avatar" /> */}
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
      })}
    </div>
  );
};

export default ProfileSelection;
