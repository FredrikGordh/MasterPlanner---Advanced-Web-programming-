//Libraries
const sqlite3 = require('sqlite3').verbose();
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const bcrypt = require('bcrypt');
const nJwt = require('njwt');
const jwt = require('jsonwebtoken')

//Modules
const db = require('../database')
const checkAuthAPI = require('../api/IsAuthenticated')



router.get('/LogIn', async(req,res) => {
    console.log(req.body); 
    return res.json('LogIn route is working!');
})


// LogIn and authenticating passwords comparison route
router.post('/LogIn', async (req,res) => {

    const email = req.body.email
    const password = req.body.password

    const sql = 'SELECT * FROM users WHERE email = ? ;' 
    console.log('LogIn API: This is what is sent from LogIn api ' + sql + ' ' + email)
    
    const getUser = await db.getAsync(sql, email)
    const databasePassword = getUser.password

    console.log('This is what is fetched in from the database [email,password]' + getUser.email + ' | ' + getUser.password)
   
    bcrypt.compare(password, databasePassword, function(err, isMatch){
        if (err){
            throw err
        } else if (!isMatch){
            console.log('wrong password')
            return res.json({email:email, auth: false})  
        } else{
            console.log("passwords match")

            // If passwords match a token is created and sent back to the frontend.
            const token = jwt.sign({email}, "jwtSecret", {
                expiresIn : 30,              
            })
            console.log({auth: true , token : token})
            return res.json({email:email, auth: true, token:token})   
        }
    })
})



module.exports = router;