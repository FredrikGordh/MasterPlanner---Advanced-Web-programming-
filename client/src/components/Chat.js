import React, {useEffect, useState} from 'react'
// import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import io from 'socket.io-client';
import ScrollToBottom from "react-scroll-to-bottom";





function Chat ({socket, username, chatFriend}){
  const [conversationMembers, setConversationMembers] = useState([])
  const [arrivalMessage, setArrivalMessage] = useState([])
  const [sentMessage, setSentMessage] = useState("");
  const [sentMessageData, setSentMessageData] = useState("");
  const [conversationList, setConversationList] = useState([]);
  const [currentChatFriend, setCurrentChatFriend] = useState("");
  
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setArrivalMessage(data);
      setConversationList((prev) => [...prev, data])
      console.log("arrivalMessage:")
      console.log(data)
      console.log('conversationList vid get')
      console.log(conversationList)
    });
  }, []);

  useEffect( () => {
    setConversationMembers(username, chatFriend)
    setCurrentChatFriend(chatFriend)
    setConversationList([])
  }, [chatFriend])

  useEffect(() => {
    arrivalMessage &&
      conversationMembers.includes(arrivalMessage.author) &&
      setConversationList((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, conversationMembers]);


  const sendMessage = async () => {
    if (sentMessage !== "") {
      const messageData = {
        author: username,
        chatReciever: currentChatFriend,
        message: sentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

    try{
      socket.current.emit("send_message", messageData);
      setConversationList((prev) => [...prev, messageData]);
      console.log("ConversationList vid skicka ")
      console.log(conversationList)
      setSentMessage("");
    } catch(err) {
      console.log(err)
    }
      
    }
  };


  return (
    <div className="chat-window">
      <center>
      <div className="chat-header">
        <p>{" I am user " + username + " chatting with " + chatFriend}</p>
      </div>
      <ScrollToBottom className="message-dialog">
        {conversationList.map((messageContent) => {
          return (
            
            <div id={username === messageContent.author ? "you" : "other"} >
              <div class="message-row row col-12 ">
                <div class="row">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="portrait-message "></img>
                    {/* <p>{"Detta är sender: " + messageContent.author}</p>
                    <p>{"detta är receiver: " + messageContent.chatReciever}</p> */}
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
            value={sentMessage}
            placeholder="Skriv ett meddelande..."
            onChange={(event) => {
              setSentMessage(event.target.value);
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

