//Libraries
const sqlite3 = require('sqlite3').verbose();
const { response } = require('express');
const express = require('express'); 
const { json } = require('express/lib/response');
const router = express.Router(); 
const bcrypt = require('bcrypt');
const nJwt = require('njwt');
const jwt = require('jsonwebtoken')

//Modules
const db = require('../database')
const loginAPI = require('../api/LogIn')



// Verify token
const verifyToken = (req, res, next ) => {

    // Get auth header value
    const bearerHeader = req.headers['authorization']

    // Check if bearer is undefined
    console.log('this is the token that is not defined: ' + bearerHeader)
    if (typeof bearerHeader !== 'undefined' ){
    
        // Split at space
        const bearer = bearerHeader.split(' ')

        // Get token from array
        const bearerToken = bearer[1]
        
        // Set the token
        req.token = bearerToken

        next()

    
    }else {
        res.sendStatus(403)
        }
    }


router.get('/isUserAuth', verifyToken, (req,res) => {
    return res.json({auth: true, token: token, message: 'You are authenticated'})
    })

router.post('/isUserAuth'), verifyToken, (req,res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403)
        } else {
            req.json({
                message : 'post created',
                authData 
            })
        }
    }
    )
}
    
     