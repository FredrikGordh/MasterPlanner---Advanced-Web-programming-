import React from "react";
import Nav from './components/Nav.js'
import Startsida from './components/Startsida.js'
import Mina_kurser from './components/Mina_kurser.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
return (
  // Router måste användas när man använder sig av Nav liknande funktioner
  <Router> 
  <div className="App">

        <Nav />
        <Routes>
          <Route path="/" element={<Startsida/>} />
          <Route path="/Mina_kurser" element={<Mina_kurser/>} />
        </Routes>
    
  </div>
  </Router>
  );
}


export default App;
