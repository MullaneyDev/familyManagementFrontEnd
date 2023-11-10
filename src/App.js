import "./App.css";
import { useState, useEffect } from "react";
import { getTokenFromCookie } from "./Common";
import { authCheck } from "./Utils";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import NotLoggedIn from "./Components/Pages/NotLoggedIn/NotLoggedIn";
import LoggedIn from "./Components/Pages/LoggedIn/LoggedIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(true);
  const [family, setFamily] = useState({});
  const [members, setMembers] = useState([]);
  const [user, setUser] = useState({});
  const [verified, setVerified] = useState(false);
  const [activeTasks, setActiveTasks] = useState([]);
  const [nullTasks, setNullTasks] = useState([]);

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");
      if (token === false) {
        setFamily({});
        setLoggedIn(false);
      } else {
        loginWithToken(token, setFamily);
      }
    }
  }, []);

  const loginWithToken = async (token) => {
    const persistentFamily = await authCheck(token);
    await setFamily(persistentFamily.family);
    await setMembers(persistentFamily.family.members);
    setVerified(true);
  };

  if (!loggedIn) {
    return (
      <div className="App">
        <Header
          admin={admin}
          loggedIn={loggedIn}
          family={family}
          setFamily={setFamily}
          setLoggedIn={setLoggedIn}
          setMembers={setMembers}
          setUser={setUser}
          verified={verified}
          setVerified={setVerified}
        />
        <NotLoggedIn
          user={user}
          setLoggedIn={setLoggedIn}
          setAdmin={setAdmin}
          admin={admin}
          setFamily={setFamily}
          family={family}
          setMembers={setMembers}
          members={members}
          setUser={setUser}
          verified={verified}
          setVerified={setVerified}
          activeTasks={activeTasks}
          setActiveTasks={setActiveTasks}
          nullTasks={nullTasks}
          setNullTasks={setNullTasks}
        />
        <Footer />
      </div>
    );
  }
  return (
    <div className="App">
      <Header
        admin={admin}
        loggedIn={loggedIn}
        family={family}
        setFamily={setFamily}
        setLoggedIn={setLoggedIn}
        setMembers={setMembers}
        setUser={setUser}
        verified={verified}
        setVerified={setVerified}
      />
      <LoggedIn
        family={family}
        members={members}
        user={user}
        activeTasks={activeTasks}
        setActiveTasks={setActiveTasks}
        nullTasks={nullTasks}
        setNullTasks={setNullTasks}
      />
      <Footer />
    </div>
  );
}

export default App;
