const express = require('express');
const { validate } = require('../util/helpers');
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
    ], validate,
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
    ], validate,
    eventCtrl.updateEvent
);

router.get('/filter',
    [
        body('start_time').not().isEmpty(),
        body('end_time').not().isEmpty()
    ],
    eventCtrl.filterByDate
);


router.get('/rsvp', eventCtrl.listRsvp);

router.delete('/:eventId', eventCtrl.deleteEvent);


module.exports = router;