import React, {useEffect, useState} from 'react';
import {ref, uploadBytes, getStorage, getDownloadURL} from "firebase/storage"
import {app} from "../firebase-config.js"
import {useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function UploadImg (props){

    const [editPicture, setEditPicture] = useState(false)
    const [imgRef, setImgRef] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [selectedFile, setSelectedFile] = useState()

    const storage = getStorage(app)

    const navigate= useNavigate();

    useEffect(() => {
        updateImage()
        console.log("database url: ")
        console.log(props.imageUrl)
        
    }) 


    const updateImage =  () => {

        let profilePicture = document.getElementById("profile-picture")

        if(props.imageUrl == null){
            profilePicture.setAttribute('src', "https://bootdey.com/img/Content/avatar/avatar7.png")
            
        }else {
            profilePicture.setAttribute('src', props.imageUrl)
            profilePicture.setAttribute('key', props.imageUrl)
           
        }
        // navigate('/Min_profil') 

    }

    const updateImageUrl = async (url)  => {
        
        fetch('http://localhost:3000/Update_image', {
            method: 'POST', 
            headers: {
                'Content-Type':'application/json'
            }, 
            body: JSON.stringify({
                imgURL: url,
                username: props.username
            })
        })
        .then((response) => response.json())
        .then((data) =>  {
            props.setImageUrl(data[0].imgUrl)
        }) 
        
    }

    const handleImageChange = (event) => {
        setSelectedFile(event.target.files[0])
        setIsSelected(true)
    }

    const handleImageUpload =  (e) => {
        e.preventDefault()
        if (selectedFile == null) return;
        const imageRef = ref(storage , 'images/users/' + props.username + '/' + props.username)
        setImgRef(imageRef)
        uploadBytes(imageRef, selectedFile).then(() => {
        })
        .catch((error) => alert(error) )

        getDownloadURL(imageRef).then((downloadedURL) => {
            updateImageUrl(downloadedURL)
            console.log("firebase url:")
            console.log(downloadedURL)
            
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return(
        <div className="card">
        <div className="card-body">
            
            <div className="d-flex flex-column align-items-center text-center">
            
            <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"} key="" id="profile-picture" alt="Admin" className="rounded-circle" width="150"/>
                    <h4>{props.setValues('Name')}</h4>
                    {editPicture ? 
                    (  
                        
                            <form className="photo-form"action="/action_page.php" >
                                <div className="row justify-content-center mb-2">
                                    <input className="col-10 " type="file" id="myFile" name="filename" onChange={(event) => {handleImageChange(event)}}/>
                                </div>
                                
                                <div className="row justify-content-center">
                                    <button className="btn btn-outline-primary" onClick={(event) => {setEditPicture(false) 
                                handleImageUpload(event)}} >Ladda upp</button>
                                </div>
                            </form>
                            
                        
                    )
                     : (<button className="btn btn-outline-primary" onClick={() => {setEditPicture(true)}} >Edit photo</button>
                    )}
            </div>
        </div>
    </div>

    )
}


export default UploadImg;