const router = require('express').Router();
const facultyController = require('../controllers/facultyController');

router.post('/', facultyController.createFaculty);
router.put('/:id', facultyController.updateFaculty);
router.delete('/:id', facultyController.deleteFaculty);
router.get('/find/:id', facultyController.getFacultyById);
router.get('/', facultyController.getAllFaculties);
router.get('/search/:searchString', facultyController.searchFaculties);
router.get('/page/:page', facultyController.paginateFaculties);
router.get('/department/:department', facultyController.getFacultiesByDepartment);
router.get('/courses/:id', facultyController.getCoursesByFacultyId);

module.exports = router;
