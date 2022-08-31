import React, {useEffect, useState} from 'react';
import {ref, uploadBytes, getStorage, getDownloadURL} from "firebase/storage"
import {app} from "../firebase-config.js"
import CourseTables from './CourseTables.js';
import UploadImg from './UploadImg.js';


function MyProfile(){

    
    const [username, setUsername] = useState('')
    const [edit, setEdit] = useState(true); 
    const [items, setItems] = useState([]); 
    const [display, setDisplay] = useState(false); 
    const [userInfo, setUserInfo] = useState(); 
    const [editPicture, setEditPicture] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const [selectedFile, setSelectedFile] = useState()
    const [imgRef, setImgRef] = useState()
    const [imageUrl, setImageUrl] = useState()


    const storage = getStorage(app)



    const fetchItems = async() => {
        const dataCourses = await fetch('/Mina_kurser'); 
        const courses = await dataCourses.json(); 
        setItems(courses); 
        const dataUserInfo = await fetch('/My_profile'); 
        const userInfo = await dataUserInfo.json(); 
        
        if(userInfo.length != 0){
            setImageUrl(userInfo[0].imgUrl)
        }
        setUserInfo(userInfo); 
        setDisplay(false); 
    }


    useEffect(() => {
        fetchItems(); 
        setUsername(sessionStorage.getItem('email'))
        console.log(userInfo)
    }, []); 

    useEffect(() => {
        console.log("nu ändras image url")
        console.log(imageUrl)
    }, [imageUrl])

    const handleEdit = (e) => {
        const button = document.getElementById("edit-button"); 
        let values = getValues(); 
        console.log("data: ")
        if (button.innerHTML === "Spara ändringar"){
            button.innerHTML = "Edit"; 
            fetch('http://localhost:3000/My_profile', {
                method: 'POST', 
                headers: {
                    'Content-Type':'application/json'
                }, 
                body: JSON.stringify(values)
            })
            .then((response) => response.json())
            .then((data) => console.log(data)) 

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
        if (imageUrl == null){
            values.push("https://bootdey.com/img/Content/avatar/avatar7.png")
        }else {
            values.push(imageUrl)
        }
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
                <div className = "row gutters-sm"> 
                    <div className="col-md-4 mb-3">
                        <UploadImg  setValues={setValues} setImageUrl={setImageUrl} imageUrl={imageUrl} username={username} ></UploadImg>

                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"> Namn </h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary" id = "Name-div">
                                        {setValues('Name')}

                                        <input type = {editInfo('Name-div')} id = "Name-input"/>
                                    </div>
                                </div>
                                <hr className="border"/>
                                <div className="row"> 
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary" id = "ProfileEmail-div">
                                        {setValues("ProfileEmail")}
                                        <input type = {editInfo()} id= "ProfileEmail-input"/>
                                    </div>
                                </div>
                                <hr className = "border"/>
                                <div className="row"> 
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Liu-id</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary" id = "LiuID-div">
                                        {setValues("LiuID")}
                                        <input type ={editInfo()} id = "LiuID-input"/>
                                    </div>
                                </div>
                                <hr className="border"/>
                                <div className="row"> 
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Master</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary" id = "Master-div">
                                        {setValues("Master")}
                                        <input type = {editInfo()} id = "Master-input"/>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "10px"}}>
                                    <div className="col-sm-12">
                                        <button className="btn btn-info" id = "edit-button" onClick={() => {setDisplay(true); handleEdit(); setEdit(!edit)}} style={{color: "white"}}>Edit</button>
                                    </div>
                                </div>                                
                            </div>
                        </div>

                        <div className="row gutters-sm">
                            <div className="col-md-12">
                                <div className="card mb-3" >
                                    <div className="card-body" style={{width: "100%", overflowX: "auto"}}>
                                    <CourseTables type={"myProfile"}  courses={items}></CourseTables>
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

export default MyProfile; 
