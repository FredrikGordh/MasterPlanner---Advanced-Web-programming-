import React, {useEffect, useState, useContext} from 'react'
import Chat from "./Chat.js"
import "../App.css"
import { SocketContext } from '../context/socket.js'


function Channel (){
    const socket = useContext(SocketContext)
    const [username, setUsername] = useState("")
    const [chatFriend, setChatFriend] = useState("")
    const [showChat, setShowChat] = useState(false)
    const [onlineUsers, setOnlineUsers] = useState([])

    // Fetching online users through socket and api list
    useEffect (() => {
        setUsername(sessionStorage.getItem('email'))
        socket.on("getUsers", users =>{
            setOnlineUsers(users)
        })
    }, [])
    
    // Adding current user to list of online users in api list through socket
    useEffect(() => {
        socket.emit("addUser", username)    
    }, [username])
    
    // Functionality for joining a new conversation
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