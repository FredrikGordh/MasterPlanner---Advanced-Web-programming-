
import React, {Component} from "react";
import Files from './file.json';
import css from "./App.css";
import { ReactDOM } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Nav from './components/Nav.js'
import Startsida from './components/Startsida.js'
import Sok_kurser from './components/Sok_kurser.js'
import SignIn from "./components/Signin.js"
import Mina_kurser from "./components/Mina_Kurser.js"
import LogIn from "./components/LogIn.js"





function App() {
  



  if (!sessionStorage.getItem('token')) {
  return (
    
    // Router måste användas när man använder sig av Nav liknande funktioner

      <Router> 
      <div className="App">
            { console.log('Nu är vi i App div i nav') }
            {console.log('Detta är token: ' + localStorage.getItem('token'))}
            <Nav />
            <Routes>
              <Route path="/" element={<Startsida/>} onClick={console.log("nu är vi hör")} />
              {/* <Route path="/Mina_kurser" element={<Mina_kurser/>} /> */}
              <Route path="/LogIn" element ={<LogIn/>}/>
            <Route path="/SignIn" element ={<SignIn/>}/>
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

    <Router> 
    <div className="App">
          { console.log('Nu är vi i App div i nav') }
          {console.log('Detta är token: ' + sessionStorage.getItem('token'))}
          <Nav />
          <Routes>
            <Route path="/" element={<Startsida/>} />
            <Route path="/Sok_kurser" element={<Sok_kurser/>} />
            <Route path="/Mina_kurser" element={<Mina_kurser/>} />
            <Route
            path="*"
            element={
            <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
            </main>}/>
          </Routes>
    </div>
    </Router>


  )}
}

  
  
export default App;









