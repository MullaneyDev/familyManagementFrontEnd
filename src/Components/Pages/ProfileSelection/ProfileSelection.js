import React, { useEffect, useState } from "react";
import "./ProfileSelection.css";
import { addMember, deleteMember, getFamilyTasks } from "../../../Utils";
import Modal from "react-modal";

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
  const [isChecked, setIsChecked] = useState(false);
  const [addAdmin, setAddAdmin] = useState();
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
    await setLoggedIn(true);
    await setUser(user);
    await setAdmin(user.admin);
    const result = await getFamilyTasks(user);
    await setActiveTasks(result.activeTasks);
    await setNullTasks(result.nullTasks);
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

  const openModal = async (setter) => {
    await setter(true);
  };

  const closeModal = async (setter) => {
    await setter(false);
    await setColour();
  };

  return (
    <div className="profile-selection">
      <section className="top-page">
        <h1>Who are you?</h1>
        <button
          className="create-new-user"
          onClick={() => openModal(setModalLogout)}
        >
          Create New User
        </button>
      </section>
      <div className="netflix-container">
        <Modal
          className="ModalStyle"
          isOpen={modalLogout}
          onRequestClose={() => closeModal(setModalLogout)}
        >
          <form
            className="add-member-container"
            onSubmit={handleAddMemberSubmit}
          >
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="Member Name"
              onChange={(e) => changeHandler(e)}
            />
            <label className="admin-checkbox-container">
              Admin?
              <input
                type="checkbox"
                id="adminCheckBox"
                onClick={() => adminPriv()}
              />
            </label>
            <select
              style={{ backgroundColor: colour }}
              onChange={(e) => changeColor(e.target.value)}
            >
              <option>Select Profile Colour</option>
              <option id="blue-option" value={"var(--user-blue)"}>
                Blue
              </option>
              <option id="lilac-option" value={"var(--user-lilac)"}>
                Lilac
              </option>
              <option id="green-option" value={"var(--user-green)"}>
                Green
              </option>
              <option id="yellow-option" value={"var(--user-yellow)"}>
                Yellow
              </option>
              <option id="red-option" value={"var(--user-red)"}>
                Red
              </option>
            </select>
            <input
              className="create-new-user"
              type="submit"
              value="Add Member"
            />
          </form>
        </Modal>
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
