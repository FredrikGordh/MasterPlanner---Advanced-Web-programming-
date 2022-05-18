var sqlite3 = require('sqlite3').verbose(); 
const fs = require("fs"); 
const DBSOURCE = "db.sqlite"; 
const fillsql = fs.readFileSync("./server/Database.sql").toString();
const dataArr = fillsql.toString().split(');');


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.log(err.message); 
    } else{
        console.log('connected to database');     
    }
}); 




db.serialize(() => {

    // db.run runs your SQL query against the DB
    db.run('PRAGMA foreign_keys=OFF;');
    db.run('BEGIN TRANSACTION;');
    // Loop through the `dataArr` and db.run each query
    dataArr.forEach((query) => {
        // Add the delimiter back to each query before you run them
        // In my case the it was `);`
        query += ');';
        if(query !== ");") {


        db.run(query, (err) => {
              if(err) throw err;
          });
        }
    });
    db.run('COMMIT;');
});
 
// db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Closed the database connection.');
//   });

db.allAsync = function (sql) {
  var that = this;
  return new Promise(function (resolve, reject) {
    that.all(sql, function (error, rows) {
      if (error) reject(error);
      else resolve([...rows]);
    });
  });
};


db.getAsync = function (sql, params) {
  var that = this;
  return new Promise(function (resolve, reject) {
    that.get(sql, params, function (error, row) {
      if (error) reject(error);
      else resolve(row);
    });
  });
};


db.insertAsync = function (sql, email, password){
  db.serialize(() => {
  console.log(sql, email, password)
   return db.run(sql, [email, password], (err)=>{
        if(err){
            console.log('Error')
            return console.log(err.message)
        }
        console.log('User was added to the database')
    })
  }); 
}


module.exports = db;
