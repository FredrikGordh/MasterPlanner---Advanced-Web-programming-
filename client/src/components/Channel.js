import React, {useEffect, useState, useRef} from 'react'
import { io } from 'socket.io-client'
import Chat from "./Chat.js"
import  "../App.css"

// const socket = io.connect("http://localhost:8080")

function Channel (){
    const socket = useRef()
    const [username, setUsername] = useState("")
    const [chatFriend, setChatFriend] = useState("")
    const [showChat, setShowChat] = useState(false)
    
    var allUsers = []

    useEffect (() => {
        socket.current = io.connect("http://localhost:8080")
        setUsername(sessionStorage.getItem('email'))
        showUsers()
    }, [])
    
    useEffect(() => {
        socket.current.emit("addUser", username)
        socket.current.on("getUsers", users =>{
            console.log(users)
        })
    }, [username])
    
    useEffect(() => {
        joinConversation()
    },[chatFriend])



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

                if (user.email == sessionStorage.getItem('email')){
                    console.log(user.email+ " will not be added to the list")
                }else{
                var convContainer = document.getElementsByClassName("joinChatContainer")

                var listDiv = document.createElement("div")
                listDiv.setAttribute("class", "chat-list-div col-12 ")

                var list = document.createElement("ul")
                list.setAttribute("class", "chat-list-object ")
                list.setAttribute("id", listOrder)
                

                var img = document.createElement("img")
                img.src ="https://bootdey.com/img/Content/avatar/avatar7.png" 
                img.setAttribute("class", "portrait-conversation")
    
                var node = document.createTextNode(user.email)
                
                
                convContainer[0].append(listDiv)
                listDiv.append(list)
                
                list.appendChild(img)
                list.appendChild(node)


                list.addEventListener('click', function handleClick () {
                    setChatFriend(document.getElementById(this.id).textContent)
                    
                    
                });
                listOrder += 1
            }
            }   
    })
}

    

    const joinConversation = () => {
        // console.log("username: " + username + "  chatfriend: " + chatFriend)
        if (username !== "" && chatFriend !==""){
            // socket.current.emit("join_conversation", chatFriend)
            setShowChat(true)
        }
    }
    return(
        <body class="body-chat-window">
                <div class="row">
                    <div class="joinChatContainer col-4">
                        <center>
                        <h1 >Join a chat</h1>
                        <div class="class">
                            <input type="text" placeholder="Search for users" ></input>
                        </div>
                        <h1>Users: </h1>

                        </center>
                    </div>
                    
                    <div class="message-container col-8">
                        {!showChat ? (
                        <center>  
                        <div class="col-6"> {chatFriend}</div>
                        </center>
                        ) : (
                            <center>
                            <Chat socket={socket} username={username} chatFriend = {chatFriend} ></Chat>
                            </center>
                        )}  
                    </div>
            </div>
        </body>
    )
}

export default Channel;