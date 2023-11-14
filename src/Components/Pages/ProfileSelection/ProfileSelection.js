import React, { useState } from "react";
import "./ProfileSelection.css";
import { addMember, deleteMember, getFamilyTasks } from "../../../Utils";
import CreateMember from "./CreateMember";

const ProfileSelection = ({
  admin,
  setAdmin,
  setUser,
  setLoggedIn,
  family,
  members,
  setVerified,
  setMembers,
  activeTasks,
  setActiveTasks,
  nullTasks,
  setNullTasks,
}) => {
  const [name, setName] = useState([]);
  const [url, setUrl] = useState();
  const [addAdmin, setAddAdmin] = useState(false);
  const [colour, setColour] = useState();
  const [totalPoints, setTotalPoints] = useState(0);
  const [modalLogout, setModalLogout] = useState(false);

  const handleAddMemberSubmit = async (e) => {
    e.preventDefault();
    setTotalPoints(0);
    const response = await addMember(name, url, addAdmin, colour, totalPoints);
    let storedMember = [...members];
    storedMember.push(response.result);
    setMembers(storedMember);
    setModalLogout(false);
    setColour("");
    setAddAdmin(false);
  };

  const deleteMemberOnClick = async (id, i) => {
    await deleteMember(id);
    let storedMember = [...members];
    storedMember.splice(i, 1);
    setMembers(storedMember);
    setColour("");
  };

  const changeHandler = (e) => {
    setName(e.target.value);
    setUrl(
      `https://api.multiavatar.com/${e.target.value}.svg?apikey=yWrOSvTVeZ4RFA`
    );
  };

  const loginHandler = async (user) => {
    await setLoggedIn(true);
    await setUser(user);
    await setAdmin(user.admin);
    const result = await getFamilyTasks(user);
    await setActiveTasks(result.activeTasks);
    await setNullTasks(result.nullTasks);
  };

  const adminPriv = async () => {
    setAddAdmin(!addAdmin);
  };

  return (
    <div className="profile-selection">
      <CreateMember
        adminPriv={adminPriv}
        handleAddMemberSubmit={handleAddMemberSubmit}
        colour={colour}
        setColour={setColour}
        changeHandler={changeHandler}
        setModalLogout={setModalLogout}
        modalLogout={modalLogout}
        members={members}
      />
      <div className="netflix-container">
        {members.map((user, i) => {
          return (
            <div key={i} className="indi-user-container">
              <img className="map-item-img" src={user.url} alt="avatar" />
              <h4>{user.name}</h4>
              <h5>{user.admin ? "Admin ✔" : ""}</h5>
              <button
                className="login-button"
                onClick={() => loginHandler(user)}
              >
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
    </div>
  );
};

export default ProfileSelection;
