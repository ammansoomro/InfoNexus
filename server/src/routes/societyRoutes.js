const router = require('express').Router();
const societyController = require('../controllers/societyController');
const verify = require('../middleware/verifyToken');

router.post('/', verify, societyController.createSociety);
router.put('/:id', verify, societyController.updateSociety);
router.delete('/:id', verify, societyController.deleteSociety);
router.get('/find/:id', verify, societyController.getSocietyById);
router.get('/', verify, societyController.getAllSocieties);
router.get('/search/:name', verify, societyController.searchSociety);
router.get('/random', verify, societyController.getRandomSociety);

module.exports = router;
