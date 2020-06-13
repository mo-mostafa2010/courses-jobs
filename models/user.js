const mongoose = require('mongoose');

const user = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String
});
module.exports = mongoose.model("user", user);