const { validationResult } = require('express-validator');
const { formatDate } = require('../util/dates');
const { v4: uuidv4 } = require('uuid');
const events = [];


/**
 * creates a new event and saves it to database
 */
exports.createEvent = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error(errors);
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    const start_time = formatDate(req.body.start_time);
    const end_time = formatDate(req.body.end_time);
    const event = {
        id: uuidv4(),
        name: req.body.name,
        start_time: start_time,
        end_time: end_time,
        description: req.body.description,
        location: req.body.location,
        type: req.body.type
    };
    events.push(event);
    res.status(200).json({
        message: 'Event created successfully',
        event: event
    });

}



/**
 * updates an event based on the eventId
 */
exports.updateEvent = (req, res, next) => {
    const eventId = req.params.eventId;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed, entered data is incorrect.');
      error.statusCode = 422;
      throw error;
    }
    const start_time = formatDate(req.body.start_time);
    const end_time = formatDate(req.body.end_time);
    const updatedEvents = events.map(event => {
        if (event.id === eventId) {
            return {
                ...event,
                name: req.body.name,
                start_time: start_time,
                end_time: end_time,
                description: req.body.description,
                location: req.body.location,
                type: req.body.type
            }
        }
        return event;
    })
    res.status(200).json({
        message: 'Event updated successfully',
        event: updatedEvents
    });
}


/**
 * deletes an event based eventId
 */
exports.deleteEvent = (req, res, next) => {
    const eventId = req.params.eventId;
    const newEvents = events.filter(event => event.id !== eventId);
    res.status(200).json({
        message: 'Event deleted successfully',
        event: newEvents
    });
}


/**
 * 
 */
exports.filterByDate = (req, res, next) => {
    
}


/**
 * 
 */
exports.listRsvp = (req, res, next) => {
    
}