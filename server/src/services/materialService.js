const Material = require('../models/Material');

exports.createMaterial = async (data) => {
    const materialExists = await Material.findOne({ name: data.name, course_id: data.course_id, teacher_id: data.teacher_id });
    if (materialExists) throw new Error('Material Already Exists');
    
    const newMaterial = new Material(data);
    return await newMaterial.save();
};

exports.updateMaterial = async (id, data) => {
    return await Material.findByIdAndUpdate(id, { $set: data }, { new: true });
};

exports.deleteMaterial = async (id) => {
    return await Material.findByIdAndDelete(id);
};

exports.getMaterialById = async (id) => {
    return await Material.findById(id);
};

exports.getAllMaterials = async () => {
    return await Material.find();
};

exports.getMaterialsByCourse = async (course_id) => {
    return await Material.find({ course_id });
};

exports.getMaterialsByTeacher = async (teacher_id) => {
    return await Material.find({ teacher_id });
};

exports.getMaterialsByCourseAndTeacher = async (course_id, teacher_id) => {
    return await Material.find({ course_id, teacher_id });
};

exports.getMaterialsByCourseTeacherAndType = async (course_id, teacher_id, type) => {
    return await Material.find({ course_id, teacher_id, type });
};
