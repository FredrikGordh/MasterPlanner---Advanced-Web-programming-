const express = require("express");
const router = express.Router();
const db = require("../database");
const bcrypt = require("bcrypt");

// Receiving sign in credentials and creating a new user, with hashed password
router.post("/SignIn", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Hashing the password
  const salt = await bcrypt.genSalt(6);
  const hashedPassword = await bcrypt.hash(password, salt);
  const sql = "INSERT or IGNORE INTO users(email, password) VALUES (?,?)";
  const insertQuery =
    "INSERT or IGNORE INTO userInfo(Owner, imgUrl) VALUES (?,?)";
  const imgUrl = "https://bootdey.com/img/Content/avatar/avatar7.png";
  const user = await db.runAsync(insertQuery, [email, imgUrl]);
  const insert = await db.insertAsync(sql, email, hashedPassword);
});

module.exports = router;
