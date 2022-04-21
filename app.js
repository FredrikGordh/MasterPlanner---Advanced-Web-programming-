const express = require("express")
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require ('cors')
const helmet = require ('helmet')
const db = require("./database/vt1.db")
const app = express();




app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");

});

app.get("/get", (req, res) => {
    console.log('connected to database')
    db.run


}); 



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
