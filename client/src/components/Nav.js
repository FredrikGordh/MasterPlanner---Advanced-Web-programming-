import React, { useEffect} from "react"; 
import {Link, Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

function Nav() {
    useEffect ( () => {
    },)
        const navigate= useNavigate()
        const handleLogout = (event) => {
            event.preventDefault()
            sessionStorage.clear()
            navigate('/')
            window.location.reload()

        }

    if (!sessionStorage.getItem('token')) {

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu" className="navbar-collapse collapse">
            <div className="navbar-nav ml-auto">
                <Link to='/' className="nav-item nav-link active">Startsida</Link>                
                <Link to='/LogIn ' className="nav-item nav-link"> Logga in </Link>
                <Link to='/SignIn ' className="nav-item nav-link"> Bli medlem </Link>
                <Link to='/Sok_kurser' className="nav-item nav-link"> Sök kurser</Link>
                </div>
        </div>
        </nav>
        
        
    )

}else {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu" className="navbar-collapse collapse">
            <div className="navbar-nav ml-auto">
                <Link to='/' className="nav-item nav-link active">Startsida</Link>
                <Link to='/Mina_kurser' className="nav-item nav-link">Mina kurser</Link>
                <Link to='/Sok_kurser' className="nav-item nav-link">Sök kurser</Link>
                <Link to ='/Min_profil' className="nav-item nav-link">Min profil</Link>
                <Link to='/Channel' className="nav-item nav-link">Chatt</Link>
                <Link  to='/' className="nav-item nav-link" onClick={ (e) => handleLogout(e)}>Logga ut </Link>
            </div>
        </div>
        </nav>
    )
}

}



export default Nav; 
