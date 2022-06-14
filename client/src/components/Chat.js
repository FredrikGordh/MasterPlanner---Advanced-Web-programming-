import React, {useEffect, useState} from 'react'
// import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import io from 'socket.io-client';
import ScrollToBottom from "react-scroll-to-bottom";




function Chat ({socket, username, room}){
    const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const message = () => {
    // Write code for which every message will repeat it self
  }

  return (
    <div className="chat-window">
      <center>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              
              <div id={username === messageContent.author ? "you" : "other"} >
                <div class="message-row row col-12 ">
                  <div class="message-block row">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="portrait-message col-4 "></img>
                      <p class="message-text col-4">{messageContent.message}</p>
                      <div class="col-1 "id="time ">{messageContent.time}</div>
                  </div>

                  {/* 
                  <div className="message-content">
                    
                  </div>
                  
                  <p id="author ">{username === messageContent.author ? "" : messageContent.author }</p> */}

                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
      </center>
    </div>
  );
}

//     const {currentMessage, setCurrentMessage} =useState("")
//     const {messageList, setMessageList} = useState([])
    
//     const sendMessage = async () => {
//         if (currentMessage !== ""){
//             const MessageData = {
//                 room : room,
//                 author : username,
//                 message : currentMessage,
//                 time: 
//                     new Date(Date.now()).getHours() +
//                         ":" +
//                     new Date(Date.now()).getMinutes(),
//             } 
//             await socket.emit("send_message", MessageData)
//             setMessageList((list) => [...list, MessageData])
//             setCurrentMessage("")
//         }
//     }

//     useEffect(() => {
//         socket.on("receive_message", (data) => {
//             setMessageList((list) => [...list, data])
//             console.log(data)
//         })
//     }, [socket])


//     return(
//         <div>
//             <div className='chat-window'>
//                 <center>
//                     <div className="chat-header">
//                         <p>Live Chatt</p>
//                     </div>
//                     <div className="chat-body">
//                         {messageList.map((messageContent) => {
//                             return <h1>{messageContent.message}</h1>
//                         })}
//                     </div>
//                     <div className="chat-footer">
//                         <input 
//                         type="text" 
//                         placeholder="Skriv ditt meddelande..." 
//                         onChange={(event) => setCurrentMessage(event.target.value) }>
//                         </input>
//                         <button onClick={sendMessage}> Skicka</button>
//                     </div>
//                 </center>
//             </div>
//         </div>
//     )
// }

export default Chat; 

