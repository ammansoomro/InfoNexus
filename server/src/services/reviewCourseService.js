const ReviewCourse = require('../models/ReviewCourse');

exports.createReviewCourse = async (data) => {
    const reviewCourseExists = await ReviewCourse.findOne({
        course_id: data.course_id,
        user_id: data.user_id
    });

    if (reviewCourseExists) throw new Error('ReviewCourse Already Exists');

    const newReviewCourse = new ReviewCourse(data);
    return await newReviewCourse.save();
};

exports.updateReviewCourse = async (id, data) => {
    return await ReviewCourse.findByIdAndUpdate(id, { $set: data }, { new: true });
};

exports.deleteReviewCourse = async (id) => {
    return await ReviewCourse.findByIdAndDelete(id);
};

exports.getReviewCourseByCourseId = async (course_id) => {
    return await ReviewCourse.find({ course_id }).populate('user_id', 'name');
};

exports.getAllReviewCourses = async () => {
    return await ReviewCourse.find();
};

exports.getUpvoteCount = async (course_id) => {
    const reviewCourses = await ReviewCourse.find({ course_id });
    return reviewCourses.reduce((acc, review) => acc + review.upvote, 0);
};

exports.getDownvoteCount = async (course_id) => {
    const reviewCourses = await ReviewCourse.find({ course_id });
    return reviewCourses.reduce((acc, review) => acc + review.downvote, 0);
};

exports.getRating = async (course_id) => {
    const reviewCourses = await ReviewCourse.find({ course_id });
    const ratingSum = reviewCourses.reduce((acc, review) => acc + review.rating, 0);
    return (ratingSum / (reviewCourses.length || 1)).toFixed(2);
};
