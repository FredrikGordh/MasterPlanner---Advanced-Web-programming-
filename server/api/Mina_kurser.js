var sqlite3 = require('sqlite3').verbose(); 
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const db = require('../database')
let sql = "SELECT DISTINCT * FROM MyCourses"; 



router.get('/Mina_kurser', async (req, res) => {
    var courses = await db.allAsync(sql); 
    return res.json(courses);  
})

router.delete('/Mina_kurser', async (req, res) => {

    let deleteQuery = 'DELETE FROM MyCourses WHERE (Kurskod, Kursnamn, HP, Nivå, Block, VOF, Säsong, Period) = (?,?,?,?,?,?,?,?)'  
    const myCourses = [
        req.body.Kurskod, 
        req.body.Kursnamn, 
        req.body.HP, 
        req.body.Nivå,
        req.body.Block, 
        req.body.VOF,
        req.body.Säsong,
        req.body.Period
    ]
    let remove = await db.runAsync(deleteQuery, myCourses);
    console.log(remove); 
        

})

router.post('/Mina_kurser', async (req,res) => {
    let insertQuery = 'INSERT or IGNORE INTO MyCourses(Kurskod, Kursnamn, HP, Nivå, Block, VOF, Säsong, Period) VALUES (?,?,?,?,?,?,?,?)'  
    const myCourses = {
            Kurskod: req.body.Kurskod, 
            Kursnamn: req.body.Kursnamn, 
            HP: req.body.HP, 
            Nivå: req.body.Nivå,
            Block: req.body.Block, 
            VOF: req.body.VOF,
            Säsong: req.body.Säsong,
            Period: req.body.Period
        }

        const insert = await db.insertCourse(insertQuery, req.body); 

}); 




module.exports = router; 