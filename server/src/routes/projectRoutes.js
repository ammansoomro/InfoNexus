const router = require('express').Router();
const projectController = require('../controllers/projectController');
const verify = require('../middleware/verifyToken'); 
router.post('/', verify, projectController.createProject);
router.put('/:id', verify, projectController.updateProject);
router.delete('/:id', verify, projectController.deleteProject);
router.get('/find/:id', verify, projectController.getProjectById);
router.get('/', verify, projectController.getAllProjects);
router.get('/search/:search', verify, projectController.searchProjects);
router.get('/type/:type', verify, projectController.getProjectsByType);
router.get('/domain/:domain', verify, projectController.getProjectsByDomain);
router.get('/type/:type/domain/:domain', verify, projectController.getProjectsByTypeAndDomain);

module.exports = router;
