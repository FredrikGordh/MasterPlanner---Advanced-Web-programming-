const sqlite3 = require('sqlite3').verbose();
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
    const email = req.body.email
    const password = req.body.password
    
    // Hashing the password
    const salt = await bcrypt.genSalt(6,)
    console.log('This is the salt: ' + salt)
    const hashedPassword = await bcrypt.hash(password,salt)
    console.log('hashed password: ' + hashedPassword)

    const sql = 'INSERT or IGNORE INTO users(email, password) VALUES (?,?)'
  
    const insert = await db.insertAsync(sql, email, hashedPassword)
    console.log('This is sent to database.js: ' + email, hashedPassword)
    
    
})



module.exports = router;