//Libraries
const sqlite3 = require('sqlite3').verbose();
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const bcrypt = require('bcrypt');
const nJwt = require('njwt');
const jwt = require('jsonwebtoken')

//Modules
const db = require('../database')
const checkAuthAPI = require('../api/IsAuthenticated');
const { Navigate } = require('react-router-dom');



router.get('/LogIn', async(req,res) => {
    console.log("req.body: " + req.body.email); 
    return res.json('LogIn route is working!');
})


// LogIn and authenticating passwords comparison route
router.post('/LogIn', async (req,res) => {

    const email = req.body.email
    const password = req.body.password
    var auth = false
    var token = ' '
    const sql = 'SELECT * FROM users WHERE email = ? ;' 
    console.log('LogIn API: This is what is sent from LogIn api ' + sql + ' ' + email)
    
    const getUser = await db.getAsync(sql, email)

    
    if(getUser === undefined){
        auth = false

        console.log('User undefined, try again')
        res.json({email:email, auth: false, message: 'No matching user in database'})
    }else{

        const databasePassword = getUser.password
       
        bcrypt.compare(password, databasePassword, function(err, isMatch){
            if (err){
                throw err
            } else if (!isMatch){
                
                auth = false 

                console.log('Wrong password, try again!')
                res.json({email:email, auth: auth}) 
                
            } else{
                console.log("passwords match")
    
                // If passwords match a token is created and sent back to the frontend.
                token = jwt.sign({email}, "jwtSecret", {
                    expiresIn : '5s',              
                })
                
                auth = true
                console.log({auth: auth , token : token})
                res.json({email:email, auth: true, token:token}) 
            }
        })

    }
})



module.exports = router;