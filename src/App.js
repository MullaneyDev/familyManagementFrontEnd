import "./App.css";
import { useState, useEffect } from "react";
import { getTokenFromCookie } from "./Common";
import { authCheck } from "./Utils";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import NotLoggedIn from "./Components/Pages/NotLoggedIn/NotLoggedIn";
import LoggedIn from "./Components/Pages/LoggedIn/LoggedIn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Rewards from "./Components/Rewards/Rewards";

import leadrboardimg from "./assets/leaderboardimg.svg";
import tasksimg from "./assets/tasksimg.svg";
import medal from "./assets/medal.svg";
import calendarimg from "./assets/calendar.svg";

import Calendar from "./Components/FullCalendar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [family, setFamily] = useState({});
  const [members, setMembers] = useState([]);
  const [user, setUser] = useState({});
  const [verified, setVerified] = useState(false);
  const [activeTasks, setActiveTasks] = useState([]);
  const [nullTasks, setNullTasks] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");
      if (!token) {
        setFamily({});
        setLoggedIn(false);
      } else {
        loginWithToken(token, setFamily, setVerified);
      }
    }
  }, []);

  const loginWithToken = async (token, setFamily, setVerified) => {
    const persistentFamily = await authCheck(token);
    await setFamily(persistentFamily.family);
    await setMembers(persistentFamily.family.members);
    await setVerified(true);
  };

  if (!loggedIn) {
    return (
      <div className="App" data-theme={isDark ? "dark" : "light"}>
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
          user={user}
          isDark={isDark}
          setIsDark={setIsDark}
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
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <BrowserRouter>
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
          user={user}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <Routes>
          <Route
            path="/"
            element={
              <LoggedIn
                family={family}
                members={members}
                setMembers={setMembers}
                user={user}
                activeTasks={activeTasks}
                setActiveTasks={setActiveTasks}
                nullTasks={nullTasks}
                setNullTasks={setNullTasks}
                admin={admin}
              />
            }
          />
          <Route
            path="/leaderboard"
            element={<Leaderboard members={members} setMembers={setMembers} />}
          />
          <Route
            path="/rewards"
            element={<Rewards rewards={rewards} setRewards={setRewards} />}
          />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        <nav>
          <Link className="tasklink" to="/" on>
            <h3>Tasks</h3>
            <img className="navimg" src={tasksimg} alt="Tasks" />
          </Link>
          <Link className="calendarlink" to="/calendar">
            <h3>Calendar</h3>
            <img className="navimg" src={calendarimg} alt="Calendar" />
          </Link>
          <Link className="rewardslink" to="/rewards">
            <h3>Rewards</h3>
            <img className="navimg" src={medal} alt="Rewards" />
          </Link>
          <Link className="leaderboardlink" to="/leaderboard">
            <h3>Leaderboard</h3>
            <img className="navimg" src={leadrboardimg} alt="Leaderboard" />
          </Link>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
