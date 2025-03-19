const router = require('express').Router();
const facultyController = require('../controllers/facultyController');
const verify = require('../middleware/verifyToken'); 

router.post('/', verify, facultyController.createFaculty);
router.put('/:id', verify, facultyController.updateFaculty);
router.delete('/:id', verify, facultyController.deleteFaculty);
router.get('/find/:id', verify, facultyController.getFacultyById);
router.get('/', verify, facultyController.getAllFaculties);
router.get('/search/:searchString', verify, facultyController.searchFaculties);
router.get('/page/:page', verify, facultyController.paginateFaculties);
router.get('/department/:department', verify, facultyController.getFacultiesByDepartment);
router.get('/courses/:id', verify, facultyController.getCoursesByFacultyId);

module.exports = router;
