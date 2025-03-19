const router = require('express').Router();
const departmentController = require('../controllers/departmentController');
const verify = require('../middleware/verifyToken'); 

router.post('/', verify, departmentController.createDepartment);
router.put('/:id', verify, departmentController.updateDepartment);
router.delete('/:id', verify, departmentController.deleteDepartment);
router.get('/find/:id', verify, departmentController.getDepartment);
router.get('/', verify, departmentController.getAllDepartments);
router.get('/backgroundpicture/:code', verify, departmentController.getDepartmentBackground);
router.get('/search/:name', verify, departmentController.searchDepartment);

module.exports = router;
