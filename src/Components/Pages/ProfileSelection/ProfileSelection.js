import React, { useState } from "react";
import "./ProfileSelection.css";
import { addMember } from "../../../Utils";
import CreateMember from "./CreateMember";
import ProfileCard from "./ProfileCard";

const ProfileSelection = ({
  setAdmin,
  setUser,
  setLoggedIn,
  members,
  setMembers,
  setActiveTasks,
  setNullTasks,
}) => {
  const [name, setName] = useState([]);
  const [url, setUrl] = useState("");
  const [addAdmin, setAddAdmin] = useState(false);
  const [colour, setColour] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [userModalLogout, setUserModalLogout] = useState(false);

  const handleAddMemberSubmit = async (e) => {
    e.preventDefault();
    setTotalPoints(0);
    const response = await addMember(name, url, addAdmin, colour, totalPoints);
    let storedMember = [...members];
    storedMember.push(response.result);
    setMembers(storedMember);
    setUserModalLogout(false);
    setColour("");
    setAddAdmin(false);
  };

  const changeHandler = (e) => {
    setName(e.target.value);
    setUrl(
      `https://api.multiavatar.com/${e.target.value}.svg?apikey=yWrOSvTVeZ4RFA`
    );
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
        members={members}
        setUserModalLogout={setUserModalLogout}
        userModalLogout={userModalLogout}
      />
      <div className="netflix-container">
        {members.map((user, i) => (
          <ProfileCard
            user={user}
            key={i}
            i={i}
            setColour={setColour}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
            setAdmin={setAdmin}
            setActiveTasks={setActiveTasks}
            setNullTasks={setNullTasks}
            members={members}
            setMembers={setMembers}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
