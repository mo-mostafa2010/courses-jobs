const mongoose = require('mongoose');

const course = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String
});
module.exports = mongoose.model("course", course);