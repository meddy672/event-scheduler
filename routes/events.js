const express = require('express');
const { body } = require('express-validator');
const { isDate } = require('moment');
const eventCtrl = require('../controllers/events');

const router = express.Router()

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

router.put('/', eventCtrl.updateEvent);
router.delete('/', eventCtrl.deleteEvent);

module.exports = router;