import React, {useEffect, useState} from 'react' 
import {useNavigate} from 'react-router-dom';


/////////// Ändring från guide

import { AuthContext } from "../App.js";

export const LogIn = () => {
    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
      email: "",
      password: "",
      isSubmitting: false,
      errorMessage: null
    };

    const [data, setData] = React.useState(initialState);
    
    const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
}
////////////////////////
    useEffect (() => { 
        fetchItems(); 
    },[])

    const[email, setEmail] = useState('')
    const[body, setBody] = useState('')
    const[password, setPassword] = useState('')
    const[loginStatus, setLoginStatus] = useState(false)
    const[boolean, setBoolean] = useState(false)
    const[submit, setSubmit] = useState(false)
    const navigate= useNavigate();
    const [items, setItems] = useState([]); 


    const fetchItems = async() => {
        const data = await fetch('/LogIn'); 
        const items = await data.json(); 
        console.log(items); 
        setItems(items); 
        console.log("Data from login: " + items); 
    }

        const handleSubmit  = (e) => {
        e.preventDefault(); 


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
////////////////// Ändring från guide
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            throw res;
          })
          .then(resJson => {
            dispatch({
                type: "LOGIN",
                payload: resJson
            })
            navigate('/')
            alert('You are now Logged in!')

            // sessionStorage.setItem("token",  data.token);
            // console.log('token in session storage : ' + sessionStorage.getItem('token'))
        })
    

        .catch(error => {
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: error.message || error.statusText
            });
            });
          
        }

///////////////////

   
return(
<form style={{textAlign:"center"}}action="/action_page.php" onSubmit={(e) => handleSubmit(e)}>
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
    onChange={handleInputChange}
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
    onChange={ handleInputChange}
    id="pwd"/>
        </div>
    </div>
  </div>

     
  <button  type="submit" className="btn btn-primary" >Logga in</button>
</form>
)

}


export default LogIn






// .then(response => response.json())
// .then(data => {
//     fetchItems();

//     console.log('Authroization status: ' + data.auth)
//     if(data.auth){

        
//         setLoginStatus(true)
//         navigate('/')
//         alert('You are now Logged in!')


//     }else if (!data.auth){
//         setLoginStatus(false)
//         alert('Wrong password try again.')
        
//     }
// })

// .catch(error =>{
//     alert('error: ' + error)
// })
// }