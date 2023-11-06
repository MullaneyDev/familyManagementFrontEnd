import "./App.css";
import {useState} from "react"
import Footer from "./Components/layout/Footer/Footer";
import Header from "./Components/layout/Header/Header";
import NotLoggedIn from "./Components/Pages/NotLoggedIn/NotLoggedIn";
import LoggedIn from "./Components/Pages/LoggedIn/LoggedIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  if (loggedIn) {
    return (
      <div className="App">
        <Header />
        <NotLoggedIn />
        <Footer />
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      <LoggedIn />
      <Footer />
    </div>
  );
}

export default App;
