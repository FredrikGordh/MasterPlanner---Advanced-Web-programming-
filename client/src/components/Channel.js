import React, {useEffect, useState, useRef} from 'react'
import { io } from 'socket.io-client'
import Chat from "./Chat.js"
const socket = io.connect("http://localhost:8080")

function Channel (){
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")
    const [showChat, setShowChat] = useState(false)

    const joinRoom = () => {
        if (username !== "" && room !==""){
            socket.emit("join_room", room)
            setShowChat(true)
        }
    }
    return(
        
      <div >    
          {!showChat ? (  
            <div className='joinChatContaier'>
            <center>
            <h1 >Join a chat</h1>
            <input type="text" placeholder="Smeknamn" onChange={(event) => setUsername(event.target.value)}></input>
            <input type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value)}></input>
            <button onClick={joinRoom}>Join a room</button>
            </center>
            </div>
            ) : (
            <Chat socket={socket} username={username} room={room}></Chat>
            )}
        </div>
            
    )
}

export default Channel