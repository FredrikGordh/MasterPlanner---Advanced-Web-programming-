const express = require("express");
const db = require("./database.js"); 
const app = express();
//const jsonData = require("./file.json")

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");

});

app.get("/get", (req, res) => {


}); 



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
