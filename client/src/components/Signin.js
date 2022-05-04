// import React, {useEffect, useState} from 'react' 
// import {Link} from 'react-router-dom';

import React, {useState} from "react"

//Ska detta vara en class eller function???

// class SignIn extends React.Component{
//     constructor(props){
//         super(props)
//     this.state={
//         email:'',
//         password:''
//     }



function SignIn(){
    const[email, setEmail] = useState('')
    const[body, setBody] = useState('')
    const[password, setPassword] = useState('')
           
      const handleSubmit = (e) =>{
            e.preventDefault();

            const myData = {email, password}

            fetch('http://localhost:3000/SignIn',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(myData)
                
            }).then(() => {
                console.log("new user added"); 
                console.log(myData)
            })
        }

return(
<form style={{textAlign:"center"}}action="/action_page.php" onSubmit={handleSubmit}>
    <h1>Bli medlem</h1>
  <div className="form-group r">
      <div className="row d-flex justify-content-center">
    <label for="email">E-post:</label>
    </div>
    <div className="row d-flex justify-content-center">
        <div className="col-4 d-flex justify-content-center">
    <input   
    type="email" 
    className="form-control" 
    placeholder="Enter email" 
    // value={email}
    onChange={ (e) => setEmail(e.target.value)}
    id="email"/>
    </div>
    </div>
  </div>
  <div className="form-group ">
    <div className="row row d-flex justify-content-center">
    <label for="pwd">Lösenord:</label>
    </div>
    <div className="row row d-flex justify-content-center">
        <div className="col-4" style={{textAlign:"center"}}>
    <input 
    type="password" 
    className="form-control" 
    placeholder="Enter password" 
    // value={password}
    onChange={ (e) => setPassword(e.target.value)}
    id="pwd"/>
        </div>
    </div>
  </div>

     
  <button  type="submit" className="btn btn-primary" >Bli medlem</button>
</form>
)

}




export default SignIn