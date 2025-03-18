const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    picture: {
        type: String,
        default: ""
    },
    department: {
        type: String,
        default: ""
    },
    about : {
        type: String,
        default: ""
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default: 0
    },

}, { timestamps: true });

module.exports = mongoose.model("Faculty", FacultySchema);