import React, {useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import Chat from "./Chat.js"
import  "../App.css"
const socket = io.connect("http://localhost:8080")

function Channel (){
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")
    const [showChat, setShowChat] = useState(false)
    const [users, setUsers] = useState([]); 
    var allUsers = []
    const userList = document.getElementById("userList")
    
  

    const fetchItems = async() => {
        const data = await fetch('/Users'); 
        const users = await data.json(); 
        console.log(users); 
        setUsers(users); 
    }

    useEffect(() => {
        setUsername(sessionStorage.getItem('email'))

        // fetchItems()
        
        })

    const showUsers = () => {
        fetch("http://localhost:3000/Users", {
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            },
        

        })
        .then(response => response.json())
        .then(data => {
            allUsers = data.getAllUsers       

            
            var listOrder = 0
            
            for (var user of allUsers){
                var convContainer = document.getElementsByClassName("joinChatContainer")

                var listDiv = document.createElement("div")
                listDiv.setAttribute("class", "chat-list-div col-6 pl-0")

                var list = document.createElement("ul")
                list.setAttribute("class", "chat-list ")
                
                var img = document.createElement("img")
                img.src ="https://bootdey.com/img/Content/avatar/avatar7.png" 
                img.setAttribute("class", "portrait-conversation")
    
                var node = document.createTextNode(user.email)
                list.setAttribute("name", listOrder)

                convContainer[0].append(listDiv)
                listDiv.append(list)
                list.appendChild(img)
                list.appendChild(node)
                // listDiv.append(lineBreak)
                listOrder += 1
            }   
    })
}
    

    const joinRoom = () => {
        if (username !== "" && room !==""){
            socket.emit("join_room", room)
            setShowChat(true)
        }
    }
    return(
        <body class="body-chat-window">
                <div class="row">
                    <div class="joinChatContainer col-6">
                        <center>
                        <h1 >Join a chat</h1>
                        
                        <input type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value)}></input>
                        <button onClick={joinRoom}>Join a room</button>
                        <button onClick={showUsers}>fetching users</button>
                        <div class="class">
                            <input type="text" placeholder="Search for users" ></input>
                        </div>
                        <h1>Users: </h1>
                            {showUsers}    
                        </center>
                    </div>
                    
                    <div class="col-6">
                        {!showChat ? (
                        <center>  
                        <div class="col-6"> Ingen chatt</div>
                        </center>
                        ) : (
                            <center>
                            <Chat socket={socket} username={username} room={room}></Chat>
                            </center>
                        )}  
                    </div>
            </div>
        </body>
    )
}

export default Channel;