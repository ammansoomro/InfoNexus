const projectService = require('../services/projectService');

const createProject = async (req, res) => {
    try {
        const project = await projectService.createProject(req.body);
        res.status(200).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateProject = async (req, res) => {
    try {
        const project = await projectService.updateProject(req.params.id, req.body);
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteProject = async (req, res) => {
    try {
        await projectService.deleteProject(req.params.id);
        res.status(200).json('Project has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
};

const getProjectById = async (req, res) => {
    try {
        const project = await projectService.getProjectById(req.params.id);
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects(req.query.new);
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
};

const searchProjects = async (req, res) => {
    try {
        const projects = await projectService.searchProjects(req.params.search);
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getProjectsByType = async (req, res) => {
    try {
        const projects = await projectService.getProjectsByType(req.params.type);
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getProjectsByDomain = async (req, res) => {
    try {
        const projects = await projectService.getProjectsByDomain(req.params.domain);
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getProjectsByTypeAndDomain = async (req, res) => {
    try {
        const projects = await projectService.getProjectsByTypeAndDomain(req.params.type, req.params.domain);
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { createProject, updateProject, deleteProject, getProjectById, getAllProjects, searchProjects, getProjectsByType, getProjectsByDomain, getProjectsByTypeAndDomain };
