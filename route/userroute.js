const express = require('express');
const mongoose = require('mongoose')
const router = express.Router()

mongoose.connect('mongodb://localhost:27017/mernauth', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("connection successfull")
    }
})
var Usermodel = mongoose.model('users', { name: String, username: String, password: String });
router.post('/registeruser', (req, res) => {
    debugger;
    

    var newuser = new Usermodel({ name: req.body.name, username: req.body.username, password: req.body.password })
    newuser.save((err) => {
        if (err) {
            res.send('something is wrong')
        } else {
            res.send('User successfully register')
        }
    })
    
})
router.post('/loginuser', (req, res) => {
    Usermodel.find(
        {
            username: req.body.username,
            password: req.body.password,
            
        }, (err, documents) => {
            if (err) {
                res.send('Something Went Wrong')
            } else {
                if (documents.length == 0) {
                    res.send('Login Failed')
                } else {
                    res.send('Login successfull')
                }
            }
        }
    )
})
router.post('/userlist', (req, res) => {
    Usermodel.find({}, (err, document) => {
            if (err) {
                console.log(err)
            } else {
                res.send(document)
            }
    })
})
module.exports = router;