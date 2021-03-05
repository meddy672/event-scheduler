const express = require('express');
const { body } = require('express-validator');
const eventCtrl = require('../controllers/events');

const router = express.Router();

router.post('/',
    [
        body('name').trim().not().isEmpty(),
        body('start_time').trim().not().isEmpty(),
        body('end_time').trim().not().isEmpty(),
        body('description').trim().not().isEmpty(),
        body('location').trim().not().isEmpty(),
        body('type').trim().not().isEmpty(),
    ],
    eventCtrl.createEvent
);


router.put('/:eventId',
    [
        body('name').trim().not().isEmpty(),
        body('start_time').trim().not().isEmpty(),
        body('end_time').trim().not().isEmpty(),
        body('description').trim().not().isEmpty(),
        body('location').trim().not().isEmpty(),
        body('type').trim().not().isEmpty(),
    ],
    eventCtrl.updateEvent
);

router.delete('/:eventId', eventCtrl.deleteEvent);
router.get('/filter', eventCtrl.filterByDate);
router.get('/rsvp', eventCtrl.listRsvp);


module.exports = router;