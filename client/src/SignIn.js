import React, {useState} from 'react' 
import {useNavigate} from 'react-router-dom';


function SignIn(){
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate= useNavigate()

        // Functionality after pushing submit
      const handleSubmit = (e) =>{
            e.preventDefault();

            
            alert('Congratulations! You have now created a user, and can now log into your user ')
            navigate('/')
            const myData = {email, password}

            // Sending userdata through a POST request to server
            fetch('http://localhost:3000/SignIn',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(myData)
                
            }).then(() => {                
            })
        }

return(
<form style={{textAlign:"center"}}action="/action_page.php" onSubmit={handleSubmit}>
    <h1>Bli medlem</h1>
  <div className="form-group r">
      <div className="row d-flex justify-content-center">
    <label >E-post:</label>
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
    <label >Lösenord:</label>
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

     
  <button  type="submit" className="btn btn-primary" >Bli medlem</button>
</form>
)

}




export default SignIn