// import React, {useEffect, useState} from 'react' 
// import {Link} from 'react-router-dom'; 

import React from "react"

//Ska detta vara en class eller function???

class SignIn extends React.Component{
    constructor(props){
        super(props)
    this.state={
        email:'',
        password:''
    }
}
    handleSubmit = (event) => {
        alert(`${this.state.email} ${this.state.password} `)
   
        // event.preventDefault()
        // fetch('/api', {
        //   method: 'POST',
        //   body: JSON.stringify({this.email,password}),
        //   headers: { 'Content-Type': 'application/json' },
        // })
        //   .then(res => res.json())
        //   .then(json => setUser(json.user))
      }

        
    

   
    // on change the value is captured by event.target.value
    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

     // on change the value is captured by event.target.value
    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
render(){
return(
<form style={{textAlign:"center"}}action="/action_page.php" onSubmit={this.handleSubmit}>
    <h1>Bli medlem</h1>
  <div class="form-group r">
      <div class="row d-flex justify-content-center">
    <label for="email">E-post:</label>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-4 d-flex justify-content-center">
    <input   
    type="email" 
    class="form-control" 
    placeholder="Enter email" 
    value={this.email}
    onChange={this.handleEmail}
    id="email"/>
    </div>
    </div>
  </div>
  <div class="form-group ">
    <div class="row row d-flex justify-content-center">
    <label for="pwd">Lösenord:</label>
    </div>
    <div class="row row d-flex justify-content-center">
        <div class="col-4" style={{textAlign:"center"}}>
    <input 
    type="password" 
    class="form-control" 
    placeholder="Enter password" 
    value={this.password}
    onChange={this.handlePassword}
    id="pwd"/>
        </div>
    </div>
  </div>

  <button type="submit" class="btn btn-primary" >Bli medlem</button>
</form>
)
}
}



export default SignIn