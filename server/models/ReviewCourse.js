const mongoose = require('mongoose');

const ReviewCourseSchema = new mongoose.Schema({
    course_id: {
        type: String,
    },
    user_id: {
        type: String,
    },
    review: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

module.exports = mongoose.model("ReviewCourse", ReviewCourseSchema);