var sqlite3 = require('sqlite3').verbose(); 
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')


router.get('/User', async(req,res) => {
    const email = req.body.email
    const sql = 'SELECT email FROM users WHERE email = ? ;' 
    console.log('LogIn API: This is what is sent from LogIn api ' + sql + ' ' + email)
})

router.get('/Users/Fetch_all_usernames', async(req,res) => {
    const sql = 'SELECT email FROM users ;'
    const getAllUsers = await db.allAsync(sql)
    res.json({ getAllUsers})
})

router.get('/Users/Fetch_all_userinfo', async (req,res) => {
    let sql = "SELECT DISTINCT * FROM userInfo"
    let database = await db.allAsync(sql); 
    console.log(database)
    return res.json(database);
    
}); 


module.exports = router;