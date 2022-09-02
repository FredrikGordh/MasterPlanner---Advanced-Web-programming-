import React, {useState} from 'react';
import {ref, uploadBytes, getStorage, getDownloadURL} from "firebase/storage"
import {app} from "../firebase-config.js"


function UploadImg (props){

    const [editPicture, setEditPicture] = useState(false)
    const [imgRef, setImgRef] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [selectedFile, setSelectedFile] = useState()
    const [fallback, setFallback] = useState(false);
    
    const storage = getStorage(app)


    const reloadSrc = e => { 
        if(fallback){
          e.target.src = "https://bootdey.com/img/Content/avatar/avatar7.png";
        }else{
          e.target.src = props.imageUrl
          setFallback(true)
        }
      }

    const updateImageUrl = async (url)  => {
        console.log(props.imgUrl)
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
            console.log(data)
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
                props.setImageUrl(firebaseUrl)
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
            
            <img src={props.imageUrl} key="" id="profile-picture" alt="Admin" className="rounded-circle" width="150" onError={reloadSrc}/>
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
                                handleImageUpload(event) }} >Ladda upp</button>
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