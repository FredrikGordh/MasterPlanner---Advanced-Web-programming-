// var sqlite3 = require('sqlite3').verbose(); 
const sqlite3 = require('sqlite3').verbose();
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')


const bcrypt = require('bcrypt');


router.get('/SignIn', async(req,res) => {
    return res.send('SignIn route is working!');
})

router.post('/SignIn', async (req,res) => {
   console.log(req.body); 
    const newUser = {
        email: req.body.email,
        password: req.body.password
    }
    
    const salt = await bcrypt.genSalt(6,)
    console.log('This is the salt: ' + salt)
    const hashedPassword = await bcrypt.hash(newUser.password,salt)
    console.log('hashed password: ' + hashedPassword)

    const insert = await db.insertAsync(newUser.email,hashedPassword)
    console.log(insert)
    
    
})

// async function comparePassword(password){
//     const validPassword
// }


module.exports = router;