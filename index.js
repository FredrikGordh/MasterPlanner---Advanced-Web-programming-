const express = require("express")

// const bodyParser = require('body-parser')

// const cors = require ('cors')
// const helmet = require ('helmet')
// const db = require("./demo/src/database.js")
// const compression = require('compression')
const app = express();

var testAPIRouter = require("./routes/testAPI");



app.use("/testAPI", testAPIRouter);



app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

app.get("/get", (req, res) => {
    console.log('connected to database')
    db.run
}); 

app.get("http://localhost:3000/SignIn", (req, res) => {
    console.log('You are now in the SignIn window')
})



const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
