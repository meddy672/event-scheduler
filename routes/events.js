const express = require('express');
const { validate } = require('../util/helpers');
const { body } = require('express-validator');
const eventCtrl = require('../controllers/events');

const router = express.Router();

/**
 * route to create new event. checks for: name, start_time, end_time,
 * description, location, and type. if error is found validate middleware
 * throws an error.
 */
router.post('/',
    [
        body('name').trim().not().isEmpty(),
        body('start').trim().not().isEmpty(),
        body('end').trim().not().isEmpty(),
        body('description').trim().not().isEmpty(),
        body('location').trim().not().isEmpty(),
        body('type').trim().not().isEmpty(),
    ], validate,
    eventCtrl.createEvent
);


/**
 * route to update an event. require requestParam: eventId. 
 * checks for: name, start_time, end_time, description, location,
 * and type. if error is found validate middleware
 * throws an error.
 */

router.put('/:eventId',
    [
        body('name').trim().not().isEmpty(),
        body('start').trim().not().isEmpty(),
        body('end').trim().not().isEmpty(),
        body('description').trim().not().isEmpty(),
        body('location').trim().not().isEmpty(),
        body('type').trim().not().isEmpty(),
    ], validate,
    eventCtrl.updateEvent
);


/**
 * route to filter events by dates. checks for a date.
 * if error is found validate middleware throws an error.
 */

router.post('/filter',
    [body('date').not().isEmpty()], validate, eventCtrl.filterByDate
);


/**
 * route to list all the rsvp's for a particular event
 */
router.post('/rsvp/:eventId', eventCtrl.rsvp);


/**
 * route to list all the rsvp's for a particular event
 */
router.get('/rsvp', eventCtrl.listRsvp);



/**
 * route to delete event based on eventId.
 */
router.delete('/:eventId', eventCtrl.deleteEvent);


module.exports = router;