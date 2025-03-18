const express = require('express');
const router = express.Router();
const verify = require('../middleware/verifyToken');
const courseController = require('../controllers/courseController');

// Course CRUD operations
router.post('/', verify, courseController.createCourse);
router.put('/:id', verify, courseController.updateCourse);
router.delete('/:id', verify, courseController.deleteCourse);
router.get('/find/:id', verify, courseController.getCourse);
router.get('/', verify, courseController.getAllCourses);
router.get('/search/:name', verify, courseController.searchCourse);
router.get('/searchcode/:code', verify, courseController.getCoursesByCode);
router.get('/uniquecodes', verify, courseController.getUniqueCodes);
router.get('/votes', verify, courseController.getVotesCount);
router.get('/rating', verify, courseController.getRatings);
router.get('/count', verify, courseController.countCourses);
router.get('/count/:code', verify, courseController.countByCode);
router.get('/page/:page', verify, courseController.paginateCourses);
router.get('/page/:page/:code', verify, courseController.paginateCoursesByCode);
router.get('/faculty/:course_id', verify, courseController.getFacultyForCourse);

module.exports = router;
