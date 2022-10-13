
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

// Starting up the database, puts the excecution mode into serialize mode
db.serialize(() => {
    // db.run runs your SQL query against the DB
    db.run('PRAGMA foreign_keys=OFF;');
    db.run('BEGIN TRANSACTION;');
    // Loop through the `dataArr` and db.run each query
    dataArr.forEach((query) => {
        // Add the delimiter back to each query before you run them
        // In my case the it was `);`
        query += ');';
        if(query[2] !== ';') {
        db.run(query, (err) => {
              if(err) console.log("err: " + err);
          });
        }
    });
    db.run('COMMIT;');
});

// Fetches the whole datatable from the specific database
db.allAsync = function (sql, params) {
  console.log('This is what is sent to al sync DB API: ' + sql,params)
  var that = this;
  return new Promise(function (resolve, reject) {
    that.all(sql, params, function (error, rows) {
      if (error) reject(error);
      else resolve([...rows]);
    });
  });
};

// Sends get queries to database where certain data or data rows are fetched
db.getAsync = function (sql, params) {
  var that = this;
  console.log('This is what is sent to Login DB API: ' + sql,params)
  return new Promise(function (resolve, reject) {
    that.get(sql, params, function (error, row) {
      if (error) reject(error);
      else resolve(row);
    });
  });
};

// Sending query to database that changes the database (Update, Delete, Insert)
db.runAsync = function (sql, params) {
  console.log(sql, params)
  var that = this;
  return new Promise(function (resolve, reject) {
    that.run(sql, params, function (error) {
      if (error) reject(error);
      else resolve(this);
    });
  });
};

// Adding course to user when user is adding them in SearchCourse component
db.insertCourse = function(sql, myCourses) {
  let Kurskod =  myCourses.Kurskod; 
  let Kursnamn = myCourses.Kursnamn; 
  let HP = myCourses.HP; 
  let Nivå = myCourses.Nivå; 
  let Block = myCourses.Block; 
  let VOF = myCourses.VOF; 
  let Säsong = myCourses.Säsong; 
  let Period = myCourses.Period; 

  db.run(sql, [Kurskod, Kursnamn, HP, Nivå, Block, VOF, Säsong, Period], (err) => {
    if (err) {
      return console.log(err); 
    }
  })
}

// Adding user to database
db.insertAsync = function (sql, email, password){
  db.serialize(() => {
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


