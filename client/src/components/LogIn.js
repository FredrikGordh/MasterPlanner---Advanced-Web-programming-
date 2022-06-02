import React, {useEffect, useState} from 'react' 
import {useNavigate} from 'react-router-dom';




export const LogIn = ( props ) => {
    


    useEffect (() => { 
        fetchItems(); 
 
    },[])

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[loginStatus, setLoginStatus] = useState(false)
    const navigate= useNavigate();
    const [items, setItems] = useState([]); 


    const fetchItems = async() => {
        const data = await fetch('/LogIn'); 
        const items = await data.json(); 
        console.log(items); 
        setItems(items); 
    }

    const handleUser = (data) => {
        fetch('http://localhost:3000/Mina_kurser/user',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })

        fetch('http://localhost:3000/My_profile/user',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
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
        .then(response => response.json())
        .then(data => {
            fetchItems();

        if(data.auth){

            sessionStorage.setItem("token", data.token);
            setLoginStatus(true)
            handleUser(myData); 
            navigate('/', 
            {
                state: {
                        id: data.email 
            }}); 
            window.location.reload();

        }else if (!data.auth){
            setLoginStatus(false); 
            alert('Wrong password try again.'); 
            
        }
})

.catch(error =>{
    alert('error: ' + error)
})
}



   
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
    onChange={(e) => setEmail(e.target.value)}
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
    onChange={(e) => setPassword(e.target.value) }
    id="pwd"/>
        </div>
    </div>
  </div>

  <button  type="submit" className="btn btn-primary" >Logga in</button>
</form>
)

}


export default LogIn;







