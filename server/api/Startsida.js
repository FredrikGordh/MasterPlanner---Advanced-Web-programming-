const express = require('express'); 
const router = express.Router(); 
const db = require('../database')
var user; 
const sql1 = "SELECT DISTINCT * FROM MyCourses WHERE (Owner) = (?)"

// Fetching user's courses from database and sending it to HomePage component
router.get('/Startsida/:owner', async (req, res) => {
    const id = req.params; 
    let database = await db.allAsync(sql1, id.user);
    return res.json(database); 
}); 

// Receiving username from component and saving it into variable user
router.post('/Startsida', async (req,res) => {
    user = req.body; 
}); 

module.exports = router; 