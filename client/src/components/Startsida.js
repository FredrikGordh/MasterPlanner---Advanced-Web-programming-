
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Startsida(){
    const [users, setUsers] = useState([]); 
    const [owner, setOwner] = useState(); 
    const [course, setCourses] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const navigate = useNavigate(); 
    const fetchItems = async() => {
        const userData = await fetch('/Startsida'); 
        const user = await userData.json(); 
        setUsers(user); 

    }

    useEffect(() => {
        fetchItems(); 
    }, []); 

    const handleCourses = async(e) => {
        e.preventDefault(); 
        console.log(JSON.stringify(owner)); 
        const dataCourses = await fetch(`/Startsida/${owner}`); 
        const userCourses = await dataCourses.json(); 
        setCourses(userCourses); 
        users.map(user => {
            if (user.Owner === owner){
                navigate('/Profiles', 
                {
                    state: {
                            id: owner, 
                            ProfileEmail: user.ProfileEmail, 
                            Name: user.Name, 
                            LiuID: user.LiuID, 
                            Master: user.Master
                }}); 
            }
        })
    }

   
    if (users.length > 0){
        return (
            <form onSubmit={handleCourses}>
                <div id = "background"> 
                    <h3> Välkommen till MasterPlanner</h3>
                    <button class="btn btn-outline-dark" onClick={() => navigate('/Signin')}> Bli medlem </button>
                </div>                 
                <div className="container" style={{marginTop: "30px"}}> 
                    <div id = "input-field"> 
                        <input type= "search" id="search" placeholder="Sök användare" onChange={event => {setSearchTerm(event.target.value)}} style={{marginLeft: "10px"}}/>
                    </div>
                    <div className= "main-body">
                        <div class="row gutters-sm"> 
                            <div class ="col-md-12 mb-3" style= {{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                {
                                users.filter((val) =>{
                                if (searchTerm === "") {
                                    return val
                                }else if (val.Name !== null && val.Name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }else if (val.Master !== null && val.Master.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }
                                }).map(user => {
                                    return (
                                <div class= "card" style={{width: "300px"}}>
                                    <div class= "card-body" >
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                                            <div class= "mt-3">
                                                <p> {user.Name}</p>
                                                <p> {user.ProfileEmail}</p>
                                                <p> {user.LiuID}</p>
                                                <p> {user.Master}</p>
                                                <button onClick = {() => {setOwner(user.Owner)}}> Visa kurser </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Startsida; 
