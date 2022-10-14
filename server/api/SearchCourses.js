const express = require("express");
const router = express.Router();
const db = require("../database");

// Sending course data from database to SearchCourses component
router.get("/Sok_kurser", async (req, res) => {
  var returnKurs = [];
  let sql = "SELECT DISTINCT * FROM Termin";
  for (let i = 1; i <= 10; i++) {
    var kurs = await db.allAsync(sql + i);
    kurs.forEach((element) => {
      returnKurs.push(element);
    });
  }
  return res.json(returnKurs);
});

module.exports = router;
