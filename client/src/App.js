import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { socket, SocketContext } from "./context/socket.js";

// Components
import Nav from "./pages/Nav.js";
import Homepage from "./pages/Homepage.js";
import SearchCourses from "./pages/SearchCourses.js";
import SignIn from "./pages/SignIn.js";
import MyCourses from "./pages/MyCourses.js";
import LogIn from "./pages/LogIn.js";
import MyProfile from "./pages/MyProfile.js";
import Profiles from "./pages/Profiles.js";
import Channel from "./pages/Channel.js";

// CSS-files
import "./App.css";
import "./components/Chat/Chat.css";
import "./pages/Channel.css";
import "./pages/MyCourses.css";
import "./pages/Homepage.css";
import "./pages/MyProfile.css";
import "./pages/SearchCourses.css";
import "./pages/SignIn.css";

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
