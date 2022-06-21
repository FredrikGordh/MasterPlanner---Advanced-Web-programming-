import React, {useEffect, useState} from 'react'
// import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import io from 'socket.io-client';
import ScrollToBottom from "react-scroll-to-bottom";





function Chat ({socket, username, chatFriend}){
  const [currentMessage, setCurrentMessage] = useState("");
  const [conversationList, setconversationList] = useState([]);
  const [currentChatFriend, setCurrentChatFriend] = useState("");
  
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        author: username,
        chatFriend: currentChatFriend,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setconversationList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect( () => {
    setCurrentChatFriend(chatFriend)
  }, [chatFriend])

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setconversationList((list) => [...list, data]);
    });
  }, [socket]);


  return (
    <div className="chat-window">
      <center>
      <div className="chat-header">
        <p>{chatFriend}</p>
      </div>
      <ScrollToBottom className="message-dialog">
        {conversationList.map((messageContent) => {
          return (
            
            <div id={username === messageContent.author ? "you" : "other"} >
              <div class="message-row row col-12 ">
                <div class="row">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="portrait-message "></img>
                    <p class="message-text col-4">{messageContent.message}</p>
                    <div class="time col-1">{messageContent.time}</div>
                </div>
              </div>
            </div>
          );
        })}
      </ ScrollToBottom>
      <div className="chat-footer">
        <div class="chat-input-row row">
          <textarea
            class="chat-input col-8"
            type="text"
            value={currentMessage}
            placeholder="Skriv ett meddelande..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button class="btn btn-chat col-1 " onClick={sendMessage}><i class="bi bi-send-fill"></i></button>
        </div>
      </div>
      </center>
    </div>
  );
}


export default Chat; 

