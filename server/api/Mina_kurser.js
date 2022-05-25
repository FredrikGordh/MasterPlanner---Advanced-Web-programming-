var sqlite3 = require('sqlite3').verbose(); 
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')
let sql = "SELECT DISTINCT * FROM Termin1"; 


router.get('/Mina_kurser', async (req,res) => {

    var kurs = await db.allAsync(sql);
    return res.json(kurs);

}); 


router.post('/addkurs', (req,res) => {

    res.end('NA');

}); 

module.exports = router; 