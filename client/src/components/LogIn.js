import React, {useEffect, useState} from 'react' 
import {useNavigate} from 'react-router-dom';

function LogIn(){
    const[email, setEmail] = useState('')
    const[body, setBody] = useState('')
    const[password, setPassword] = useState('')
    const[loginStatus, setLoginStatus] = useState(false)
    const[boolean, setBoolean] = useState(false)
    const[submit, setSubmit] = useState(false)
    const navigate= useNavigate();
    
    useEffect (() => { 

    })

    const handleSubmit = () => {
        const myData = {email, password}
        console.log('myData: ' + JSON.stringify(myData))

        // Sending userdata through a POST request to server
        fetch('http://localhost:3000/LogIn',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(myData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('first log in status ' + loginStatus)
            console.log('Authroization status: ' + data.auth)
            if(data.auth){

                console.log('log status ' + loginStatus + 'auth status' + data.auth)
                navigate('/')
                alert('You are now Logged in! Token: ' + data.token )
                localStorage.setItem("token",  data.token)
                console.log('token in local storage : ' + localStorage.getItem('token'))

            }else if (!data.auth){
                setLoginStatus(false)
                alert('Wrong password try again.')
                
                console.log('log status ' + loginStatus + 'auth status' + data.auth )
            }
        })
    }

   
return(
<form style={{textAlign:"center"}}action="/action_page.php" onSubmit={handleSubmit}>
    <h1>Logga In</h1>
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

     
  <button  type="submit" className="btn btn-primary" >Logga in</button>
</form>
)

}





export default LogIn






        // Functionality after pushing submit
    //     const handleSubmit = (e) =>{
    //         e.preventDefault();

    //         const myData = {email, password}
    //             // Sending userdata through a POST request to server
    //             fetch('http://localhost:3000/LogIn',{
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type':'application/json'
    //                 },
    //                 body: JSON.stringify(myData),
    //             })
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log('first log in status ' + loginStatus)
    //                 if(data.auth){

    //                     // Setting login status to true and saving token in localStorage
    //                     setLoginStatus(true); 
    //                     console.log('log status ' + loginStatus + 'auth status' + data.auth)
    //                     navigate('/')
    //                     alert('You are now Logged in!')
    //                     localStorage.setItem("token",  data.token)

    //                 }else if (!data.auth){
    //                     setLoginStatus(false)
    //                     alert('Wrong password try again.')
                        
    //                     console.log('log status ' + loginStatus + 'auth status' + data.auth)
    //                 }
    //             }) 
    //   }
