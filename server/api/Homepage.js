const express = require('express'); 
const router = express.Router(); 
const db = require('../database')
const sql1 = "SELECT DISTINCT * FROM MyCourses WHERE (Owner) = (?)"

// Fetching user's courses from database and sending it to HomePage component
router.get('/Homepage/', async (req, res) => {

    const user = req.params; 
    console.log("params:")
    console.log(req.params)
    let database = await db.allAsync(sql1, user);
    console.log("inside homepage api")
    console.log(database)
    res.json(database); 
}); 

// Receiving username from component and saving it into variable user
router.post('/Homepage', async (req,res) => {
    user = req.body; 
}); 

module.exports = router; 