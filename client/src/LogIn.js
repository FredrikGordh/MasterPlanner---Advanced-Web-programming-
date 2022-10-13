import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Creates a logIn component and a login view
export const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Adds the user to the database email and password.
  const handleUser = (data) => {
    fetch("http://localhost:3000/Mina_kurser/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    fetch("http://localhost:3000/My_profile/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  // Sends the userdata through a POST request to the server. 
  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = { email, password };
    fetch("http://localhost:3000/LogIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.auth) {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("email", data.email);
          handleUser(myData);
          navigate("/", {
            state: {
              id: data.email,
            },
          });
          window.location.reload();
        } else if (!data.auth) {
          alert("Wrong password try again.");
        }
      })
      .catch((error) => {
        alert("error: " + error);
      });
  };

  return (
    <form
      style={{ textAlign: "center" }}
      action="/action_page.php"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1>Logga In</h1>
      <div className="form-group r">
        <div className="row d-flex justify-content-center">
          <label>E-post:</label>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4 d-flex justify-content-center">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
        </div>
      </div>
      <div className="form-group ">
        <div className="row row d-flex justify-content-center">
          <label>Lösenord:</label>
        </div>
        <div className="row row d-flex justify-content-center">
          <div className="col-4" style={{ textAlign: "center" }}>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              id="pwd"
            />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Logga in
      </button>
    </form>
  );
};

export default LogIn;
