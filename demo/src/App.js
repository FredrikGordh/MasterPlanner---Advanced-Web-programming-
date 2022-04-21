
import React from "react";
import Files from './file.json';
const db = require("./database.js"); 

// const element = <h1>Hello World</h1>

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
//   )
// root.render('element')

function App() {
return (
	<div className="App">
    {
      Files.map(file => {
        return(
          <div className="box">
            {file.id}
            <div>Heeej</div>
          </div> 

          
        )
      })
    }
  </div>

  


  );

}

export default App;
