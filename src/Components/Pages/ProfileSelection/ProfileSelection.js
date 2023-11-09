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
  setMembers,
}) => {
  const [name, setName] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [url, setUrl] = useState("");

  console.log(name);
  console.log(members);
  console.log(family);

  const handleAddMemberSubmit = async (e) => {
    e.preventDefault();
    const response = await addMember(name);
    let storedMember = [...members];
    storedMember.push(response.result);
    setMembers(storedMember);
    console.log(response);
  };

  const deleteMemberOnClick = async (id, i) => {
    await deleteMember(id);
    let storedMember = [...members];
    storedMember.splice(i, 1);
    setMembers(storedMember);
  };

  const changeHandler = (e) => {
    setName(e.target.value);
    setUserInput(e.target.value);
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
              onClick={() => deleteMemberOnClick(user.id, i)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSelection;
