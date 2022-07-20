import React, {useEffect, useState, useContext} from 'react'
import { io } from 'socket.io-client'
import Chat from "./Chat.js"
import  "../App.css"
import { SocketContext } from '../context/socket.js'

// const socket = io.connect("http://localhost:8080")

function Channel (){
    const socket = useContext(SocketContext)
    const [username, setUsername] = useState("")
    const [chatFriend, setChatFriend] = useState("")
    const [showChat, setShowChat] = useState(false)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])
    
    // var allUsers = []

    useEffect (() => {
        // socket = io.connect("http://localhost:8080")
        console.log("socket:")
        console.log(socket)
        setUsername(sessionStorage.getItem('email'))
        console.log("körs denna en gång?")
        socket.on("getUsers", users =>{
            console.log("this are the online users")
            console.log(users)
            setOnlineUsers(users)
            // displayUsers(users)
        })
    }, [])
    
    useEffect(() => {
        socket.emit("addUser", username)
        
    }, [username])
    
    useEffect(() => {
        joinConversation()
    },[chatFriend])



    const joinConversation = () => {
        if (username !== "" && chatFriend !==""){
            setShowChat(true)
        }
    }
    return(
        <body class="body-chat-window">
                <div class="row">
                    <div class="joinChatContainer col-4">
                        
                        <h3 class="headline-chat">Chattar</h3>
                        <center>
                            {onlineUsers.map((users,index) => {
                                if (users.username == username){
                                    {console.log("Denna user ska inte läggas till " + users.username)}
                                }else{
                            return(
                                <div class="chat-list-div col-12" > 
                                    <ul class="chat-list-object" id={index} onClick={() => {
                                        setChatFriend(document.getElementById(index).textContent)
                                    }}>
                                        <img class="portrait-conversation " src ="https://bootdey.com/img/Content/avatar/avatar7.png" ></img>
                                        {users.username}
                                    </ul>
                                </div>
                            )}
                            })
                            }
                        

                        </center>
                    </div>
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
            
        </body>
    )
}

export default Channel;