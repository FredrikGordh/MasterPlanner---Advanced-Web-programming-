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
    console.log(req.body); 
    let deleteQuery = 'DELETE FROM MyCourses WHERE (Kurskod, Kursnamn, HP, Nivå, Block, VOF, Säsong, Period) = (?,?,?,?,?,?,?,?)'  
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
    const remove = await db.insertCourse(deleteQuery, myCourses);
     

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

        const insert = await db.insertCourse(insertQuery, myCourses); 

}); 




module.exports = router; 