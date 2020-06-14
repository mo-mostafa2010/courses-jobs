const mongoose = require('mongoose');

const course = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    courseName: String,
    courseDesc: String,
    courseURL: String,
    instructorName: String,
    courseSkils: Array
});
module.exports = mongoose.model("course", course);