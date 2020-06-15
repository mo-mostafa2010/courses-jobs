const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const course = require('../models/course');

router.post('/', (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*"); 
    const newCourse = new course({
        _id: mongoose.Types.ObjectId(),
        courseName: req.body.courseName,
        courseDesc: req.body.courseDesc,
        courseURL: req.body.courseURL,
        instructorName: req.body.instructorName,
        courseSkils: req.body.courseSkils,
        CourseDesc: req.body.CourseDesc,
        CourseLvl: req.body.CourseLvl,
        CourseDuration: req.body.ourseDuration
    });
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
    res.header("Access-Control-Allow-Origin", "*"); 
    course.findById(req.params.id, (err, res2)=>{
        if(err){
            res.send(err);
        }
        else
        res.send(res2);
    })
});


router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    course.find({}, (err, res2)=>{
        if(err){
            res.send(err);
        }
        else
        res.send(res2);
    })
});


router.get('/search/:key', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    let key = req.params.key; 
    course.find({courseName: { $regex: '.*' + key + '.*' } }, (err, res2)=>{
        if(err){
            res.send(err);
        }
        else
        res.send(res2);
    })
});
  

 
module.exports = router;
  