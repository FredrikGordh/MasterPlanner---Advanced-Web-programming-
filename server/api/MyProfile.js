const express = require('express');
const router = express.Router();
const db = require('../database')
const sql = "SELECT DISTINCT * FROM userInfo WHERE (Owner) = (?)"
let user = '';

// Adding information in the edited in MyProfileForm component
router.post('/My_profile', async (req, res) => {
    let insertQuery = '';
    let database = await db.allAsync(sql, user);
    
    if (database.length > 0) {
        insertQuery = 'UPDATE userInfo set (Name, ProfileEmail, LiuID, Master) = (?,?,?,?) where (Owner) = (?)';
    } else {
        insertQuery = 'INSERT or IGNORE INTO userInfo(Name, ProfileEmail, LiuID, Master, Owner) VALUES (?,?,?,?,?)';
    }
    const update = await db.runAsync(insertQuery, [req.body[0], req.body[1], req.body[2], req.body[3], user]);
    database = await db.allAsync(sql, user);
    res.json(database);
})

// Adding image url that is fetched from firebase NoSQL database to
// sqlite3 database
router.post('/Update_image', async (req, res) => {
    user = req.body.username
    let insertQuery = '';
    let database = await db.allAsync(sql, user);
    if (database.length > 0) {
        insertQuery = 'UPDATE userInfo set (imgURL) = (?) where (Owner) = (?)';
    } else {
        insertQuery = 'INSERT or IGNORE INTO userInfo(Name, ProfileEmail, LiuID, Master, imgURL, Owner) VALUES (?,?,?,?,?,?)';
    }
    const update = await db.runAsync(insertQuery, [req.body.imgURL, user]);
    database = await db.allAsync(sql, user);
    res.json(database);
})

// Fetching the username from MyProfile component as saves it as a variable in this api
router.post('/My_profile/user', async (req, res) => {
    user = req.body.username;
})

// Fetching userInfo from sqilite3 database to MyProfile component
router.get('/My_profile', async (req, res) => {
    let database = await db.allAsync(sql, user);
    res.json(database);
})

module.exports = router;

