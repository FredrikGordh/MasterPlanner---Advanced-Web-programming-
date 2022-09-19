const express = require('express'); 
const router = express.Router(); 
const db = require('../database')

// Fetching all usernames from database and sending it to 
// component
router.get('/Users/Fetch_all_usernames', async(req,res) => {
    const sql = 'SELECT email FROM users ;'
    const getAllUsers = await db.allAsync(sql)
    res.json({ getAllUsers})
})

// Fetching all userinfo from database and sending it to 
// component
router.get('/Users/Fetch_all_userinfo', async (req,res) => {
    let sql = "SELECT DISTINCT * FROM userInfo"
    let database = await db.allAsync(sql); 
    return res.json(database);
}); 

module.exports = router;