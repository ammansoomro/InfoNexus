const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    coursecode: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ""
    },
    credithours: {
        type: Number,
        default: 0
    },
    core_elective:{
        type: String,
        default: ""
    },
    courseOutline: {
        type: String,
        default: ""
    },
    courseImage: {
        type: String,
        default: ""
    }
}, { timestamps: true });

module.exports = mongoose.model("Course", CourseSchema);
