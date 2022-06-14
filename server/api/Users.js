var sqlite3 = require('sqlite3').verbose(); 
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')




router.get('/Users', async(req,res) => {
    console.log("hej")
    const sql = 'SELECT email FROM users ;'
    const getAllUsers = await db.allAsync(sql)
    console.log(getAllUsers)
    res.json({getAllUsers})
})

module.exports = router;