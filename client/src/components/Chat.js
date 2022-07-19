import React, {useEffect, useState} from 'react'
// import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import io from 'socket.io-client';
import ScrollToBottom from "react-scroll-to-bottom";
import { getDatabase, ref, onValue, update } from "firebase/database"
import { initializeApp } from "firebase/app";





function Chat ({socket, username, chatFriend}){
  const [conversationMembers, setConversationMembers] = useState([])
  const [arrivalMessage, setArrivalMessage] = useState([])
  const [sentMessage, setSentMessage] = useState("");
  const [sentMessageData, setSentMessageData] = useState("");
  const [conversationList, setConversationList] = useState([]);
  const [currentChatFriend, setCurrentChatFriend] = useState("");

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkrCNPAxqtYNBfjgBCXcXBkojwavsM7R8",
  authDomain: "masterplanner-410b7.firebaseapp.com",
  databaseURL: "https://masterplanner-410b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "masterplanner-410b7",
  storageBucket: "masterplanner-410b7.appspot.com",
  messagingSenderId: "83476523056",
  appId: "1:83476523056:web:5a876005b9f386c2fe65f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
  
  // useEffect(() => {
  //   socket.current.on("getMessage", (data) => {
  //     setArrivalMessage(data);
  //     setConversationList((prev) => [...prev, data])
  //     console.log("arrivalMessage:")
  //     console.log(data)
  //     console.log('conversationList vid get')
  //     console.log(conversationList)
  //   });
  // }, []);

  useEffect( () => {
    setConversationMembers(username, chatFriend)
    setCurrentChatFriend(chatFriend)
    setConversationList([])
  }, [chatFriend])

  // useEffect(() => {
  //   arrivalMessage &&
  //     conversationMembers.includes(arrivalMessage.author) &&
  //     setConversationList((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage, conversationMembers]);

  useEffect(() => {
    console.log("useeffect conversationlist")
    console.log(conversationList)
    // console.log(conversationList[1].message)
    saveConversation()
    }, [conversationList])


  const saveConversation = () => {
    let index = conversationList.length -1
    if( index >= 0){
      update(ref(database, '/messages/' + username + '/' + chatFriend + '/' + index), {
        message: conversationList[index].message,
        time: conversationList[index].time,
        author: conversationList[index].author
      }).then (() => {
        // console.log("Update sucessfull")
      })
      .catch((error) => {
        console.log(error)
      })
    }
}

  const startNewConversation = () => {
    setConversationList([])
    // getOldConversation()
  }


  const getOldConversation = async () => { 
    // console.log("gettin old conversation")
    const dbRef = ref(database, '/messages/' + username + '/' + chatFriend)
      onValue(dbRef, (snapshot) => {
  
        if(snapshot.exists()){
          let records = []
            snapshot.forEach(childSnapshot => {
              let keyName = childSnapshot.key
              let data = childSnapshot.val()
              records.push({"key": keyName, "data" : data})
          })
          console.log(records)
          console.log(conversationList)
        // setConversationList([])
          // setConversationList(records)
  
          // const messageData = {
          //   author: username,
          //   chatReciever: currentChatFriend,
          //   message: sentMessage,
          //   time: "hej"
          // }
  
          // setConversationList((prev) => [...prev, messageData]);
        }else{
          console.log("there is no old conversation")
        }
      })
   
    }


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

