const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const job = require('../models/job');

router.post('/', (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*"); 
    const newjob = new job({
        _id: mongoose.Types.ObjectId(),
        jobTitle: req.body.jobTitle,
        jobProvider: req.body.jobProvider,
        jobSkills: req.body.jobSkills,
        jobURL: req.body.jobURL
    });
    newjob.save().then(res=>{
        console.log('saved')
    }).catch(err=>{
        console.log("error", err);
    })
    res.status(201).json({
        msg: 'succrss', 
        data: newjob
    })
    res.status(404).json({
        msg: 'a7la mesa'
    })
})

router.get('/:id', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    job.findById(req.params.id, (err, res2)=>{
        if(err){
            res.send(err);
        }
        else
        res.send(res2);
    })
});


router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    job.find({}, (err, res2)=>{
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
    job.find({jobTitle: { $regex: '.*' + key + '.*' } }, (err, res2)=>{
        if(err){
            res.send(err);
        }
        else
        res.send(res2);
    })
});
  

 
module.exports = router;
  