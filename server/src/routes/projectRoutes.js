const router = require('express').Router();
const projectController = require('../controllers/projectController');

router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);
router.get('/find/:id', projectController.getProjectById);
router.get('/', projectController.getAllProjects);
router.get('/search/:search', projectController.searchProjects);
router.get('/type/:type', projectController.getProjectsByType);
router.get('/domain/:domain', projectController.getProjectsByDomain);
router.get('/type/:type/domain/:domain', projectController.getProjectsByTypeAndDomain);

module.exports = router;
