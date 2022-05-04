
import React, {Component} from "react";
import Files from './file.json';
import css from "./App.css";

import Nav from './components/Nav.js'
import Startsida from './components/Startsida.js'
import Mina_kurser from './components/Mina_kurser.js'
import Login from "./components/LogIn.js"
import SignIn from "./components/SignIn.js"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


// const db = require("./database.js"); 

// const element = <h1>Hello World</h1>

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
//   )
// root.render('element')

class App extends Component {
  constructor(props){
    super(props)
    this.state = {apiResponse: ""}
  }


  callAPI(){
    fetch("http://localhost:3000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
}

render() {
  return (
    <div className="App">
                <header className="App-header">
                    
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
      </div>
  );
  }
}

export default App;



// function App() {

//   return (
//     // Router måste användas när man använder sig av Nav liknande funktioner
//     <Router> 
//     <div className="App">
  
//           <Nav />
//           <Routes>
//             <Route path="/" element={<Startsida/>} />
//             <Route path="/Mina_kurser" element={<Mina_kurser/>} />
//             <Route path="/LogIn" element ={<Login/>}/>
//             <Route path="/SignIn" element ={<SignIn/>}/>
//           </Routes>
      
//     </div>
//     </Router>
//     );
//   }
  
// export default App;
