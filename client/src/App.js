
import React, {Component} from "react";
import Files from './file.json';
import css from "./App.css";

import Nav from './components/Nav.js'
import Startsida from './components/Startsida.js'
import Sok_kurser from './components/Sok_kurser.js'
import Login from "./components/LogIn.js"
import SignIn from "./components/Signin.js"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Mina_kurser from "./components/Mina_Kurser.js"



function App() {

  return (
    // Router måste användas när man använder sig av Nav liknande funktioner
    <Router> 
    <div className="App">
  
          <Nav />
          <Routes>
            <Route path="/" element={<Startsida/>} />
            <Route path="/Sok_kurser" element={<Sok_kurser/>} />
            <Route path="/Mina_kurser" element={<Mina_kurser/>} />
            <Route path="/LogIn" element ={<Login/>}/>
            <Route path="/SignIn" element ={<SignIn/>}/>
          </Routes>
      
    </div>
    </Router>
    );
  }
  
export default App;









