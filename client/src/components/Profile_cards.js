import React from 'react'

function Profile_cards (props){
    console.log(props)
    return(

    <div className= "card" style={{width: "300px", marginBottom: "20px"}}>
        <div className= "card-body">
            <div className="d-flex flex-column align-items-center text-center">
                <img src={props.imgUrl === null ? "https://bootdey.com/img/Content/avatar/avatar7.png" : props.imgUrl} alt="Admin" className="rounded-circle" width="150"/>
                <div className= "mt-3">
                    <p> {props.name}</p>
                    <p> {props.profileEmail}</p>
                    <p> {props.liuID}</p>
                    <p> {props.master}</p>
                    <button className= "btn btn-outline-info" onClick = {() => props.onClick(props.owner)}> Visa kurser </button>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Profile_cards;


                           