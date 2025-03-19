const router = require('express').Router();
const reviewFacultyController = require('../controllers/reviewFacultyController');
const verify = require('../middlewares/verifyToken');

router.post('/', verify, reviewFacultyController.createReviewFaculty);
router.put('/:id', verify, reviewFacultyController.updateReviewFaculty);
router.delete('/:id', verify, reviewFacultyController.deleteReviewFaculty);
router.get('/find/:faculty_id', verify, reviewFacultyController.getReviewFacultyByFacultyId);
router.get('/', verify, reviewFacultyController.getAllReviewFaculties);
router.get('/upvote/:faculty_id', verify, reviewFacultyController.getUpvoteCount);
router.get('/downvote/:faculty_id', verify, reviewFacultyController.getDownvoteCount);

module.exports = router;
