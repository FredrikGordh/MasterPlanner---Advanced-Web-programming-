import React, { useEffect, useState, useContext } from "react";
import Chat from "./components/Chat/Chat.js";
import "./App.css";
import { SocketContext } from "./context/socket.js";

// Creates the channel version of the chat view i.e. the left side panel of the chat.
function Channel() {
  const socket = useContext(SocketContext);
  const [username, setUsername] = useState("");
  const [chatFriend, setChatFriend] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [userImgUrl, setUserImgUrl] = useState();
  const [chatFriendImgUrl, setChatFriendImgUrl] = useState();
  const [displayedOnlineUsers, setDisplayedOnlineUsers] = useState([]);
  const [usersInfo, setUsersInfo] = useState([]);

  // Fetches all the user info
  const fetchUserInfo = async () => {
    //All users
    const userData = await fetch("/Users/Fetch_all_userinfo");
    const user_info = await userData.json();
    setUsersInfo(user_info);

    user_info.map((user, index) => {
      if (user.Owner == sessionStorage.getItem("email")) {
        setUserImgUrl(user.imgUrl);
      }
    });
  };

  // Fetching online users through socket and api list
  useEffect(() => {
    setUsername(sessionStorage.getItem("email"));
    fetchUserInfo();

    // Gets the users who are online from firebase database
    socket.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
  }, []);

  // Fetches the image of the friend who is online
  useEffect(() => {
    fetchChatFriends(onlineUsers);
  }, [onlineUsers]);

  // Adding current user to list of online users in api list through socket
  useEffect(() => {
    socket.emit("addUser", username);
  }, [username]);

  // Functionality for joining a new conversation
  useEffect(() => {
    joinConversation();
  }, [chatFriend]);

  // Displays the chosen conversation
  const joinConversation = () => {
    if (username !== "" && chatFriend !== "") {
      setShowChat(true);
    }
  };

  // Adds the icon and the name to the online users. 
  // And adding these friends to the list that is later displayed in Channel.
  // Handling so that the user itself will not be displayed among the chat friends
  const fetchChatFriends = (input) => {
    setDisplayedOnlineUsers([]);
    if (input != "") {
      onlineUsers.map((onlineUser) => {
        usersInfo.map((user) => {
          if (onlineUser.username == user.Owner && onlineUser != username) {
            let data = {
              username: user.Owner,
              imgUrl: user.imgUrl,
            };
            setDisplayedOnlineUsers((prev) => [...prev, data]);
          }
        });
      });
    }
  };

  return (
    <div className="body-chat-window">
      <div className="row">
        <div className="joinChatContainer col-4">
          <h3 className="headline-chat">Chattar</h3>
          <center>
            {displayedOnlineUsers.map((user, index) => {
              if (user.username == username) {
              } else {
                return (
                  <div key={Math.random()} className="chat-list-div col-12">
                    <ul
                      key={Math.random()}
                      className="chat-list-object"
                      id={index}
                      onClick={() => {
                        setChatFriend(
                          document.getElementById(index).textContent
                        );
                        setChatFriendImgUrl(user.imgUrl);
                      }}
                    >
                      <img
                        key={Math.random()}
                        className="portrait-conversation "
                        src={
                          user.imgUrl === null
                            ? "https://bootdey.com/img/Content/avatar/avatar7.png"
                            : user.imgUrl
                        }
                      ></img>
                      {user.username}
                    </ul>
                  </div>
                );
              }
            })}
          </center>
        </div>
        {!showChat ? (
          <center>
            <div className="col-6"> {chatFriend}</div>
          </center>
        ) : (
          <center>
            <Chat
              socket={socket}
              username={username}
              userImgUrl={userImgUrl}
              chatFriend={chatFriend}
              chatFriendImgUrl={chatFriendImgUrl}
            ></Chat>
          </center>
        )}
      </div>
    </div>
  );
}

export default Channel;
