import React, { useEffect, useState } from "react";
import "./ProfileSelection.css";
import { addMember, deleteMember } from "../../../Utils";

// const apiKey = "yWrOSvTVeZ4RFA";
const ProfileSelection = ({
  admin,
  setAdmin,
  setUser,
  setLoggedIn,
  family,
  members,
  setVerified,
  setMembers,
}) => {
  const [name, setName] = useState([]);
  const [url, setUrl] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [addAdmin, setAddAdmin] = useState();
  const [colour, setColour] = useState("var(--user-blue)");

  const handleAddMemberSubmit = async (e) => {
    e.preventDefault();
    const response = await addMember(name, url, addAdmin, colour);
    let storedMember = [...members];
    storedMember.push(response.result);
    setMembers(storedMember);
  };

  const deleteMemberOnClick = async (id, i) => {
    await deleteMember(id);
    let storedMember = [...members];
    storedMember.splice(i, 1);
    setMembers(storedMember);
  };

  const changeHandler = (e) => {
    setName(e.target.value);
    setUrl(
      `https://api.multiavatar.com/${e.target.value}.svg?apikey=yWrOSvTVeZ4RFA`
    );
  };

  const loginHandler = async (user) => {
    setLoggedIn(true);
    setUser(user);
    console.log(user);
  };

  const adminPriv = async () => {
    setIsChecked((prevCheck) => !prevCheck);
  };

  useEffect(() => {
    if (isChecked === true) {
      setAddAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [isChecked]);

  const changeColor = async (value) => {
    setColour(value);
  };

  const adminDisplay = async () => {
    
  }

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
        <label>Admin?</label>
        <input type="checkbox" id="adminCheckBox" onClick={() => adminPriv()} />
        <input type="submit" value="Add Member" />
        <select onChange={(e) => changeColor(e.target.value)}>
          <option value={"var(--user-blue)"}>Blue</option>
          <option value={"var(--user-lilac)"}>Lilac</option>
          <option value={"var(--user-green)"}>Green</option>
          <option value={"var(--user-yellow)"}>Yellow</option>
          <option value={"var(--user-red)"}>Red</option>
        </select>
      </form>

      <h1>Who are you?</h1>
      {members.map((user, i) => {
        return (
          <div key={i} className="indi-user-container">
            <img className="map-item-img" src={user.url} alt="avatar" />
            <h4>{user.name}</h4>
            <button className="login-button" onClick={() => loginHandler(user)}>
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
