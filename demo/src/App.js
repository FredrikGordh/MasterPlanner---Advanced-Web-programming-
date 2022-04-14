import React from "react";
import Files from './file.json';


function App() {
return (
	<div className="App">
    {
      Files.map(file => {
        return(
          <div className="box">
            {file.id}
          </div> 
        )
      })
    }
  </div>
  );

}


export default App;
