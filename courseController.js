const { Database } = require("sqlite3")

const db = require('./database/vt1.db')

//Retrieve all courses
exports.getAll = (req,res) => {
    db
    .select('*') //Select all courses
    .from('vt1') //from vt1 table
    .then(userData => {
    // Send the extracted courses from db
    res.json(userData)
    })
    .catch (err => {
        // error message
        res.json({message: 'Error in retrieving courses'})
    })
    }


// Adding courses


//Deleting courses