import React, { useState } from "react";
import { deleteMember, getFamilyTasks } from "../../../Utils";
import Modal from "react-modal";

const ProfileCard = ({
  user,
  i,
  setColour,
  setLoggedIn,
  setUser,
  setAdmin,
  setActiveTasks,
  setNullTasks,
  members,
  setMembers,
}) => {
  const [modalDelete, setModalDelete] = useState(false);
  const loginHandler = async (user) => {
    await setLoggedIn(true);
    await setUser(user);
    await setAdmin(user.admin);
    const result = await getFamilyTasks(user);
    await setActiveTasks(result.activeTasks);
    await setNullTasks(result.nullTasks);
  };

  const deleteMemberOnClick = async (id, i) => {
    let storedMember = [...members];
    storedMember.splice(i, 1);
    setMembers(storedMember);
    setColour("");
    setModalDelete(false);
    await deleteMember(id);
  };

  const closeModal = async () => {
    setModalDelete(false);
  };

  const openModal = async () => {
    setModalDelete(true);
  };
  return (
    <div className="indi-user-container">
      <img className="map-item-img" src={user.url} alt="avatar" />
      <h4>{user.name}</h4>
      <h5>{user.admin ? "Admin ✔" : ""}</h5>
      <button className="login-button" onClick={() => loginHandler(user)}>
        Login
      </button>
      <button className="delete-button" onClick={() => openModal()}>
        Delete
      </button>
      <Modal
        className="ModalStyle"
        isOpen={modalDelete}
        onRequestClose={() => closeModal()}
      >
        <>
          <h3>Are you sure you want to delete member</h3>
          <h2>{user.name}</h2>
          <button
            className="delete-button"
            onClick={() => deleteMemberOnClick(user.id, i)}
          >
            Confirm Delete
          </button>
        </>
      </Modal>
    </div>
  );
};

export default ProfileCard;
