import React from "react";
import "./AccountManagement.css";
import { useState } from "react";
import { useCollapse } from "react-collapsed";
import Modal from "react-modal";
import { writeCookie } from "../../Common";

Modal.setAppElement("#root");

const AccountManagement = ({
  family,
  setFamily,
  setLoggedIn,
  setMembers,
  setUser,
  setVerified
}) => {
  const [modalLogout, setModalLogout] = useState(false);

  const handleLogout = async () => {
    await writeCookie("jwt_token", family.token, 0);
    await setFamily({});
    await setMembers([]);
    await setUser({});
    await setVerified(false)
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
                  Confirm logout
                </button>
              </>
            </Modal>
          </div>
        </div>
      </div>
    );
  }

  return (
      <Collapsible />
  );
};

export default AccountManagement;
