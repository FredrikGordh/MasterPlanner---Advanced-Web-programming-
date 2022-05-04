import React from "react"; 
import {Link} from 'react-router-dom'

function Nav() {

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Startsida</Link>
                    <Link to='/Mina_kurser' className="nav-item nav-link">Mina kurser</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav; 
