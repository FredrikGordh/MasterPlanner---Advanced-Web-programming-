const express = require('express');
const app = express();
const router = express.Router(); 

// Ska detta var i App istället?
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// 


app.get('/Chat', (req, res) => {
// return res.json(path.join(__dirname, '../client/src/components', 'Chat.js'));
res.send({ response: "I am alive" }).status(200);

});



module.exports = router;