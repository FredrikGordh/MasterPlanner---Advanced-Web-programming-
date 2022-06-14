import React, {useEffect, useState} from 'react'
import { io } from 'socket.io-client'

import Chat from "./Chat.js"
import Channel from "./Channel.js"

const socket = io.connect("http://localhost:8080")

class ChatUI extends React.Component  (){
    render(){
    return(
        <div class="chatRow">
            <div class="col-6">
                <Channel/>  
            </div>
            <div class="col-6">
                <h1>Chat window</h1>
            </div>
            
        </div>
    )
}
}
export default ChatUI;