const express = require('express');
const { body } = require('express-validator');
const eventCtrl = require('../controllers/events');

const router = express.Router()

router.post('/',
    [
        body('name')
            .trim()
            .isLength({ min: 5 })
    ],
    eventCtrl.createEvent
);

router.put('/', eventCtrl.updateEvent);
router.delete('/', eventCtrl.deleteEvent);

module.exports = router;