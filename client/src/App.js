
import React, {Component} from "react";
import Files from './file.json';
import css from "./App.css";
import { ReactDOM } from "react";

import Nav from './components/Nav.js'
import Startsida from './components/Startsida.js'
import Mina_kurser from './components/Mina_kurser.js'
import LogIn from "./components/LogIn.js"
import SignIn from "./components/SignIn.js"
// import IsAuth from "./../../server/api/IsAuthenticated"

import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

  // ////////////////// Ändring från guide
  export const AuthContext = React.createContext();
  const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token
        };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
      default:
        return state;
    }
    ///////////////////////
  }

function App() {

  //////// Ändring från guide
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //////////

  



  if (!sessionStorage.getItem('token')) {
  return (
    
    // Router måste användas när man använder sig av Nav liknande funktioner

    //////////////// Ändring från guide endast AutoContext
    <AuthContext.Provider
    value={{
      state,
      dispatch
    }}>
    
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
      </AuthContext.Provider>
    );
  }else{
    //////////////// Ändring från guide endast AutoContext
    return(

        <AuthContext.Provider
        value={{
          state,
          dispatch
        }}>
    <Router> 
    <div className="App">
          { console.log('Nu är vi i App div i nav') }
          {console.log('Detta är token: ' + sessionStorage.getItem('token'))}
          <Nav />
          <Routes>
            <Route path="/" element={<Startsida/>} onClick={console.log("nu är vi hör")} />
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
    </AuthContext.Provider>

  )}
}

  
  
export default App;









