const express = require('express'); 
const router = express.Router(); 
const db = require('../database')
const sql1 = "SELECT DISTINCT * FROM MyCourses WHERE (Owner) = (?)"

// Fetching user's courses from database and sending it to HomePage component
router.get('/Homepage/:owner', async (req, res) => {

    let database = await db.allAsync(sql1, req.params.owner);
    console.log("inside homepage api")
    console.log(database)
    res.json(database); 
}); 

// Receiving username from component and saving it into variable user
router.post('/Homepage', async (req,res) => {
    user = req.body; 
}); 

module.exports = router; 