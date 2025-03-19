const Project = require('../models/Project');

exports.createProject = async (data) => {
    const projectExists = await Project.findOne({ name: data.name });
    if (projectExists) throw new Error('Project Already Exists');

    const newProject = new Project(data);
    return await newProject.save();
};

exports.updateProject = async (id, data) => {
    return await Project.findByIdAndUpdate(id, { $set: data }, { new: true });
};

exports.deleteProject = async (id) => {
    return await Project.findByIdAndDelete(id);
};

exports.getProjectById = async (id) => {
    return await Project.findById(id);
};

exports.getAllProjects = async (query) => {
    return query ? await Project.find().sort({ _id: -1 }).limit(5) : await Project.find().sort({ name: 1 });
};

exports.searchProjects = async (search) => {
    return await Project.find({ name: { $regex: search, $options: 'i' } });
};

exports.getProjectsByType = async (type) => {
    return await Project.find({ type });
};

exports.getProjectsByDomain = async (domain) => {
    return await Project.find({ domain });
};

exports.getProjectsByTypeAndDomain = async (type, domain) => {
    return await Project.find({ type, domain });
};
