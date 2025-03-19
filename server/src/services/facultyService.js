const Faculty = require('../models/Faculty');
const Review = require('../models/ReviewFaculty');
const Material = require('../models/Material');
const Course = require('../models/Course');

exports.createFaculty = async (data) => new Faculty(data).save();

exports.updateFaculty = async (id, data) => 
    Faculty.findByIdAndUpdate(id, { $set: data }, { new: true });

exports.deleteFaculty = async (id) => 
    Faculty.findByIdAndDelete(id);

exports.getFacultyById = async (id) => 
    Faculty.findById(id).lean();

exports.getAllFaculties = async (query) => 
    query ? Faculty.aggregate([{ $sample: { size: 6 } }]) : Faculty.find().sort({ name: 1 }).lean();

exports.searchFaculties = async (searchString) => 
    Faculty.find({ name: { $regex: searchString, $options: 'i' } }).lean();

exports.paginateFaculties = async (page, limit = 20) => 
    Faculty.find().skip((page - 1) * limit).limit(limit).lean();

exports.countFaculties = async () => Faculty.countDocuments();

exports.countByDepartment = async (department) => Faculty.countDocuments({ department });

exports.paginateByDepartment = async (page, department, limit = 20) => 
    Faculty.find({ department }).skip((page - 1) * limit).limit(limit).lean();

exports.getFacultiesByDepartment = async (department) => 
    Faculty.find({ department }).lean();

exports.getCoursesByFacultyId = async (id) => {
    const materials = await Material.find({ teacher_id: id });
    const courseIds = [...new Set(materials.map(m => m.course_id))];
    return Course.find({ _id: { $in: courseIds } }).lean();
};
