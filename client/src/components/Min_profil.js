import React, {useEffect, useState} from 'react'

function Min_profil(){

    const [error, setError] = useState(false); 
    const [imgPreview, setImgPreview] = useState(null);
    const [edit, setEdit] = useState(true); 
    const [items, setItems] = useState([]); 
    const [display, setDisplay] = useState(false); 
    const [userInfo, setUserInfo] = useState(); 
    const fetchItems = async() => {
        const dataCourses = await fetch('/Mina_kurser'); 
        const courses = await dataCourses.json(); 
        setItems(courses); 
        const dataUserInfo = await fetch('/My_profile'); 
        const userInfo = await dataUserInfo.json(); 
        setUserInfo(userInfo); 
        setDisplay(false); 
    }

    useEffect(() => {
        fetchItems(); 
    }, []); 

   
    const handleImageChange = (e) => {
        const selected = e.target.files[0]; 
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"]; 
         if (selected && ALLOWED_TYPES.includes(selected.type)){
            let reader = new FileReader(); 
            reader.onloadend = () => {
                setImgPreview(reader.result);
            } 
            reader.readAsDataURL(selected);           
         }else{
             setError(true); 
         }
    }

    const handleEdit = (e) => {
        const button = document.getElementById("edit-button"); 
        let values = getValues(); 
        if (button.innerHTML === "Spara ändringar"){
            button.innerHTML = "Edit"; 
            fetch('http://localhost:3000/My_profile', {
                method: 'POST', 
                headers: {
                    'Content-Type':'application/json'
                }, 
                body: JSON.stringify(values)
            })
        }else{
            button.innerHTML = "Spara ändringar"; 
        }
    }


    function getValues(){
        const idList = ["Name", "ProfileEmail", "LiuID", "Master"]; 
        let values = []; 
        idList.forEach(id => {
            let input = document.getElementById(id+"-input"); 
            values.push(input.value); 
        })
        return values; 
    }

    function setValues(id){
            let input = document.getElementById(id+"-input");   
            if (edit && display && input !== null){
                return input.value; 
            }else if (userInfo !== undefined && !display && userInfo[0] !== undefined){
                return userInfo[0][id];
            }else if (userInfo !== undefined && userInfo[0] !== undefined){
                input.value = userInfo[0][id];
                return ''; 
            }
    }
    

    function editInfo(id){
        let div = document.getElementById(id); 
        if (edit){
            return "hidden"; 
        }else if (div !== null){
            return "text"; 
        }
    }


    return(
        <div className = "container" style={{marginTop: "10px"}}> 
            <div className = "main-body">
                <div class = "row gutters-sm"> 
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                                    <div class = "container">
                                        {error && <p className='errorMsg'> File not supported</p>}
                                    </div>
                                    <div className='imgPreview' style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : "#131313"}}>
                                        
                                        {!imgPreview && (
                                            <>
                                                <p> Add an image </p>
                                                <label htmlFor='fileUpload' className="customFileUpload"> Choose file</label>
                                                <input type="file" id = "fileUpload" onChange={handleImageChange}/>
                                            </>
                                        )}
                                        
                                    </div>
                                    {imgPreview && (
                                    <button onClick={() => setImgPreview(null)}>Remove image</button>
                                    )}
                                    <div class="mt-3">
                                        <h4>{setValues('Name')}</h4>
                                        <button class="btn btn-outline-primary">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class= "card mt-3">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                    <span class="text-secondary">https://bootdey.com</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                    <span class="text-secondary">bootdey</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                    <span class="text-secondary">@bootdey</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                    <span class="text-secondary">bootdey</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                    <span class="text-secondary">bootdey</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0"> Namn </h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "Name-div">
                                        {setValues('Name')}

                                        <input type = {editInfo('Name-div')} id = "Name-input"/>
                                    </div>
                                </div>
                                <hr class="border"/>
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "ProfileEmail-div">
                                        {setValues("ProfileEmail")}
                                        <input type = {editInfo()} id= "ProfileEmail-input"/>
                                    </div>
                                </div>
                                <hr class = "border"/>
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Liu-id</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "LiuID-div">
                                        {setValues("LiuID")}
                                        <input type ={editInfo()} id = "LiuID-input"/>
                                    </div>
                                </div>
                                <hr class="border"/>
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Master</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "Master-div">
                                        {setValues("Master")}
                                        <input type = {editInfo()} id = "Master-input"/>
                                    </div>
                                </div>
                                <div class="row" style={{ marginTop: "10px"}}>
                                    <div class="col-sm-12">
                                        <button class="btn btn-info" id = "edit-button" onClick={() => {setDisplay(true); handleEdit(); setEdit(!edit)}} style={{color: "white"}}>Edit</button>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div class="row gutters-sm">
                            <div class="col-md-12">
                                <div class="card mb-3" >
                                    <div class="card-body" style={{width: "100%", overflowX: "auto"}}>
                                        <table class="table align-middle mb-0 bg-white" style={{fontSize: "13px"}}>
                                            <thead class = "bg-light">
                                                <tr>
                                                    <th>Kurskod</th>
                                                    <th>Kursnamn</th>
                                                    <th>HP</th>
                                                    <th>Nivå</th>
                                                    <th>Block</th>
                                                    <th>Typ</th>
                                                    <th>VOF</th>
                                                    <th>Säsong</th>
                                                    <th>Period</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { 
                                                // Filtering searchbar
                                                items.map(item => (
                                                    <tr>
                                                        <td>{item.Kurskod}</td>
                                                        <td>{item.Kursnamn}</td>
                                                        <td align='center'>{item.HP}</td>
                                                        <td align='center'>{item.Nivå}</td>
                                                        <td align='center'>{item.Block}</td>
                                                        <td>{item.typ}</td>
                                                        <td align='center'>{item.VOF}</td>
                                                        <td>{item.Säsong}</td>
                                                        <td align='center'>{item.Period}</td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    
    )


}

export default Min_profil; 