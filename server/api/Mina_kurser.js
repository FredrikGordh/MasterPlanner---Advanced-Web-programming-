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
    let database = await db.allAsync(sql);
    res.json(database);

})

router.post('/Mina_kurser', async (req,res) => {
    let insertQuery= '';
    let database = '';
    const myCourses = [
        req.body.typ,
        req.body.Kurskod, 
        req.body.Kursnamn, 
        req.body.HP, 
        req.body.Nivå,
        req.body.Block, 
        req.body.VOF,
        req.body.Säsong,
        req.body.Period,
    ]

    if (req.body.Master === undefined){
        insertQuery = 'INSERT or IGNORE INTO MyCourses(typ, Kurskod, Kursnamn, HP, Nivå, Block, VOF, Säsong, Period) VALUES (?,?,?,?,?,?,?,?,?)'  
        const insert = await db.runAsync(insertQuery, myCourses);
        database = await db.allAsync(sql); 
    }else{
        insertQuery = 'UPDATE MyCourses set Master = (?) where (typ, Kurskod, Kursnamn, HP, Nivå, Block, VOF, Säsong, Period) = (?,?,?,?,?,?,?,?,?)';  
        // UPDATE friends set dateAccepted = (?), isFriends=1 where id = (?)
        const update = await db.runAsync(insertQuery, [req.body.Master, myCourses[0], myCourses[1], myCourses[2], myCourses[3], myCourses[4], myCourses[5], myCourses[6], myCourses[7], myCourses[8]]); 
        database = await db.allAsync(sql); 

    }

        res.json(database); 
}); 




module.exports = router; 