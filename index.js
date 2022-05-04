const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();
const routesHandler = require('./server/api/Mina_kurser')

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); 
app.use('/', routesHandler); 


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
