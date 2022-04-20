var sqlite3 = require('sqlite3').verbose(); 

let db = new sqlite3.Database('./database/Database.db', err => {
   
    
    if (err) {
        console.log(err.message); 
    }
    
    console.log('connected to vt1 database'); 
    db.each("SELECT * FROM Termin1", function(err,result){
        if (err) throw err.message; 
        console.log(result); 
    });

    db.close((err) => {
        if (err) {
            console.log(err.message)
        }

    });
    
    console.log('db connection closed')

}); 

module.exports = db;
