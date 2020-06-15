var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const user = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  user.find({}, (err, res2)=>{
    res.send(res2);
  })
});

router.post('/', (req, res, next)=>{
  const newUser = new user({
      _id: mongoose.Types.ObjectId(),
      username: req.body.username,
      password: req.body.password,
      userSkills: req.body.userSkills
  });
  console.log("rec", req);
  newUser.save().then(res=>{
      console.log('saved')
  }).catch(err=>{
      console.log("error", err);
  })
  res.status(201).json({
      msg: 'succrss', 
      data: newUser
  })
  res.status(404).json({
      msg: 'a7la mesa'
  })
})

router.post('/login', (req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*"); 
  const currentUser = {
    username: req.body.username,
    password: req.body.password,
  }
  user.find({username: currentUser.username}, (err, res2)=>{
    if(res2.length > 0){
      if(res2[0].password == currentUser.password){
        res.status(201).json({
          msg: 'tmam zay el fol', 
          data: res2,
          err: false
      })  
      }
      else{
        res.status(201).json({
          msg: 'Password not match', 
          err: true
      })
      }
    }
    else{
      res.status(405).json({
        msg: 'User not found',
        err: true
      })
    }
  })
})

module.exports = router;
