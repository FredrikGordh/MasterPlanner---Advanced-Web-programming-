import React, {useEffect, useState} from 'react';
import {ref, uploadBytes, getStorage, getDownloadURL} from "firebase/storage"
import {app} from "../firebase-config.js"

function UploadImg (props){

    const [editPicture, setEditPicture] = useState(false)
    const [imgRef, setImgRef] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [selectedFile, setSelectedFile] = useState()

    const storage = getStorage(app)

    useEffect(() => {
        console.log("image url i upload component " + props.imageUrl)

    }, [props.imageUrl]) 

    const updateImageUrl = async (url) => {
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
        .then((data) =>  {console.log(data)}) 
    }

    const handleImageChange = (event) => {
        setSelectedFile(event.target.files[0])
        console.log(event.target.files[0])
        setIsSelected(true)
    }

    const handleImageUpload = (e) => {
        let imageURL = ''
        
        e.preventDefault()
        if (selectedFile == null) return;
        const imageRef = ref(storage , 'images/users/' + props.username + '/' + props.username)
        setImgRef(imageRef)
        uploadBytes(imageRef, selectedFile).then(() => {
        })
        .catch((error) => alert(error) )

        getDownloadURL(imageRef).then((downloadedURL) => {
            props.setImageUrl(downloadedURL)
            imageURL=downloadedURL
            console.log(downloadedURL)
            updateImageUrl(downloadedURL)
            
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return(
        <div className="card">
        <div className="card-body">
            
            <div className="d-flex flex-column align-items-center text-center">
            {props.imageUrl == null? 
                (<img src={"https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" className="rounded-circle" width="150"/>)
                :
                ( <img src={props.imageUrl} alt="Admin" className="rounded-circle" width="150"/>)}
               
                    <h4>{props.setValues('Name')}</h4>
                    {editPicture ? 
                    (  
                        
                            <form className="photo-form"action="/action_page.php" onSubmit={(event) => {setEditPicture(false) 
                                handleImageUpload(event)
                                }}>
                                <div className="row justify-content-center mb-2">
                                    <input className="col-10 " type="file" id="myFile" name="filename" onChange={(event) => {handleImageChange(event)}}/>
                                </div>
                                
                                <div className="row justify-content-center">
                                    <button className="btn btn-outline-primary" type ="submit" >Ladda upp</button>
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