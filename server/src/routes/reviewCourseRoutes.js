const router = require('express').Router();
const verify = require('../middleware/verifyToken');
const reviewCourseController = require('../controllers/reviewCourseController');

router.post('/', verify, reviewCourseController.createReviewCourse);
router.put('/:id', verify, reviewCourseController.updateReviewCourse);
router.delete('/:id', verify, reviewCourseController.deleteReviewCourse);
router.get('/find/:course_id', verify, reviewCourseController.getReviewCourseByCourseId);
router.get('/', verify, reviewCourseController.getAllReviewCourses);
router.get('/upvote/:course_id', verify, reviewCourseController.getUpvoteCount);
router.get('/downvote/:course_id', verify, reviewCourseController.getDownvoteCount);
router.get('/rating/:course_id', verify, reviewCourseController.getRating);

module.exports = router;
