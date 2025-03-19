const router = require('express').Router();
const materialController = require('../controllers/materialController');
const verify = require('../middleware/verifyToken');

router.post('/', verify, materialController.createMaterial);
router.put('/:id', verify, materialController.updateMaterial);
router.delete('/:id', verify, materialController.deleteMaterial);
router.get('/find/:id', verify, materialController.getMaterialById);
router.get('/', verify, materialController.getAllMaterials);
router.get('/bycourse/:course_id', verify, materialController.getMaterialsByCourse);
router.get('/byteacher/:teacher_id', verify, materialController.getMaterialsByTeacher);
router.get('/bycourseteacher/:course_id/:teacher_id', verify, materialController.getMaterialsByCourseAndTeacher);
router.get('/bycourseteachertype/:course_id/:teacher_id/:type', verify, materialController.getMaterialsByCourseTeacherAndType);

module.exports = router;
