var sqlite3 = require('sqlite3').verbose(); 
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')
let sql = "SELECT DISTINCT * FROM Termin1"; 


router.get('/Sok_kurser', async (req,res) => {
    console.log("sök kurser get")
    var kurs = await db.allAsync(sql);
    return res.json(kurs);

}); 


router.post('/addkurs', (req,res) => {
    console.log("sök kurser post")
    res.end('NA');

}); 

module.exports = router; 