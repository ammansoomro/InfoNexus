const router = require('express').Router();
const announcementController = require('../controllers/announcementController');
const verify = require("../middleware/verifyToken"); 

router.post('/', verify, announcementController.createAnnouncement);
router.put('/:id', verify, announcementController.updateAnnouncement);
router.delete('/:id', verify, announcementController.deleteAnnouncement);
router.get('/find/:id', verify, announcementController.getAnnouncement);
router.get('/', verify, announcementController.getAllAnnouncements);
router.get('/find/type/:type', verify, announcementController.getAnnouncementsByType);

module.exports = router;
