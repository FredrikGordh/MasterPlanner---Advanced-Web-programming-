const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();
const mina_kurser = require('./server/api/Mina_kurser')
const routesHandler = require('./server/api/Sok_kurser')
const signIn = require('./server/api/SignIn')
const logIn = require('./server/api/LogIn')
const my_profile = require('./server/api/My_profile')
const startsida = require('./server/api/Startsida')

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); 
app.use('/', routesHandler); 
app.use('/', mina_kurser); 
app.use('/', signIn); 
app.use('/',logIn);
app.use('/', my_profile); 
app.use('/', startsida); 


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
