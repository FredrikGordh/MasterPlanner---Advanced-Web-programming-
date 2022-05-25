const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();
const routesHandler = require('./server/api/Mina_kurser')
const signIn = require('./server/api/SignIn')
const logIn = require('./server/api/LogIn')
const isAuth = require('./server/api/IsAuthenticated')

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); 
app.use('/', routesHandler); 
app.use('/', signIn); 
app.use('/',logIn);
// app.use('/',isAuth);


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
