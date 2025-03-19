const ReviewFaculty = require('../models/ReviewFaculty');

class ReviewFacultyService {
    async createReviewFaculty(data) {
        const reviewFacultyExists = await ReviewFaculty.findOne({
            faculty_id: data.faculty_id,
            user_id: data.user_id
        });

        if (reviewFacultyExists) throw new Error('ReviewFaculty Already Exists');

        const newReviewFaculty = new ReviewFaculty(data);
        return await newReviewFaculty.save();
    }

    async updateReviewFaculty(id, data) {
        return await ReviewFaculty.findByIdAndUpdate(id, { $set: data }, { new: true });
    }

    async deleteReviewFaculty(id) {
        await ReviewFaculty.findByIdAndDelete(id);
        return 'ReviewFaculty has been deleted';
    }

    async getReviewFacultyByFacultyId(faculty_id) {
        return await ReviewFaculty.find({ faculty_id });
    }

    async getAllReviewFaculties() {
        return await ReviewFaculty.find();
    }

    async getUpvoteCount(faculty_id) {
        const reviewFaculty = await ReviewFaculty.find({ faculty_id });
        return reviewFaculty.reduce((count, review) => count + review.upvote, 0);
    }

    async getDownvoteCount(faculty_id) {
        const reviewFaculty = await ReviewFaculty.find({ faculty_id });
        return reviewFaculty.reduce((count, review) => count + review.downvote, 0);
    }
}

module.exports = new ReviewFacultyService();
