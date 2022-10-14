const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const myCourses = require("./server/api/MyCourses");
const routesHandler = require("./server/api/SearchCourses");
const signIn = require("./server/api/SignIn");
const logIn = require("./server/api/LogIn");
const myProfile = require("./server/api/MyProfile");
const homepage = require("./server/api/Homepage");
const users = require("./server/api/Users.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);
app.use("/", myCourses);
app.use("/", signIn);
app.use("/", logIn);
app.use("/", myProfile);
app.use("/", homepage);
app.use("/", users);

// Chat and socket functionality
const cors = require("cors");
app.use(cors());
const socketIo = require("socket.io");
const http = require("http");
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let userList = [];

const addUser = (username, socketId) => {
  //Javascript function searching for username in array
  !userList.some((user) => user.username === username) &&
    userList.push({ username, socketId });
};

const removeUser = (socketId) => {
  userList = userList.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return userList.find((user) => user.username === username);
};

// Chat and socket functionality
// On connection all online users are added into the UserList array
io.on("connection", (socket) => {
  socket.on("addUser", (currentUser) => {
    if (currentUser != "") {
      addUser(currentUser, socket.id);
      io.emit("getUsers", userList);
    }
  });

  // Sending and getting messages
  socket.on("send_message", (data) => {
    const user = getUser(data.chatReciever);
    io.to(user.socketId).emit("getMessage", data);
  });

  socket.on("disconnect", (reason) => {
    removeUser(socket.id);
    io.emit("getUsers", userList);
  });
});

// Port of the server
const PORT = process.env.PORT || 8080;
server.listen(PORT);
