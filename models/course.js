const mongoose = require('mongoose');

const course = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    courseName: String,
    courseDesc: String,
    courseURL: String,
    instructorName: String,
    courseSkils: Array,
<<<<<<< HEAD
    CourseDesc: String,
    CourseLvl: String,
    CourseDuration: String
=======
    courseImg: String
>>>>>>> 9d5be5bde7c32c588aa4bf2bce130dc5ee7c707c
});

module.exports = mongoose.model("course", course);