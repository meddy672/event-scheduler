const { validationResult } = require('express-validator');
const moment = require('moment');
const events = [];

exports.createEvent = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error(errors);
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    const event = {
        name: req.body.name,
        start_time: moment(req.body.start_time),
        end_time: req.body.end_time,
        description: req.body.description,
        location: req.body.location,
        type: req.body.type
    };
    events.push(event);
    console.log(events);
    res.status(200).json({
        message: 'Post created successfully',
        event: event
    })

}

exports.updateEvent = (req, res, next) => {
    
}

exports.deleteEvent = (req, res, next) => {
    
}