const departmentService = require('../services/departmentService');

exports.createDepartment = async (req, res) => {
    try {
        const department = await departmentService.createDepartment(req.body);
        res.status(201).json(department);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

exports.updateDepartment = async (req, res) => {
    try {
        const updatedDepartment = await departmentService.updateDepartment(req.params.id, req.body);
        res.status(200).json(updatedDepartment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteDepartment = async (req, res) => {
    try {
        await departmentService.deleteDepartment(req.params.id);
        res.status(200).json({ message: 'Department has been deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDepartment = async (req, res) => {
    try {
        const department = await departmentService.getDepartment(req.params.id);
        res.status(200).json(department);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await departmentService.getAllDepartments(req.query.new);
        res.status(200).json(departments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDepartmentBackground = async (req, res) => {
    try {
        const background = await departmentService.getDepartmentBackground(req.params.code);
        res.status(200).json(background);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.searchDepartment = async (req, res) => {
    try {
        const departments = await departmentService.searchDepartment(req.params.name);
        res.status(200).json(departments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
