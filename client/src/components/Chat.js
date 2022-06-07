import React, {useEffect, useState, useRef} from 'react'
// import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import io from 'socket.io-client';




function Chat ({socket}){
    const [answer, setAnswer] = useState('');
    const [messageList, setMessageList] = useState([""]) 
    const [currentSocket, setCurrentSocket] = useState(null)



// Här ska svaret som skrivs in skickas till alla chattar, inklusive den egna användaren
    const sendMessage = async () => {
        if (answer !== ""){
            // Add this functionality later -->
            // const messageData ={
            //     author : username, 
            //     time :  new Date(Date.now()).getMinutes(),
            //     message : answer
            // }
        console.log('Inside handleSubmit, typed: ' + answer )
        await currentSocket.emit('message', answer);
        setAnswer('')
        document.getElementById("inputChat").value=''
        }
    }

    React.useEffect (() => {
        setCurrentSocket(socket)
        currentSocket.on('recieve_message', (msg) => {
            
            setMessageList((list) => [...list, msg])
            alert("this is the message List   " + messageList )
            return () => { socket.disconnect() }
        })
    },[])
    

    return(
   <body id="bodyChat">
    <center>
     <h2 >Chatta med dina vänner</h2>
    </center>
    <div id="messageContainer">
        {messageList.map((messageContent) => {
            return <h1>{messageContent.msg}</h1>
        })}
    </div>
    <form id="formChat" action="" >
      <input 
    name="answer"
    onChange={(event) => setAnswer(event.target.value)}
    // value={answer}
    id="inputChat" 
    label="answer"/>
      <button onClick={sendMessage}>Send</button>
    </form>

  </body>
)
}

export default Chat; 


        // socketRef.current = io("http://localhost:8080");
        // socketRef.current.on('connect', () => console.log('Client connected, socket id: ' + socket.id))
        // socketRef.current.on('message', (answer) => {
        //     setMessageList([...messageList, answer])
        //     socket.emit('message', answer)
        // })
        // socketRef.current.on('disconnect', () => console.log('Client disconnected'))