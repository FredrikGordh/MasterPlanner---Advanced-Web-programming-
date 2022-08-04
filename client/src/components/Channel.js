import React, {useEffect, useState, useContext} from 'react'
import Chat from "./Chat.js"
import "../App.css"
import { SocketContext } from '../context/socket.js'


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
    } 

    // Fetching online users through socket and api list
    useEffect (() => {
        setUsername(sessionStorage.getItem('email'))
        fetchUserInfo()
        socket.on("getUsers", users =>{
            setOnlineUsers(users)
            fetchUserIMG(users)
        })
        
    }, [])
    
    // Adding current user to list of online users in api list through socket
    useEffect(() => {
        socket.emit("addUser", username)
        fetchUserIMG(username)    
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

    const fetchUserIMG = async(input) => {
    setTestList([])
    if (input != ""){
        if(input == username ){      
            usersInfo.map((user) => {    
                if (user.Owner == username){
                    setUserImgUrl(user.imgUrl)
                }
            })
        }else {
            input.map((onlineUser) => {
                usersInfo.map((user) => {    
                    if (onlineUser.username == user.Owner && onlineUser != username){

                        let data= {
                            username: user.Owner,
                            imgUrl: user.imgUrl

                        }
                        setTestList((prev) => [...prev, data])          
                    }
                })
            })   
        }
    }
}
    return(
        <body class="body-chat-window">
                <div class="row">
                    <div class="joinChatContainer col-4">
                        <h3 class="headline-chat">Chattar</h3>
                        <center>
                            {testList.map((user,index) => {
                                if (user.username == username){
                                    {console.log("Denna user ska inte läggas till " + user.username)}
                                }else{
                            return(
                                <div class="chat-list-div col-12" > 
                                    <ul class="chat-list-object" id={index} onClick={() => {
                                        setChatFriend(document.getElementById(index).textContent)
                                        setChatFriendImgUrl(user.imgUrl)
                                    }}>
                                        <img class="portrait-conversation " src ={user.imgUrl === null ? "https://bootdey.com/img/Content/avatar/avatar7.png" : user.imgUrl} ></img>
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
                        <div class="col-6"> {chatFriend}</div>
                        </center>
                        ) : (
                            <center>
                            <Chat socket={socket} username={username} userImgUrl={userImgUrl} chatFriend = {chatFriend} chatFriendImgUrl={chatFriendImgUrl} ></Chat>
                            </center>
                        )}  
                    </div>
        </body>
    )
}

export default Channel;




// import React, {useEffect, useState, useContext} from 'react'
// import Chat from "./Chat.js"
// import "../App.css"
// import { SocketContext } from '../context/socket.js'
// import { getAdditionalUserInfo } from 'firebase/auth'


// function Channel (){
//     const socket = useContext(SocketContext)
//     const [username, setUsername] = useState([])
//     const [chatFriend, setChatFriend] = useState("")
//     const [showChat, setShowChat] = useState(false)
//     const [onlineUsers, setOnlineUsers] = useState([])
//     const [userImgUrl,setUserImgUrl] = useState()
//     const [chatFriendImgUrl, setChatFriendImgUrl] = useState()
//     const [usersInfo, setUsersInfo] = useState([]); 
//     const [testList, setTestList] = useState([])
//     const [testArray, setTestArray ] = useState ([])


//     const fetchUserInfo = async () => {

//         //All users
//         const userData =  await fetch('/Users/Fetch_all_userinfo'); 
//         const user_info = await userData.json(); 
//         setUsersInfo(user_info); 

//     }   



//     // Fetching online users through socket and api list
//     useEffect (() => {
        
//         setUsername(sessionStorage.getItem('email'))
//         socket.on("getUsers", users =>{
//             setOnlineUsers(users)
//             fetchUserIMG(users)
//         })

//         fetchUserInfo()
//     }, [])
    


//     // Adding current user to list of online users in api list through socket
//     useEffect(() => {
//         socket.emit("addUser", username) 

//         // fetchUserIMG(username)   
//     }, [username])
    
//     // Functionality for joining a new conversation
//     useEffect(() => {
//         joinConversation()
//         // fetchUserIMG(chatFriend)
//     },[chatFriend])

//     const joinConversation = () => {
//         if (username !== "" && username !==""){
//             setShowChat(true)
//         }
//     }





        
    
//     return(
//         <body class="body-chat-window">
//                 <div class="row">
//                     <div class="joinChatContainer col-4">
//                         <h3 class="headline-chat">Chattar</h3>
//                         <center>
//                             {testList.map((user,index) => {
//                                 if (user.username == username){
//                                 }else{
//                             return(
//                                 <div class="chat-list-div col-12" > 
//                                     <ul class="chat-list-object" id={index} onClick={() => {
//                                         usersInfo.map((user) => {
//                                             if (user.username == document.getElementById(index).textContent){
//                                                 setChatFriend(document.getElementById(index).textContent)
//                                                 setChatFriendImgUrl(user.imgUrl)
//                                             }
//                                         })
                                        
//                                     }}>
                                        
//                                         <img class="portrait-conversation " src ={user.imgUrl === null ? "https://bootdey.com/img/Content/avatar/avatar7.png" : user.imgUrl} ></img>
//                                         {user.username}
//                                     </ul>
//                                 </div>
//                             )}
//                             })
//                             }
//                         </center>
//                     </div>
//                         {!showChat ? (
//                         <center>  
//                         <div class="col-6"> {chatFriend}</div>
//                         </center>
//                         ) : (
//                             <center>
//                             <Chat socket={socket} username={username} userImgUrl={userImgUrl} chatFriend = {chatFriend} chatFriendImgUrl={chatFriendImgUrl}></Chat>
//                             </center>
//                         )}  
//                     </div>
//         </body>
//     )
// }

// export default Channel;