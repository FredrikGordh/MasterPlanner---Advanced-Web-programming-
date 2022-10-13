import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { getDatabase, ref, onValue, update, remove } from "firebase/database";

// Compontent for chat functionality within the conversation
// Fetching and writing conversation to firebase realtime database
// Using socket.io to simlplify the connection between different users.
function Chat({ socket, username, userImgUrl, chatFriend, chatFriendImgUrl }) {
  const [sentMessage, setSentMessage] = useState("");
  const [conversationList, setConversationList] = useState([]);
  const [currentChatFriend, setCurrentChatFriend] = useState("");

  // Initialize Firebase
  const database = getDatabase();

  useEffect(() => {
    // Gets the message that has been written between users
    socket.on("getMessage", (data) => {
      setConversationList((prev) => [...prev, data]);
    });
  }, []);

  useEffect(() => {
    // Sets the current chat user
    setCurrentChatFriend(chatFriend);
    // Starts the new conversation between users and gets the old chat
    startNewConversation();
  }, [chatFriend]);

  useEffect(() => {
    // Saves the current conversation whenever text is added to the conversasion list
    saveConversation();
  }, [conversationList]);

  // Realtime saving conversation to database when the chat changes
  const saveConversation = () => {
    let index = conversationList.length - 1;
    if (index >= 0) {
      // Removes '.' in the usernames as it is not allowed for the chat function
      let newUserName = username.replace(".", " ");
      let newChatFriend = chatFriend.replace(".", " ");

      // Writes the message to the firebase database
      update(
        ref(
          database,
          "/messages/" + newUserName + "/" + newChatFriend + "/" + index
        ),
        {
          message: conversationList[index].message,
          time: conversationList[index].time,
          author: conversationList[index].author,
          chatReciever: conversationList[index].chatReciever,
        }
      ).catch((error) => {
        console.log(error);
      });
    }
  };

  // Functionality when user is switching between conversations
  const startNewConversation = () => {
    setConversationList([]);
    getOldConversation();
  };

  // Fetching old conversation between the users from firebase Database
  const getOldConversation = async () => {
    console.log("inside old conversation")
    // Writes the reference to the database to get the old conversation
    const dbRef = ref(
      database,
      "/messages/" +
        username.replace(".", " ") +
        "/" +
        chatFriend.replace(".", " ")
    );
    // Checks if the data exists and get the data if it does
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        let records = [];
        snapshot.forEach((childSnapshot) => {
          let data = childSnapshot.val();
          records.push(data);
        });
        setConversationList(records);
      } 
    });
  };

  // Send message functionality after pressing enter or button
  const sendMessage = async () => {
    if (sentMessage !== "") {
      var date = new Date(Date.now());
      var hours = ("0" + date.getHours()).slice(-2);
      var mins = ("0" + date.getMinutes()).slice(-2);

      // Stores the message and its data
      const messageData = {
        author: username,
        chatReciever: currentChatFriend,
        message: sentMessage,
        time: hours + ":" + mins,
      };

      try {
        socket.emit("send_message", messageData);
        setConversationList((prev) => [...prev, messageData]);
        setSentMessage(""); // Ta bort
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h4>{chatFriend}</h4>
      </div>
      <ScrollToBottom className="message-dialog">
        {conversationList.map((messageContent, index) => {
          return (
            <div
              key={Math.random()}
              id={username === messageContent.author ? "you" : "other"}
            >
              <div key={Math.random()} className="message-row row col-12 ">
                {username === messageContent.author ? (
                  <img
                    key={Math.random()}
                    src={
                      userImgUrl === null
                        ? "https://bootdey.com/img/Content/avatar/avatar7.png"
                        : userImgUrl
                    }
                    className="portrait-message "
                  ></img>
                ) : (
                  <img
                    key={Math.random()}
                    src={
                      chatFriendImgUrl === null
                        ? "https://bootdey.com/img/Content/avatar/avatar7.png"
                        : chatFriendImgUrl
                    }
                    className="portrait-message "
                  ></img>
                )}

                <p key={Math.random()} className="message-text ">
                  {messageContent.message}
                </p>
              </div>
              <div key={Math.random()} className="time ">
                {messageContent.time}
              </div>
            </div>
          );
        })}
      </ScrollToBottom>
      <div className="chat-footer">
        <div className="chat-input-row row">
          <input
            className="chat-input"
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
          <button className="btn btn-chat  " onClick={sendMessage}>
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
