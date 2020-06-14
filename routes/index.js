var express = require('express');
var router = express.Router();
const courses = require('./courses');
const jobs = require('./jobs');
const users = require('./users');

router.use('/users', users);
router.use('/courses', courses);
router.use('/jobs', jobs);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully'  })
});

/* GET home page. */
router.post('/', function(req, res, next) {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
   body: req.body  })
});

module.exports = router;
