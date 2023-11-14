import React from "react";
import Modal from "react-modal";

const CreateMember = ({
  adminPriv,
  handleAddMemberSubmit,
  colour,
  setColour,
  changeHandler,
  setModalLogout,
  modalLogout,
  members,
}) => {
  const changeColor = async (value) => {
    setColour(value);
  };

  const closeModal = async (setter) => {
    await setter(false);
    await setColour();
  };

  const openModal = async (setter) => {
    await setter(true);
  };

  return (
    <div>
      <section className="top-page">
        <h1>Who are you?</h1>
        <button
          className="create-new-user"
          onClick={() => openModal(setModalLogout)}
        >
          Create New User
        </button>
      </section>
      <Modal
        className="ModalStyle"
        isOpen={modalLogout}
        onRequestClose={() => closeModal(setModalLogout)}
      >
        <form className="add-member-container" onSubmit={handleAddMemberSubmit}>
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Member Name"
            required={true}
            onChange={(e) => changeHandler(e)}
          />
          {members.filter((memberObject) => memberObject.admin).length === 0 ? (
            <label className="admin-checkbox-container">
              Admin?
              <input
                type="checkbox"
                id="adminCheckBox"
                onClick={() => adminPriv()}
              />
            </label>
          ) : (
            <div></div>
          )}

          <select
            style={{ backgroundColor: colour }}
            onChange={(e) => changeColor(e.target.value)}
            required={true}
          >
            <option value="">Select Profile Colour</option>
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
          <input className="create-new-user" type="submit" value="Add Member" />
        </form>
      </Modal>
    </div>
  );
};

export default CreateMember;
