const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mobile = require('../models/mobile'); 

const mobileRouter = express.Router();

mobileRouter.route('/')
.get((req,res,next) => {
    res.end("just checking --> nothing to do")
})
.post((req, res, next) => {
})
.put((req, res, next) => {
})
.delete((req, res, next) => {
});

mobileRouter.route('/create')
.get((req,res,next) => {
    res.render('newmobile.ejs', { title: 'Mobile Usage' });   
})

.post((req, res, next) => {
    mobile.create(req.body) 
    .then((mobilecreated) => { 
        console.log(mobilecreated)
        mobile.find()
         .then((mobilefound) => { 
                res.render('currentorder',{'mobilelist' : mobilefound, title:'All Mobiles'} );
        }, (err) => next(err))
    .catch((err) => next(err)); 
    }, (err) => next(err))
    .catch((err) => next(err)); 
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /mobiles/create');
})

.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not  supported on /mobiles/create');
    
});


module.exports = mobileRouter;