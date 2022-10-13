const express = require('express'); 
const router = express.Router(); 
const db = require('../database')
var user; 
const sql1 = "SELECT DISTINCT * FROM MyCourses WHERE (Owner) = (?)"

// Fetching user's courses from database and sending it to HomePage component
router.get('/Homepage/:owner', async (req, res) => {

    const owner = req.params.owner; 
    let database = await db.allAsync(sql1, owner);
    console.log(database)
    return res.json(database); 
}); 

// Receiving username from component and saving it into variable user
router.post('/Homepage', async (req,res) => {
    user = req.body; 
}); 

module.exports = router; 