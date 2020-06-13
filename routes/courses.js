const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const course = require('../models/course');

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

router.get('/:id', function(req, res, next) {
    course.findById(req.params.id, (err, res2)=>{
        if(err){
            res.send(err);
        }
        else
        res.send(res2);
    })
});


router.get('/', function(req, res, next) {
    course.find({}, (err, res2)=>{
        if(err){
            res.send(err);
        }
        else
        res.send(res2);
    })
});
  

 
module.exports = router;
  