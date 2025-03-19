const materialService = require('../services/materialService');

exports.createMaterial = async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).json('You are not allowed to create materials');

    try {
        const savedMaterial = await materialService.createMaterial(req.body);
        res.status(200).json(savedMaterial);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.updateMaterial = async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).json('You are not allowed to update materials');

    try {
        const updatedMaterial = await materialService.updateMaterial(req.params.id, req.body);
        res.status(200).json(updatedMaterial);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.deleteMaterial = async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).json('You are not allowed to delete materials');

    try {
        await materialService.deleteMaterial(req.params.id);
        res.status(200).json('Material has been deleted');
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getMaterialById = async (req, res) => {
    try {
        const material = await materialService.getMaterialById(req.params.id);
        res.status(200).json(material);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getAllMaterials = async (req, res) => {
    try {
        const materials = await materialService.getAllMaterials();
        res.status(200).json(materials);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getMaterialsByCourse = async (req, res) => {
    try {
        const materials = await materialService.getMaterialsByCourse(req.params.course_id);
        res.status(200).json(materials);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getMaterialsByTeacher = async (req, res) => {
    try {
        const materials = await materialService.getMaterialsByTeacher(req.params.teacher_id);
        res.status(200).json(materials);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getMaterialsByCourseAndTeacher = async (req, res) => {
    try {
        const materials = await materialService.getMaterialsByCourseAndTeacher(req.params.course_id, req.params.teacher_id);
        res.status(200).json(materials);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getMaterialsByCourseTeacherAndType = async (req, res) => {
    if (!req.user) return res.status(403).json('You are not allowed to view materials');

    try {
        const materials = await materialService.getMaterialsByCourseTeacherAndType(req.params.course_id, req.params.teacher_id, req.params.type);
        res.status(200).json(materials);
    } catch (err) {
        res.status(500).json(err.message);
    }
};
