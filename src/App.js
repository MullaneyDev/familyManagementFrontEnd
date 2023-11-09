import "./App.css";
import { useState } from "react";
import Footer from "./Components/Layout/Footer/Footer";

import Header from "./Components/Layout/Header/Header";
import NotLoggedIn from "./Components/Pages/NotLoggedIn/NotLoggedIn";
import LoggedIn from "./Components/Pages/LoggedIn/LoggedIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [family, setFamily] = useState({});
  const [members, setMembers] = useState([]);
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState([]);

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
          avatar={avatar}
          setAvatar={setAvatar}
        />
        <Footer />
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      <LoggedIn family={family} members={members} user={user} />
      <Footer />
    </div>
  );
}

export default App;
