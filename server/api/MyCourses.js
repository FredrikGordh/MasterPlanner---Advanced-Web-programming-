const express = require('express'); 
const router = express.Router(); 
const db = require('../database')
const sql = "SELECT DISTINCT * FROM MyCourses"; 
const sql1 = "SELECT DISTINCT * FROM MyCourses WHERE (Owner) = (?)"
let user = ''; 


//Api requests
//Fetching course information from MyCourses in sqlite3 database
router.get('/MyCourses/:owner', async (req, res) => {
    console.log("params")
    console.log(req.params.owner)

    var courses = await db.allAsync(sql1, req.params.owner);
    console.log("user in my course") 
    console.log(user)
    return res.json(courses);  
})

//Deleting request
router.delete('/MyCourses', async (req, res) => {
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

// Adding new course to user database
router.post('/MyCourses/:owner', async (req,res) => {
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
        req.params.owner
    ]

    if (req.body.Master === undefined){
        insertQuery = 'INSERT or IGNORE INTO MyCourses(typ, Kurskod, Kursnamn, HP, Nivå, Block, VOF, Säsong, Period, Owner) VALUES (?,?,?,?,?,?,?,?,?,?)'  
        const insert = await db.runAsync(insertQuery, myCourses);
        database = await db.allAsync(sql); 
    }else{
        insertQuery = 'UPDATE MyCourses set Master = (?) where (typ, Kurskod, Kursnamn, HP, Nivå, Block, VOF, Säsong, Period, Owner) = (?,?,?,?,?,?,?,?,?,?)';  
        const update = await db.runAsync(insertQuery, [req.body.Master, myCourses[0], myCourses[1], myCourses[2], myCourses[3], myCourses[4], myCourses[5], myCourses[6], myCourses[7], myCourses[8], myCourses[9]]); 
        database = await db.allAsync(sql); 
    }
        res.json(database); 
}); 

module.exports = router; 