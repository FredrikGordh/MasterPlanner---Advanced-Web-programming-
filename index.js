const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();
const mina_kurser = require('./server/api/Mina_kurser')
const routesHandler = require('./server/api/Sok_kurser')
const signIn = require('./server/api/SignIn')
const logIn = require('./server/api/LogIn')
const my_profile = require('./server/api/My_profile')
const startsida = require('./server/api/Startsida')
const chat = require('./server/api/Chat')

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
app.use('/', my_profile); 
app.use('/', startsida); 
app.use('/', chat); 


// Chat and socket functionality
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (msg) => {
        socket.emit('recieve_message', msg)
        console.log("Nu har meddelande emittats: " + msg)
    })
    
    socket.on('disconnect',(reason)=>{
        console.log('User is disconnected')
        console.log(reason)
      })
    
})


const PORT = process.env.PORT || 8080;

server.listen(PORT, console.log(`Server started on port ${PORT}`));
