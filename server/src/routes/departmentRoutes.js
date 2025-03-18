const router = require('express').Router();
const departmentController = require('../controllers/departmentController');

router.post('/', departmentController.createDepartment);
router.put('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);
router.get('/find/:id', departmentController.getDepartment);
router.get('/', departmentController.getAllDepartments);
router.get('/backgroundpicture/:code', departmentController.getDepartmentBackground);
router.get('/search/:name', departmentController.searchDepartment);

module.exports = router;
