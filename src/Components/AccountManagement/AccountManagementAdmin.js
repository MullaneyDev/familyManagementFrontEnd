import React from "react";
import "./AccountManagementAdmin.css";
import { useState, useRef } from "react";
import { useCollapse } from "react-collapsed";
import Modal from "react-modal";
import { writeCookie } from "../../Common";
import { deleteFamily, updatePassword, updateUsername } from "../../Utils";

Modal.setAppElement("#root");

const AccountManagementAdmin = ({
  family,
  setFamily,
  setLoggedIn,
  setMembers,
  setUser,
  setVerified,
}) => {
  const [message, setMessage] = useState("");
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdateUsername, setModalUpdateFamilyname] = useState(false);
  const [modalUpdatePassword, setModalUpdatePassword] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);

  const password = useRef(null);
  const newPassword = useRef(null);
  const username = useRef(null);
  const newUsername = useRef(null);

  const handleNewUsername = async (e) => {
    e.preventDefault();
    const response = await updateUsername(
      username?.current?.value,
      newUsername?.current?.value
    );
    await setMessage(response.message);
  };
  const handleNewPassword = async (e) => {
    e.preventDefault();
    console.log(password?.current?.value);
    console.log(newPassword?.current?.value);

    const response = await updatePassword(
      password?.current?.value,
      newPassword?.current?.value,
      family.username
    );
    await setMessage(response.message);
  };

  const handleDelete = async (username) => {
    await deleteFamily(username);
    await writeCookie("jwt_token", family.token, 0);
    await setFamily({});
    await setMembers([]);
    await setUser({});
    await setVerified(false);
    await setLoggedIn(false);
  };
  const handleLogout = async () => {
    await writeCookie("jwt_token", family.token, 0);
    await setFamily({});
    await setMembers([]);
    await setUser({});
    await setVerified(false);
    await setLoggedIn(false);
  };

  const openModal = async (setter) => {
    await setter(true);
  };
  const closeModal = async (setter) => {
    await setter(false);
  };

  function Collapsible() {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse();
    return (
      <div className="collapsible">
        <div
          className="accountOptions"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded ? "⚙️" : "⚙️"}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <button
              className="accountBtn"
              onClick={() => openModal(setModalUpdateFamilyname)}
            >
              Update Username
            </button>
            <Modal
              className="ModalStyle"
              isOpen={modalUpdateUsername}
              onRequestClose={() => closeModal(setModalUpdateFamilyname)}
            >
              <>
                <div className="accountOptions">
                  <form
                    className="updateForm"
                    onSubmit={(e) => handleNewUsername(e)}
                  >
                    <label>Update Username</label>
                    <input
                      type="text"
                      required={true}
                      placeholder="Current Username"
                      className="input-field"
                      ref={username}
                    />
                    <input
                      type="text"
                      required={true}
                      placeholder="New Username"
                      className="input-field"
                      ref={newUsername}
                    />
                    <input
                      className="accountBtn"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                  <h3>{message}</h3>
                </div>
              </>
            </Modal>
            <button
              className="accountBtn"
              onClick={() => openModal(setModalUpdatePassword)}
            >
              Update Password
            </button>
            <Modal
              className="ModalStyle"
              isOpen={modalUpdatePassword}
              onRequestClose={() => closeModal(setModalUpdatePassword)}
            >
              <>
                <div className="accountOptions">
                  <form
                    className="updateForm"
                    onSubmit={(e) => handleNewPassword(e)}
                  >
                    <label>Update Password</label>
                    <input
                      type="password"
                      required={true}
                      placeholder="Current Password"
                      className="input-field"
                      ref={password}
                    />
                    <input
                      type="password"
                      required={true}
                      placeholder="New Password"
                      className="input-field"
                      ref={newPassword}
                    />
                    <input
                      className="accountBtn"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                  <h3>{message}</h3>
                </div>
              </>
            </Modal>
            <button
              className="accountBtn"
              onClick={() => openModal(setModalDelete)}
            >
              Delete Account
            </button>
            <Modal
              className="ModalStyle"
              isOpen={modalDelete}
              onRequestClose={() => closeModal(setModalDelete)}
            >
              <>
                <h3> Are you sure you want to delete your account?</h3>
                <button
                  className="accountBtn"
                  onClick={() => handleDelete(family.username)}
                >
                  Confirm Delete
                </button>
              </>
            </Modal>
            <button
              className="accountBtn"
              onClick={() => openModal(setModalLogout)}
            >
              Log Out
            </button>
            <Modal
              className="ModalStyle"
              isOpen={modalLogout}
              onRequestClose={() => closeModal(setModalLogout)}
            >
              <>
                <h3> Are you sure you want to log out?</h3>
                <button className="accountBtn" onClick={() => handleLogout()}>
                  Confirm Log Out
                </button>
              </>
            </Modal>
          </div>
        </div>
      </div>
    );
  }

  return <Collapsible />;
};

export default AccountManagementAdmin;
