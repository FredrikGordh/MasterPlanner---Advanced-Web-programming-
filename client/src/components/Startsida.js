
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom'; 
import {ref, uploadBytes, getStorage, getDownloadURL} from "firebase/storage"
import {app} from "../firebase-config.js"
import ProfileCards from './ProfileCards.js';


function Startsida(){

    const location = useLocation(); 
    const [usersInfo, setUsersInfo] = useState([]); 
    const [allUsernames, setAllUsernames] = useState([])
    const [owner, setOwner] = useState(); 
    const [course, setCourses] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 

    const navigate = useNavigate(); 
    const storage = getStorage(app)

    const fetchItems = async() => {
        const userData = await fetch('/Users/Fetch_all_userinfo'); 
        const all_usernamesData = await fetch ("/Users/Fetch_all_usernames")
        const all_usernames = await all_usernamesData.json()
        const user_info = await userData.json(); 
        setUsersInfo(user_info); 
        setAllUsernames(all_usernames.getAllUsers)
        console.log("Userinfo list")
        console.log(user_info)
    }

    

    useEffect(() => {
        fetchItems(); 
    }, []); 

    const handleCourses = async(e) => {
        e.preventDefault(); 

        const dataCourses = await fetch(`/Startsida/${owner}`); 
        const userCourses = await dataCourses.json(); 
        setCourses(userCourses); 
        usersInfo.map(user => {
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

    function displayButton(){
        const holder = location.state; 
        const element = document.getElementById("Welcome-header"); 
        if (holder !== null){
            if (element !== null){
                element.textContent = "Välkommen till MasterPlanner " + holder.id
            }
            return "Lägg till kurser";
        }else{

            if (element !== null){
                element.textContent = "Välkommen till MasterPlanner"
            }

            return "Bli medlem";
        }
    }

    function buttonAction(){
        const holder = location.state; 
        if (holder !== null){
            navigate('/Sok_kurser'); 
        }else{
            navigate('/SignIn')
        }
    }


   
    if (usersInfo.length > 0){
        return (
            <form onSubmit={handleCourses}>
                <div id = "background"> 
                    <h3 id = "Welcome-header"> Välkommen till MasterPlanner</h3>
                    <button className="btn btn-info" onClick={() => buttonAction()}> {displayButton()}</button>
                </div>                 
                <div className="container" style={{marginTop: "30px"}}> 
                    <div className="form-outline" style={{marginBottom: "20px", display: "flex", justifyContent: "center"}}>
                        <input type="search" id="form1" className="form-control" onChange={event => {setSearchTerm(event.target.value)}} style={{marginLeft: "10px", width: "80%"}} placeholder="Sök användare/inriktning" aria-label="Search" />
                    </div>

                    <div className= "main-body">
                        <div className="col"> 
                            <div className ="row" style={{display: "flex", justifyContent: "space-evenly"}}>
                                {
                                
                                usersInfo.filter((val) =>{
                                if (searchTerm === "") {
                                    return val
                                }else if (val.Name !== null && val.Name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }else if (val.Master !== null && val.Master.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }
                                }).map(user => {
                                    return (
                                <ProfileCards  name={user.Name}
                                profileEmail={user.ProfileEmail}
                                liuID = {user.LiuID}
                                master={user.Master} 
                                imgUrl = {user.imgUrl} 
                                owner = {user.Owner} 
                                onClick={(value) => {setOwner(value)}}>

                                </ProfileCards>
                                )
                                })
                            }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }else{
        return(
        <form onSubmit={handleCourses}>
            <div id = "background"> 
                <h3> Välkommen till MasterPlanner</h3>
                <button className="btn btn-outline-dark" onClick={() => navigate('/Signin')}> Bli medlem </button>
            </div>                 
            <div className="container" style={{marginTop: "30px"}}> 
                <div id = "input-field"> 
                    <input type= "search" id="search" placeholder="Sök användare" onChange={event => {setSearchTerm(event.target.value)}} style={{marginLeft: "10px"}}/>
                </div>
            </div> 
        </form>
        )

    }
}

export default Startsida; 
