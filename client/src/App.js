
import React from "react";
import Files from './file.json';



import { ReactDOM } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {socket, SocketContext} from './context/socket.js'
import { Socket } from "socket.io-client";

// Components
import Nav from './components/Nav.js'
import Homepage from './components/Homepage/Homepage.js'
import SearchCourses from './components/Courses/SearchCourses.js'
import SignIn from "./components/SignIn.js"
import MyCourses from "./components/Courses/MyCourses.js"
import LogIn from "./components/LogIn.js"
import MyProfile from "./components/MyProfile/MyProfile.js"
import Profiles from "./components/Profiles.js"
import Chat from "./components/Chat/Chat.js"
import Channel from "./components/Chat/Channel.js"
import ProfileCards from "./components/Homepage/ProfileCards.js";
import CourseTables from "./components/Courses/CourseTables.js"
import CoursesSearchBar from "./components/Courses/CoursesSearchBar.js";
import UploadImg from "./components/MyProfile/UploadImg.js";

// CSS-files
import "./App.css";
import "./components/Chat/Chat.css"
import "./components/Chat/Channel.css"
import "./components/Courses/MyCourses.css"
import "./components/Homepage/Homepage.css"
import "./components/MyProfile/MyProfile.css"
import "./components/Courses/SearchCourses.css"
import "./components/SignIn.css"


function App() {


  if (!sessionStorage.getItem('token')) {
  return (
    
      <Router> 
      <div className="App">
            { console.log('Nu är vi i App div i nav') }
            {console.log('Detta är token: ' + localStorage.getItem('token'))}
            <Nav />
            <Routes>
              <Route path="/" element={<Homepage/>} onClick={console.log("nu är vi hör")} />
              <Route path="/LogIn" element ={<LogIn/>}/>
              <Route path="/SignIn" element ={<SignIn/>}/>
              <Route path="/SearchCourses" element={<SearchCourses/>} />
              <Route path="/Profiles" element={<Profiles/>}/>
              <Route
              path="*"
              element={
              <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              </main>}/>
            </Routes>
      </div>
      </Router>  
    );
  }else{

  return(
    <SocketContext.Provider value={socket}>
    <Router> 
    <div className="App">
          <Nav />
          <Routes>
            
              <Route path="/" element={<Homepage/>} />
              <Route path="/MyCourses" element={<SearchCourses/>} />
              <Route path="/MyCourses" element={<MyCourses/>} />
              <Route path = "/MyProfile" element={<MyProfile/>}/>
              <Route path="/Profiles" element={<Profiles/>}/>
              <Route path="/Channel" element={<Channel/>}/>
              <Route
              path="*"
              element={
              <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              </main>}/>
            
          </Routes>
    </div>
    </Router>
    </SocketContext.Provider>

  )}
}

  
  
export default App;









