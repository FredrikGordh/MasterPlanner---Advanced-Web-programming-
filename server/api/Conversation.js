const express = require('express');
const app = express();
const router = express.Router(); 


app.post("./", (req,res) => {
    //Recieving conversation list from module and saving it to firebase
    // Conversation attributes:
    // - Conversation-Id 
    // - Sender-Id
    // - Reciever-Id
    // - message-List

})

app.get("./", (req,res) => {
    // Getting conversationlist from firebase
})


module.exports = router;