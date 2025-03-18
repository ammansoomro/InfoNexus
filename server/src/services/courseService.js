const Course = require('../models/Course');
const Review = require('../models/ReviewCourse');
const Faculty = require('../models/Faculty');

exports.createCourse = async (data) => {
    const courseExists = await Course.findOne({ name: data.name });
    if (courseExists) {
        throw { status: 400, message: 'Course Already Exists' };
    }
    return new Course(data).save();
};

exports.updateCourse = async (id, data) => {
    return Course.findByIdAndUpdate(id, { $set: data }, { new: true });
};

exports.deleteCourse = async (id) => {
    await Course.findByIdAndDelete(id);
    await Review.deleteMany({ course_id: id });
};

exports.getCourse = async (id) => {
    return Course.findById(id);
};

exports.getAllCourses = async (isNew) => {
    if (isNew) {
        return Course.aggregate([{ $sample: { size: 5 } }]);
    }
    return Course.find().sort({ name: 1 });
};

exports.searchCourse = async (name) => {
    return Course.find({
        $or: [
            { name: new RegExp(name, 'i') },
            { coursecode: new RegExp(name, 'i') }
        ]
    });
};

exports.getCoursesByCode = async (code) => {
    return Course.find({ coursecode: new RegExp(code, 'i') });
};

exports.getUniqueCodes = async () => {
    const courses = await Course.find();
    const uniqueCodes = new Set();
    
    courses.forEach(course => {
        uniqueCodes.add(course.coursecode.substring(0, 2));
    });
    
    return Array.from(uniqueCodes);
};

exports.getVotesCount = async () => {
    const reviews = await Review.find();
    const voteCounts = {};
    
    for (const review of reviews) {
        if (!voteCounts[review.course_id]) {
            voteCounts[review.course_id] = { upvote: 0, downvote: 0 };
        }
        voteCounts[review.course_id].upvote += review.upvote;
        voteCounts[review.course_id].downvote += review.downvote;
    }
    
    return Object.entries(voteCounts).map(([course_id, votes]) => ({ course_id, ...votes }));
};

exports.getRatings = async () => {
    const reviews = await Review.find();
    const courseRatings = {};
    
    for (const review of reviews) {
        if (!courseRatings[review.course_id]) {
            courseRatings[review.course_id] = { sum: 0, count: 0 };
        }
        courseRatings[review.course_id].sum += review.rating;
        courseRatings[review.course_id].count += 1;
    }
    
    return Object.entries(courseRatings).map(([course_id, data]) => ({
        course_id,
        rating: parseFloat((data.sum / data.count).toFixed(2))
    }));
};

exports.getFacultyForCourse = async (course_id) => {
    return Faculty.find({ course_id });
};
