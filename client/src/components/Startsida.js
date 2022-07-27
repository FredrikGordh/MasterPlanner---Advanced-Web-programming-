
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom'; 
import {ref, uploadBytes, getStorage, getDownloadURL} from "firebase/storage"
import {app} from "../firebase-config.js"


function Startsida(){

    const location = useLocation(); 
    const [usersInfo, setUsersInfo] = useState([]); 
    const [allUsernames, setAllUsernames] = useState([])
    const [owner, setOwner] = useState(); 
    const [course, setCourses] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [imageUrlList, setImageUrlList] = useState([])

    const navigate = useNavigate(); 
    const storage = getStorage(app)

    const fetchItems = async() => {
        const userData = await fetch('/Startsida'); 
        const all_usernamesData = await fetch ("/AllUsers")
        const all_usernames = await all_usernamesData.json()
        const user_info = await userData.json(); 
        setUsersInfo(user_info); 
        setAllUsernames(all_usernames.getAllUsers)
        console.log("Userinfo list")
        console.log(user_info)
        fetchProfileImages()
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

    const fetchProfileImages = () => {

        usersInfo.map(user => {
            console.log(user)
            const imageRef = ref(storage , 'images/users/' + user.email + '/' + user.email)
        })
        // allUsernames.map(user => {
        //     console.log(user.email)
        //     const imageRef = ref(storage , 'images/users/' + user.email + '/' + user.email)
            
        //     getDownloadURL(imageRef).then((downloadedURL) => {
        //         // `url` is the download URL for 'images/stars.jpg'
        //         console.log(user.email)
        //         console.log(downloadedURL)
        //         setImageUrlList((prev) => [...prev, downloadedURL])
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         // Handle any errors
        //     });
        // }) 
        
    }


    // const getOldConversation = async () => { 
    //     const dbRef = ref(database, '/messages/' + username + '/' + chatFriend)
    //       onValue(dbRef, (snapshot) => {
      
    //         if(snapshot.exists()){
    //           let records = []
    //             snapshot.forEach(childSnapshot => {
    //               let data = childSnapshot.val()
    //               records.push(data)
    //           })
    //           console.log("records")
    //           console.log(records)
    //           console.log(conversationList)
    //         setConversationList(records)
    //         }else{
    //           console.log("there is no old conversation")
    //         }
    //       })
    //     }
   
    if (usersInfo.length > 0){
        return (
            <form onSubmit={handleCourses}>
                <div id = "background"> 
                    <h3 id = "Welcome-header"> Välkommen till MasterPlanner</h3>
                    <button class="btn btn-info" onClick={() => buttonAction()}> {displayButton()}</button>
                </div>                 
                <div className="container" style={{marginTop: "30px"}}> 
                    <div class="form-outline" style={{marginBottom: "20px", display: "flex", justifyContent: "center"}}>
                        <input type="search" id="form1" class="form-control" onChange={event => {setSearchTerm(event.target.value)}} style={{marginLeft: "10px", width: "80%"}} placeholder="Sök användare/inriktning" aria-label="Search" />
                    </div>

                    <div className= "main-body">
                        <div class="col"> 
                            <div class ="row" style={{display: "flex", justifyContent: "space-evenly"}}>
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
                                <div class= "card" style={{width: "300px", marginBottom: "20px"}}>
                                    <div class= "card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img src={user.imgUrl === null ? "https://bootdey.com/img/Content/avatar/avatar7.png" : user.imgUrl} alt="Admin" class="rounded-circle" width="150"/>
                                            <div class= "mt-3">
                                                <p> {user.Name}</p>
                                                <p> {user.ProfileEmail}</p>
                                                <p> {user.LiuID}</p>
                                                <p> {user.Master}</p>
                                                <button class= "btn btn-outline-info" onClick = {() => {setOwner(user.Owner)}}> Visa kurser </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                <button class="btn btn-outline-dark" onClick={() => navigate('/Signin')}> Bli medlem </button>
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
