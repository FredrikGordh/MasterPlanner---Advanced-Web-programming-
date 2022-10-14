import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { socket, SocketContext } from "./context/socket.js";

// Components
import Nav from "./Nav.js";
import Homepage from "./Homepage.js";
import SearchCourses from "./SearchCourses.js";
import SignIn from "./SignIn.js";
import MyCourses from "./MyCourses.js";
import LogIn from "./LogIn.js";
import MyProfile from "./MyProfile.js";
import Profiles from "./Profiles.js";
import Channel from "./Channel.js";

// CSS-files
import "./App.css";
import "./components/Chat/Chat.css";
import "./Channel.css";
import "./MyCourses.css";
import "./Homepage.css";
import "./MyProfile.css";
import "./SearchCourses.css";
import "./SignIn.css";

// Main application module
// Using Router and routes to handle orientation between modules and components
// If there is no token, the user is not logged in and depending on this the user
// has access to different components
function App() {
  // If the user is logged in:
  if (!sessionStorage.getItem("token")) {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SearchCourses" element={<SearchCourses />} />
            <Route path="/Profiles" element={<Profiles />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
  // If the user is not logged in:
  else {
    return (
      <SocketContext.Provider value={socket}>
        <Router>
          <div className="App">
            <Nav />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/SearchCourses" element={<SearchCourses />} />
              <Route path="/MyCourses" element={<MyCourses />} />
              <Route path="/MyProfile" element={<MyProfile />} />
              <Route path="/Profiles" element={<Profiles />} />
              <Route path="/Channel" element={<Channel />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </div>
        </Router>
      </SocketContext.Provider>
    );
  }
}

export default App;
