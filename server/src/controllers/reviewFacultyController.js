const reviewFacultyService = require('../services/reviewFacultyService');

const createReviewFaculty = async (req, res) => {
    try {
        const savedReviewFaculty = await reviewFacultyService.createReviewFaculty(req.body);
        res.status(200).json(savedReviewFaculty);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateReviewFaculty = async (req, res) => {
    try {
        const updatedReviewFaculty = await reviewFacultyService.updateReviewFaculty(req.params.id, req.body);
        res.status(200).json(updatedReviewFaculty);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteReviewFaculty = async (req, res) => {
    try {
        const message = await reviewFacultyService.deleteReviewFaculty(req.params.id);
        res.status(200).json(message);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getReviewFacultyByFacultyId = async (req, res) => {
    try {
        const reviewFaculty = await reviewFacultyService.getReviewFacultyByFacultyId(req.params.faculty_id);
        res.status(200).json(reviewFaculty);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllReviewFaculties = async (req, res) => {
    try {
        const reviewFaculties = await reviewFacultyService.getAllReviewFaculties();
        res.status(200).json(reviewFaculties);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getUpvoteCount = async (req, res) => {
    try {
        const upvoteCount = await reviewFacultyService.getUpvoteCount(req.params.faculty_id);
        res.status(200).json(upvoteCount);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getDownvoteCount = async (req, res) => {
    try {
        const downvoteCount = await reviewFacultyService.getDownvoteCount(req.params.faculty_id);
        res.status(200).json(downvoteCount);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { createReviewFaculty, updateReviewFaculty, deleteReviewFaculty, getReviewFacultyByFacultyId, getAllReviewFaculties, getUpvoteCount, getDownvoteCount };
