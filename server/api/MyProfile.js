var sqlite3 = require('sqlite3').verbose(); 
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')
const sql = "SELECT DISTINCT * FROM userInfo WHERE (Owner) = (?)"
let user = ''; 


router.post('/My_profile', async (req,res) => {
    let insertQuery = ''; 
    let database = await db.allAsync(sql, user); 

    if (database.length > 0){
        insertQuery = 'UPDATE userInfo set (Name, ProfileEmail, LiuID, Master) = (?,?,?,?) where (Owner) = (?)';  
    }else{
        insertQuery = 'INSERT or IGNORE INTO userInfo(Name, ProfileEmail, LiuID, Master, Owner) VALUES (?,?,?,?,?)';   
    }
    const update = await db.runAsync(insertQuery, [req.body[0], req.body[1], req.body[2], req.body[3], user]); 
    database = await db.allAsync(sql, user); 
    res.json(database); 
})

router.post('/Update_image', async (req,res) => {
    user= req.body.username
    let insertQuery = ''; 
    let database = await db.allAsync(sql, user); 
    if (database.length > 0){
        insertQuery = 'UPDATE userInfo set (imgURL) = (?) where (Owner) = (?)';  
    }else{
        insertQuery = 'INSERT or IGNORE INTO userInfo(Name, ProfileEmail, LiuID, Master, imgURL, Owner) VALUES (?,?,?,?,?,?)';   
    }
    const update = await db.runAsync(insertQuery, [req.body.imgURL, user]); 
    database = await db.allAsync(sql,user); 
    res.json(database); 
})


router.post('/My_profile/user', async (req,res) => {
   user = req.body.username; 
})

router.get('/My_profile', async (req,res) => {
    let database = await db.allAsync(sql, user); 
    res.json(database); 
 })
 


module.exports = router; 

