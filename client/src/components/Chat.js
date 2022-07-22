import React, {useEffect, useState} from 'react'
import ScrollToBottom from "react-scroll-to-bottom";
import { getDatabase, ref, onValue, update } from "firebase/database"



// Compontent for chat functionality within the conversation
// Fetching and writing conversation to firebase realtime database
// Using socket.io to simlplify the connection between different users.
function Chat ({socket, username, chatFriend}){
  const [sentMessage, setSentMessage] = useState("");
  const [conversationList, setConversationList] = useState([]);
  const [currentChatFriend, setCurrentChatFriend] = useState("");


// Initialize Firebase
const database = getDatabase();
  
  useEffect(() => {
    socket.on("getMessage", (data) => {
      setConversationList((prev) => [...prev, data])
      console.log("arrivalMessage:")
      console.log(data)
      console.log('conversationList vid get')
      console.log(conversationList)
    });
  }, []);

  useEffect( () => {
    setCurrentChatFriend(chatFriend)
    startNewConversation()
  }, [chatFriend])

  useEffect(() => {
    console.log("useeffect conversationlist")
    console.log(conversationList)
    saveConversation()
    }, [conversationList])

// Realtime saving conversation to database
  const saveConversation = () => {
    let index = conversationList.length -1
    if( index >= 0){
      update(ref(database, '/messages/' + username + '/' + chatFriend + '/' + index), {
        message: conversationList[index].message,
        time: conversationList[index].time,
        author: conversationList[index].author,
        chatReciever: conversationList[index].chatReciever
      })
      .catch((error) => {
        console.log(error)
      })
    }
}

// Functionality when user is switching between conversations
  const startNewConversation = () => {
    setConversationList([])
    getOldConversation()
  }


  // Fetching old conversation between the users from firebase Database 
  const getOldConversation = async () => { 
    const dbRef = ref(database, '/messages/' + username + '/' + chatFriend)
      onValue(dbRef, (snapshot) => {
  
        if(snapshot.exists()){
          let records = []
            snapshot.forEach(childSnapshot => {
              let data = childSnapshot.val()
              records.push(data)
          })
          console.log("records")
          console.log(records)
          console.log(conversationList)
        setConversationList(records)
        }else{
          console.log("there is no old conversation")
        }
      })
   
    }

  // Send message functionality after pressing enter or button
  const sendMessage = async () => {
    if (sentMessage !== "") {
      
      var date = new Date(Date.now())
      var hours = ('0'+date.getHours()).slice(-2)
      var mins = ('0'+date.getMinutes()).slice(-2);
    
      const messageData = {
        author: username,
        chatReciever: currentChatFriend,
        message: sentMessage,
        time: hours + ":" + mins
      };

    try{
      socket.emit("send_message", messageData);
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
      <div className="chat-header">
        <p>{" I am user " + username + " chatting with " + chatFriend}</p>
      </div>
      <ScrollToBottom className="message-dialog">
        {conversationList.map((messageContent) => {
          return (
            <div id={username === messageContent.author ? "you" : "other"} >
              <div class="message-row row col-12 ">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="portrait-message "></img>
                    <p class="message-text ">{messageContent.message}</p>
              </div>
              <div class="time ">{messageContent.time}</div>
            </div>
          );
        })}
      </ ScrollToBottom>
      <div className="chat-footer">
        <div class="chat-input-row row">
          <input
            class="chat-input"
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
          <button class="btn btn-chat  " onClick={sendMessage}><i class="bi bi-send-fill"></i></button>
        </div>
      </div>
    </div>
  );
}


export default Chat; 

