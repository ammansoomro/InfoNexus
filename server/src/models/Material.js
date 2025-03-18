const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: ""
    },
    course_id: {
        // Get From Course Schema
        type: String,
    },
    teacher_id: {
        // Get From Teacher Schema
        type: String,
    },
    file: {
        type: String,
        default: ""
    },
    semester: {
        type: String,
        default: ""
    },
}, { timestamps: true });

module.exports = mongoose.model("Material", MaterialSchema);

