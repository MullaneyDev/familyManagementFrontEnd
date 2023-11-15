import React, { useState } from 'react'
import Modal from 'react-modal';
import { deleteMember } from '../../../Utils';

Modal.setAppElement("#root");


const ProfileCard = ({user, index, loginHandler, members, setMembers, setColour}) => {
    const [modal, setModal] = useState(false)
    const openModal = async () => {
      await setModal(true);
    };

    const closeModal = async () => {
      await setModal(false);
    };

      const deleteMemberOnClick = async (id, i) => {
        await deleteMember(id);
        let storedMember = [...members];
        storedMember.splice(i, 1);
        setMembers(storedMember);
        setColour("");
        closeModal()
      };

  return (
    <div className="indi-user-container">
      <img className="map-item-img" src={user.url} alt="avatar" />
      <h4>{user.name}</h4>
      <h5>{user.admin ? "Admin ✔" : ""}</h5>
      <button className="login-button" onClick={() => loginHandler(user)}>
        Login
      </button>
      <button
        className="delete-button"
        onClick={() => openModal()}
      >
        Delete
      </button>
      <Modal
      className="ModalStyle"
      isOpen={modal}
      onRequestClose={() => closeModal()}>
        <>
        <h2>Are you sure you want to delete?</h2>
        <button onClick={() => deleteMemberOnClick(user.id, index)}>Confirm Delete</button></>
      </Modal>
    </div>
  );
}

export default ProfileCard