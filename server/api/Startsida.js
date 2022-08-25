var sqlite3 = require('sqlite3').verbose(); 
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')
var owner; 
const sql1 = "SELECT DISTINCT * FROM MyCourses WHERE (Owner) = (?)"





router.get('/Startsida/:owner', async (req, res) => {
    const id = req.params; 
    let database = await db.allAsync(sql1, id.owner);
    return res.json(database); 

}); 


router.post('/Startsida', async (req,res) => {
    console.log("Owner: " + req.body); 
    owner = req.body; 

}); 

module.exports = router; 