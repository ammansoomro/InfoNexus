const mongoose = require('mongoose');

const ReviewFacultySchema = new mongoose.Schema({
    faculty_id: {
        type: String,
    },
    user_id: {
        type: String,
    },
    review: {
        type: String,
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default:   0
    },

}, { timestamps: true });

module.exports = mongoose.model("ReviewFaculty", ReviewFacultySchema);