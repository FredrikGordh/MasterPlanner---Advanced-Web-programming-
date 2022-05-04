const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();
const routesHandler = require('./server/api/Mina_kurser')
const signIn = require('./server/api/SignIn')

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); 
app.use('/', routesHandler); 
app.use('/', signIn); 


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
