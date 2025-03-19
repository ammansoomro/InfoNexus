const reviewCourseService = require('../services/reviewCourseService');

const createReviewCourse = async (req, res) => {
    try {
        const reviewCourse = await reviewCourseService.createReviewCourse(req.body);
        res.status(200).json(reviewCourse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateReviewCourse = async (req, res) => {
    try {
        const reviewCourse = await reviewCourseService.updateReviewCourse(req.params.id, req.body);
        res.status(200).json(reviewCourse);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteReviewCourse = async (req, res) => {
    try {
        await reviewCourseService.deleteReviewCourse(req.params.id);
        res.status(200).json('ReviewCourse has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
};

const getReviewCourseByCourseId = async (req, res) => {
    try {
        const reviewCourses = await reviewCourseService.getReviewCourseByCourseId(req.params.course_id);
        res.status(200).json(reviewCourses);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllReviewCourses = async (req, res) => {
    try {
        const reviewCourses = await reviewCourseService.getAllReviewCourses();
        res.status(200).json(reviewCourses);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUpvoteCount = async (req, res) => {
    try {
        const count = await reviewCourseService.getUpvoteCount(req.params.course_id);
        res.status(200).json(count);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getDownvoteCount = async (req, res) => {
    try {
        const count = await reviewCourseService.getDownvoteCount(req.params.course_id);
        res.status(200).json(count);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getRating = async (req, res) => {
    try {
        const rating = await reviewCourseService.getRating(req.params.course_id);
        res.status(200).json(rating);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { createReviewCourse, updateReviewCourse, deleteReviewCourse, getReviewCourseByCourseId, getAllReviewCourses, getUpvoteCount, getDownvoteCount, getRating };
