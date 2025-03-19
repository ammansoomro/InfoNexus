const facultyService = require('../services/facultyService');

exports.createFaculty = async (req, res) => {
    try {
        if (!req.user.isAdmin) return res.status(403).json('You are not allowed to create faculties');
        const faculty = await facultyService.createFaculty(req.body);
        res.status(200).json(faculty);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updateFaculty = async (req, res) => {
    try {
        if (!req.user.isAdmin) return res.status(403).json('You are not allowed to update faculties');
        const faculty = await facultyService.updateFaculty(req.params.id, req.body);
        res.status(200).json(faculty);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteFaculty = async (req, res) => {
    try {
        if (!req.user.isAdmin) return res.status(403).json('You are not allowed to delete faculties');
        await facultyService.deleteFaculty(req.params.id);
        res.status(200).json('Faculty has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getFacultyById = async (req, res) => {
    try {
        const faculty = await facultyService.getFacultyById(req.params.id);
        res.status(200).json(faculty);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getAllFaculties = async (req, res) => {
    try {
        const faculties = await facultyService.getAllFaculties(req.query.new);
        res.status(200).json(faculties);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.searchFaculties = async (req, res) => {
    try {
        const faculties = await facultyService.searchFaculties(req.params.searchString);
        res.status(200).json(faculties);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.paginateFaculties = async (req, res) => {
    try {
        const faculties = await facultyService.paginateFaculties(parseInt(req.params.page, 10));
        res.status(200).json(faculties);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getFacultiesByDepartment = async (req, res) => {
    try {
        const faculties = await facultyService.getFacultiesByDepartment(req.params.department);
        res.status(200).json(faculties);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getCoursesByFacultyId = async (req, res) => {
    try {
        const courses = await facultyService.getCoursesByFacultyId(req.params.id);
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
};
