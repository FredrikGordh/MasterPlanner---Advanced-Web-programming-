
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
        if(query[2] !== ';') {


        db.run(query, (err) => {
          
              if(err) console.log("err: " + err);
          });
        }
    });
    db.run('COMMIT;');
});
 

db.allAsync = function (sql, params) {
  var that = this;
  return new Promise(function (resolve, reject) {
    that.all(sql, params, function (error, rows) {
      if (error) reject(error);
      else resolve([...rows]);
    });
  });
};

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

db.update = function(sql, param){
  db.run(sql, param, (err) => {
    if (err) {
      return console.log(err); 
    }
  })
}

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

db.insertAsync = function (sql, email, password){
  db.serialize(() => {
  console.log('This is now in the database: ' + sql, email, password)

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


