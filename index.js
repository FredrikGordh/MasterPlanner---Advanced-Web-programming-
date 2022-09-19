const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();
const mina_kurser = require('./server/api/Mina_kurser')
const routesHandler = require('./server/api/Sok_kurser')
const signIn = require('./server/api/SignIn')
const logIn = require('./server/api/LogIn')
const myProfile = require('./server/api/MyProfile')
const startsida = require('./server/api/Startsida')
const users = require('./server/api/Users.js')


// Chat and socket functionality
const cors = require("cors")
app.use(cors())
const socketIo = require("socket.io")
const http = require('http')
const server = http.createServer(app);

const io = socketIo(server,{ 
    cors: {
      origin: "http://localhost:3000"
    }
})

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); 
app.use('/', routesHandler); 
app.use('/', mina_kurser); 
app.use('/', signIn); 
app.use('/',logIn);
app.use('/', myProfile); 
app.use('/', startsida); 
app.use('/', users)

let userList = []

const addUser = (username, socketId) => {
    //Javascript function searching for username in array
        !userList.some((user) => user.username === username) &&
        userList.push({username, socketId})
    }

const removeUser = (socketId) => {
    userList = userList.filter((user) => user.socketId !== socketId)
}

const getUser = (username) => {
    return userList.find((user) => user.username === username);
}
    

// Chat and socket functionality
// On connection all online users are added into the UserList array
io.on('connection', (socket) => {
    
    console.log("User with socket id: " + socket.id + ' logged in !')
    socket.on('addUser', (currentUser) => {
        if (currentUser != "" ){
        addUser(currentUser, socket.id)
        console.log(`User ${currentUser} with id ${socket.id} is connected`);
        io.emit('getUsers', userList)
        }
    })
    
    
    
// Sending and getting messages
    socket.on('send_message', (data) => {
        const user = getUser(data.chatReciever)
        console.log("userList filter " )
        console.log(userList)
        io.to(user.socketId).emit("getMessage", data)
        console.log( data)
        
        
    })
    
    socket.on('disconnect',(reason)=>{

        console.log(` User ${socket.id} was disconnected `)
        console.log(reason)
        removeUser(socket.id)
        io.emit('getUsers', userList)
        
      })
    
})


const PORT = process.env.PORT || 8080;

server.listen(PORT, console.log(`Server started on port ${PORT}`));
