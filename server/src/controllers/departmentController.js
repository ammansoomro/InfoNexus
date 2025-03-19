const departmentService = require('../services/departmentService');

const createDepartment = async (req, res) => {
    try {
        const department = await departmentService.createDepartment(req.body);
        res.status(201).json(department);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

const updateDepartment = async (req, res) => {
    try {
        const updatedDepartment = await departmentService.updateDepartment(req.params.id, req.body);
        res.status(200).json(updatedDepartment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteDepartment = async (req, res) => {
    try {
        await departmentService.deleteDepartment(req.params.id);
        res.status(200).json({ message: 'Department has been deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getDepartment = async (req, res) => {
    try {
        const department = await departmentService.getDepartment(req.params.id);
        res.status(200).json(department);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllDepartments = async (req, res) => {
    try {
        const departments = await departmentService.getAllDepartments(req.query.new);
        res.status(200).json(departments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getDepartmentBackground = async (req, res) => {
    try {
        const background = await departmentService.getDepartmentBackground(req.params.code);
        res.status(200).json(background);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const searchDepartment = async (req, res) => {
    try {
        const departments = await departmentService.searchDepartment(req.params.name);
        res.status(200).json(departments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createDepartment, updateDepartment, deleteDepartment, getDepartment, getAllDepartments, getDepartmentBackground, searchDepartment };
