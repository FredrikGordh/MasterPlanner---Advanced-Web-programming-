// var sqlite3 = require('sqlite3').verbose(); 
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')


router.get('/SignIn', async(req,res) => {
    return res.send('SignIn route is working!');
})

router.post('/SignIn', async (req,res) => {
   console.log(req.body); 
    const newUser = {
        Email: req.body.email,
        Password: req.body.password
    }
    console.log(newUser.Email); 
   return res.end(newUser.Email)
}); 

module.exports = router;