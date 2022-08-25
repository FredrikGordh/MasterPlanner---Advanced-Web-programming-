var sqlite3 = require('sqlite3').verbose(); 
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')


router.post('/Channel', async (req,res) => {
    console.log("inside api call")
    let sql = 'SELECT * FROM userInfo WHERE Owner = ? ;'
    const owner = req.body.chatUser
    const database = await db.getAsync(sql, owner)
    console.log("this is what the query is getting:")
    console.log(database)
    return res.json(database);
    
}); 




module.exports = router;