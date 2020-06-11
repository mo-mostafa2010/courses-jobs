const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const course = require('../models/course');

router.post('/courses', (req, res, next)=>{
    const course = new course({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
    });
    console.log("rec", req);
    course.save().then(res=>{
        console.log('saved', res)
    }).catch(err=>{
        console.log("error", err);
    })
    res.send('respond with a resource');
    res.status(201).json({
        msg: 'succrss', 
        data: course
    })
    res.status(404).json({
        msg: 'a7la mesa'
    })
})
router.get('/courses', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  

 
module.exports = router;
  