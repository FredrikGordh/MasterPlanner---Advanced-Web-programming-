
import React from "react";
import Files from './file.json';



import { ReactDOM } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {socket, SocketContext} from './context/socket.js'
import { Socket } from "socket.io-client";

// Components
import Nav from './components/Nav.js'
import Startsida from './components/Startsida.js'
import Sok_kurser from './components/Sok_kurser.js'
import SignIn from "./components/Signin.js"
import Mina_kurser from "./components/Mina_kurser.js"
import LogIn from "./components/LogIn.js"
import MyProfile from "./components/MyProfile.js"
import Profiles from "./components/Profiles.js"
import Chat from "./components/Chat.js"
import Channel from "./components/Channel.js"
import ProfileCards from "./components/ProfileCards.js";
import CourseTables from "./components/CourseTables.js"
import CoursesSearchBar from "./components/CoursesSearchBar.js";

// CSS-files
import "./App.css";
import "./components/Chat.css"
import "./components/Channel.css"
import "./components/Mina_kurser.css"
import "./components/Startsida.css"
import "./components/MyProfile.css"
import "./components/Sok_kurser.css"
import "./components/Signin.css"


function App() {


  if (!sessionStorage.getItem('token')) {
  return (
    
      <Router> 
      <div className="App">
            { console.log('Nu är vi i App div i nav') }
            {console.log('Detta är token: ' + localStorage.getItem('token'))}
            <Nav />
            <Routes>
              <Route path="/" element={<Startsida/>} onClick={console.log("nu är vi hör")} />
              <Route path="/LogIn" element ={<LogIn/>}/>
              <Route path="/SignIn" element ={<SignIn/>}/>
              <Route path="/Sok_kurser" element={<Sok_kurser/>} />
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
            
              <Route path="/" element={<Startsida/>} />
              <Route path="/Sok_kurser" element={<Sok_kurser/>} />
              <Route path="/Mina_kurser" element={<Mina_kurser/>} />
              <Route path = "/Min_profil" element={<MyProfile/>}/>
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









