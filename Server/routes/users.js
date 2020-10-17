const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Register routes
router.post('/register', (req, res) => {
    let newUser = new User({
       name: req.body.name,
       email: req.body.email,
       username: req.body.username,
       password: req.body.password 
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: 'Failed to register user'})
        } else {
            res.json({success: true, msg:'User Registered'})
        }
    })
});

// Authentication routes
router.post('/authenticate', (req, res) => {
    res.send('Authenticate')
});

// Profile
router.get('/profile', (req,res) => {
    res.send('profile')
});


module.exports = router;