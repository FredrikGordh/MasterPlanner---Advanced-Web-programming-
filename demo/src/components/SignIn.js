// import React, {useEffect, useState} from 'react' 
// import {Link} from 'react-router-dom'; 



function SignIn(){
return(
<form style={{textAlign:"center"}}action="/action_page.php">
    <h1>Bli medlem</h1>
  <div class="form-group r">
      <div class="row d-flex justify-content-center">
    <label for="email">E-post:</label>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-4 d-flex justify-content-center">
    <input   type="email" class="form-control" placeholder="Enter email" id="email"/>
    </div>
    </div>
  </div>
  <div class="form-group ">
    <div class="row row d-flex justify-content-center">
    <label for="pwd">Lösenord:</label>
    </div>
    <div class="row row d-flex justify-content-center">
        <div class="col-4" style={{textAlign:"center"}}>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
        </div>
    </div>
  </div>

  <button type="submit" class="btn btn-primary" >Bli medlem</button>
</form>
)

}

export default SignIn

