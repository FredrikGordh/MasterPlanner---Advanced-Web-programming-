var sqlite3 = require('sqlite3').verbose(); 
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')


router.get('/Sok_kurser', async (req,res) => {
    var returnKurs = []; 
    let sql = "SELECT DISTINCT * FROM Termin"
    for (let i = 1; i <= 10; i++){
        var kurs = await db.allAsync(sql + i);
        kurs.forEach(element => {
            returnKurs.push(element); 
        });

    }

    return res.json(returnKurs);

}); 


router.post('/Sok_kurser', (req,res) => {
    //console.log("Email: " + req.body.email); 
    res.end('NA');

}); 

module.exports = router; 