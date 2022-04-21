const express = require('express')
const courseRoutes = require('./courseController')


//create Router
const router = express.Router()

//Get route, getting all courses 
router.get('/all', courseRoutes.getAll)


//Here further routes can be created for create, delete and get certain courses.

module.exports = router