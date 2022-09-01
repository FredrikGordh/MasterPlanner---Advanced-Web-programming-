import React, {useEffect, useState} from 'react';
import {ref, uploadBytes, getStorage, getDownloadURL} from "firebase/storage"
import {app} from "../firebase-config.js"
import {useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function UploadImg (props){

    const [editPicture, setEditPicture] = useState(false)
    const [imgRef, setImgRef] = useState()
    const [url, setUrl] = useState("https://bootdey.com/img/Content/avatar/avatar7.png")
    const [image, setImage] = useState(null)

    const allInputs = {imgUrl: ''}

    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    const [isSelected, setIsSelected] = useState(false)
    const [selectedFile, setSelectedFile] = useState()
    const [update, setUpdate] = useState("")
    const [fallback, setFallback] = useState(false);
    

    const storage = getStorage(app)

    const navigate= useNavigate();

    useEffect(() => {
        updateImage()
        console.log("database url: ")
        console.log(imageAsUrl)
        
    },[imageAsUrl]) 

    const reloadSrc = e => { 
        if(fallback){
          e.target.src = "https://bootdey.com/img/Content/avatar/avatar7.png";
        }else{
          e.target.src = props.imageUrl
          setFallback(true)
        }
      }


    const updateImage =  () => {

        let profilePicture = document.getElementById("profile-picture")

        if(props.imageUrl == null){
            profilePicture.setAttribute('src', "https://bootdey.com/img/Content/avatar/avatar7.png")
            
        }else {
            // profilePicture.setAttribute('src', "")
            profilePicture.setAttribute('src', imageAsUrl.imgUrl)
            // profilePicture.setAttribute('key', props.imageUrl)
           
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

    const handleImageUpload =  async (e) => {
        console.log(selectedFile)
        e.preventDefault()
        if (selectedFile == null) return;
        const imageRef = ref(storage , 'images/users/' + props.username + '/' + props.username)
        setImgRef(imageRef)

        uploadBytes(imageRef, selectedFile).then(() => {    
            getDownloadURL(imageRef)
            .then((firebaseUrl) => {
                setUrl(firebaseUrl)
                updateImageUrl(firebaseUrl)
            })
            .catch((error) => {
                console.log(error, "error getting the image url")
            });
            setSelectedFile(null)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return(
        <div className="card">
        <div className="card-body">
            
            <div className="d-flex flex-column align-items-center text-center">
            
            <img src={url} key="" id="profile-picture" alt="Admin" className="rounded-circle" width="150" onError={reloadSrc}/>
                    <h4>{props.setValues('Name')}</h4>
                    {editPicture ? 
                    (  
                        
                            <form className="photo-form"action="/action_page.php" >
                                <div className="row justify-content-center mb-2">
                                    <input className="col-10 " type="file" id="myFile" name="filename" onChange={(event) => {handleImageChange(event)}}/>
                                </div>
                                
                                <div className="row justify-content-center">
                                    <button className="btn btn-outline-primary" onClick={(event) => {
                                    
                                setEditPicture(false) 
                                handleImageUpload(event) 
                                setUpdate(0)}} >Ladda upp</button>
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