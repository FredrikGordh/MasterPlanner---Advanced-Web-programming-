import React, { useEffect} from "react"; 
import {Link} from 'react-router-dom'

function Nav() {
    useEffect ( () => {

    },)

        const handleLogout = (event) => {
            event.preventDefault()
            alert('You have logged out')
            sessionStorage.clear()
            window.location.reload()
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
                <Link to='/Sok_kurser' className="nav-item nav-link">Sök kurser</Link>
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
                <Link to='/Sok_kurser' className="nav-item nav-link">Sök kurser</Link>
                <Link to ='/Min_profil' className="nav-item nav-link">Min profil</Link>
                <Link  to='/' className="nav-item nav-link" onClick={ (e) => handleLogout(e)}>Logga ut </Link>
            </div>
        </div>
        </nav>
    )
}

}



export default Nav; 
