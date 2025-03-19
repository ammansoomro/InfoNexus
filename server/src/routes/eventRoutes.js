const router = require('express').Router();
const eventController = require('../controllers/eventController');
const verify = require("../middleware/verifyToken"); 

router.post('/', verify, eventController.createEvent);
router.put('/:id', verify, eventController.updateEvent);
router.delete('/:id', verify, eventController.deleteEvent);
router.get('/find/:id', verify, eventController.getEvent);
router.get('/', verify, eventController.getAllEvents);
router.get('/findbyCode/:societyCode', verify, eventController.getEventsBySocietyCode);
router.get('/findbySocietyId/:societyId', verify, eventController.getEventsBySocietyId);

module.exports = router;
