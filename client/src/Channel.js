import React, {useEffect, useState, useContext} from 'react'
import Chat from "./components/Chat/Chat.js"
import "./App.css"
import { SocketContext } from './context/socket.js'


function Channel (){
    const socket = useContext(SocketContext)
    const [username, setUsername] = useState("")
    const [chatFriend, setChatFriend] = useState("")
    const [showChat, setShowChat] = useState(false)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [userImgUrl,setUserImgUrl] = useState()
    const [chatFriendImgUrl, setChatFriendImgUrl] = useState()
    const [testList, setTestList] = useState([])
    const [usersInfo, setUsersInfo] = useState([]); 

        const fetchUserInfo = async () => {
            //All users
            const userData =  await fetch('/Users/Fetch_all_userinfo'); 
            const user_info = await userData.json(); 
            setUsersInfo(user_info); 
            
            user_info.map((user, index) => {    
                if (user.Owner == sessionStorage.getItem('email')){
                    setUserImgUrl(user.imgUrl)
                }
            })
    } 

    // Fetching online users through socket and api list
    useEffect (() => {
        setUsername(sessionStorage.getItem('email'))
        fetchUserInfo()
       

        socket.on("getUsers", users =>{
            setOnlineUsers(users)  
            console.log("OnlineUser: ", users)

        })
        
    }, [])

    useEffect(() => {
        fetchChatFriendImg(onlineUsers)
        console.log("useEffect, on onlineUsers", onlineUsers)

    }, [onlineUsers])
    
    // Adding current user to list of online users in api list through socket
    useEffect(() => {
        socket.emit("addUser", username)
    }, [username])
    
    // Functionality for joining a new conversation
    useEffect(() => {
        joinConversation()
    },[chatFriend])

    const joinConversation = () => {
        if (username !== "" && chatFriend !==""){
            setShowChat(true)
        }
    }

    const fetchChatFriendImg =  (input) => {
        setTestList([])
        if (input != ""){

        onlineUsers.map((onlineUser, index) => {
            usersInfo.map((user, index) => {    
                if (onlineUser.username == user.Owner && onlineUser != username){
                    let data= {
                        username: user.Owner,
                        imgUrl: user.imgUrl
                    }
                    setTestList((prev) => [...prev, data])          
                }
            })
        }) 
        // window.location.reload()
        // if(onlineUsers == null){
            console.log("onlineUsers length:",onlineUsers.length)
        // }
        console.log("function fetch: onlineUsers", onlineUsers)
    }
    }




    return(
        
        <div className="body-chat-window">
                <div className="row">
                    <div className="joinChatContainer col-4">
                        <h3 className="headline-chat">Chattar</h3>
                        <center>
                        
                            {testList.map((user,index) => {
                                if (user.username == username){
                                }else{
                            return(
                                <div key={Math.random()} className="chat-list-div col-12" > 
                                    <ul key={Math.random()} className="chat-list-object" id={index} onClick={() => {
                                        setChatFriend(document.getElementById(index).textContent)
                                        setChatFriendImgUrl(user.imgUrl)
                                    }}>
                                        <img key={Math.random()} className="portrait-conversation " src ={user.imgUrl === null ? "https://bootdey.com/img/Content/avatar/avatar7.png" : user.imgUrl} ></img>
                                        {user.username}
                                    </ul>
                                </div>
                            )}
                            })
                            }
                            
                        </center>
                    </div>
                        {!showChat ? (
                        <center>  
                        <div className="col-6"> {chatFriend}</div>
                        </center>
                        ) : (
                            <center>
                            <Chat socket={socket} username={username} userImgUrl={userImgUrl} chatFriend = {chatFriend} chatFriendImgUrl={chatFriendImgUrl} ></Chat>
                            </center>
                        )}  
                    </div>
        </div>
    )
}

export default Channel;

