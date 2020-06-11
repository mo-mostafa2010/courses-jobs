const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const course = require('../api/models/course');

router.post('/', (req, res, next)=>{
    const newCourse = new course({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
    });
    console.log("rec", req);
    newCourse.save().then(res=>{
        console.log('saved')
    }).catch(err=>{
        console.log("error", err);
    })
    res.status(201).json({
        msg: 'succrss', 
        data: newCourse
    })
    res.status(404).json({
        msg: 'a7la mesa'
    })
})

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
  

 
module.exports = router;
  