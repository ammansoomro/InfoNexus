const courseService = require('../services/courseService');

exports.createCourse = async (req, res) => {
    try {
        const course = await courseService.createCourse(req.body);
        res.status(200).json(course);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const updatedCourse = await courseService.updateCourse(req.params.id, req.body);
        res.status(200).json(updatedCourse);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        await courseService.deleteCourse(req.params.id);
        res.status(200).json('Course has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getCourse = async (req, res) => {
    try {
        const course = await courseService.getCourse(req.params.id);
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await courseService.getAllCourses(req.query.new);
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.searchCourse = async (req, res) => {
    try {
        const courses = await courseService.searchCourse(req.params.name);
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getCoursesByCode = async (req, res) => {
    try {
        const courses = await courseService.getCoursesByCode(req.params.code);
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getUniqueCodes = async (req, res) => {
    try {
        const uniqueCodes = await courseService.getUniqueCodes();
        res.status(200).json(uniqueCodes);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getVotesCount = async (req, res) => {
    try {
        const votes = await courseService.getVotesCount();
        res.status(200).json(votes);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getRatings = async (req, res) => {
    try {
        const ratings = await courseService.getRatings();
        res.status(200).json(ratings);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.countCourses = async (req, res) => {
    try {
        const count = await courseService.countCourses();
        res.status(200).json(count);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.countByCode = async (req, res) => {
    try {
        const count = await courseService.countByCode(req.params.code);
        res.status(200).json(count);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.paginateCourses = async (req, res) => {
    try {
        const courses = await courseService.paginateCourses(req.params.page);
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.paginateCoursesByCode = async (req, res) => {
    try {
        const courses = await courseService.paginateCoursesByCode(req.params.page, req.params.code);
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getFacultyForCourse = async (req, res) => {
    try {
        const faculty = await courseService.getFacultyForCourse(req.params.course_id);
        res.status(200).json(faculty);
    } catch (err) {
        res.status(500).json(err);
    }
};
