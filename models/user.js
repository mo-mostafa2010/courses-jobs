const mongoose = require('mongoose');

const user = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    userSkills: Array
});
module.exports = mongoose.model("user", user);