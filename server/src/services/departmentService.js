const Department = require('../models/Department');

exports.createDepartment = async (data) => {
    const departmentExists = await Department.findOne({ name: data.name });
    if (departmentExists) {
        throw { status: 400, message: 'Department Already Exists' };
    }
    return new Department(data).save();
};

exports.updateDepartment = async (id, data) => {
    return Department.findByIdAndUpdate(id, { $set: data }, { new: true });
};

exports.deleteDepartment = async (id) => {
    return Department.findByIdAndDelete(id);
};

exports.getDepartment = async (id) => {
    return Department.findById(id);
};

exports.getAllDepartments = async (isNew) => {
    if (isNew) {
        return Department.aggregate([{ $sample: { size: 6 } }]);
    }
    return Department.find().sort({ name: 1 });
};

exports.getDepartmentBackground = async (code) => {
    const department = await Department.findOne({ code });
    return department ? department.backgroundpicture : null;
};

exports.searchDepartment = async (name) => {
    return Department.find({ name: new RegExp(name, 'i') });
};
