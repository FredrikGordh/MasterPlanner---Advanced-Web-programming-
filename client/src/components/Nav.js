import React, {useState, useEffect} from "react"; 
import {Link, Navigate} from 'react-router-dom'

function Nav() {
    useEffect ( () => {
        setLoggedInStatus(); 
        console.log('useeer effeeect ')
    },)

const [loggedInStatus, setLoggedInStatus] = useState([false]);



fetch('http://localhost:3000/LogIn/isUserAuth', {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem("token")
            }
        })
        .then(response => response.json())
        .then(data => {

            // console.log('logged in status: ' + loggedInStatus)
            // console.log('auth: ' + data.auth)
            // if(data.auth){
            //     setLoggedInStatus(true)
            //     console.log('logged in status: ' + loggedInStatus)
            // }else{
            //     setLoggedInStatus(false)

            //     console.log('You are not authenticated')
            // }
            
        })


        const handleLogout = (event) => {
            event.preventDefault()
            sessionStorage.clear()
            Navigate("/")
        }

        if (!sessionStorage.getItem('token')) {
    return(

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu" class="navbar-collapse collapse">
            <div class="navbar-nav ml-auto">
                <Link to='/' className="nav-item nav-link active">Startsida</Link>                
                <Link to='/LogIn ' className="nav-item nav-link"> Logga in </Link>
                <Link to='/SignIn ' className="nav-item nav-link"> Bli medlem </Link>
                </div>
        </div>
        </nav>
        
        
    ) 

}else {
    
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu" class="navbar-collapse collapse">
            <div class="navbar-nav ml-auto">
                <Link to='/' className="nav-item nav-link active">Startsida</Link>
                <Link to='/Mina_kurser' className="nav-item nav-link">Mina kurser</Link>
                <button  className="nav-item nav-link" onClick={ (e) => handleLogout(e)}>Logga ut  </button>
                </div>
            </div>
        </nav>
    )
}

}



export default Nav; 
