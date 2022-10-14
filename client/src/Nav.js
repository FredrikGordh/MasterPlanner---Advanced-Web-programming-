import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// Navbar component
function Nav() {
  const [clicked, setClicked] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {}, [clicked]);
  const handleLogout = (event) => {
    event.preventDefault();
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };
  const handleChat = (event) => {
    event.preventDefault();
    navigate("/Channel");
    window.location.reload();
  };

  // If logged in
  if (!sessionStorage.getItem("token")) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navMainMenu"
          aria-controls="navMainMenu"
          onClick={(e) => {
            if (!clicked) {
              setClicked(true);
            } else {
              setClicked(false);
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navMainMenu"
          className="collapse navbar-collapse"
          hidden={clicked}
        >
          <ul className="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                {" "}
                Startsida{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/LogIn">
                {" "}
                Logga in{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/SignIn">
                {" "}
                Bli medlem{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/SearchCourses">
                {" "}
                Sök kurser{" "}
              </a>
            </li>

            {/* 
                        <Link to='/' className="nav-item nav-link">Startsida</Link>
                        <Link to='/LogIn ' className="nav-item nav-link"> Logga in </Link>
                        <Link to='/SignIn ' className="nav-item nav-link"> Bli medlem </Link>
                        <Link to='/SearchCourses' className="nav-item nav-link"> Sök kurser</Link> */}
          </ul>
        </div>
      </nav>
    );
  }
  // If not logged in
  else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navMainMenu"
          aria-controls="navMainMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu" className="navbar-collapse collapse">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link">
              Startsida
            </Link>
            <Link to="/MyCourses" className="nav-item nav-link">
              Mina kurser
            </Link>
            <Link to="/SearchCourses" className="nav-item nav-link">
              Sök kurser
            </Link>
            <Link to="/MyProfile" className="nav-item nav-link">
              Min profil
            </Link>
            <Link
              to="/Channel"
              className="nav-item nav-link"
              onClick={(e) => handleChat(e)}
            >
              Chatt
            </Link>
            <Link
              to="/"
              className="nav-item nav-link"
              onClick={(e) => handleLogout(e)}
            >
              Logga ut{" "}
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
