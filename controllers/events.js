const { formatDate, validate } = require('../util/helpers');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const events = [];


/**
 * creates a new event and saves it to database
 */
exports.createEvent = (req, res, next) => {
    const start = formatDate(req.body.start);
    const end = formatDate(req.body.end);

    const event = {
        id: uuidv4(),
        name: req.body.name,
        start: start,
        end: end,
        description: req.body.description,
        location: req.body.location,
        type: req.body.type,
        rsvp:[]
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
    const start = formatDate(req.body.start);
    const end = formatDate(req.body.end);

    const updatedEvents = events.map(event => {
        if (event.id === eventId) {
            return {
                ...event,
                name: req.body.name,
                start: start,
                end: end,
                description: req.body.description,
                location: req.body.location,
                type: req.body.type,
                rsvp:[]
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
 * removes an event based eventId
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
 * filters events between start and end date and time.
 */
exports.filterByDate = (req, res, next) => {
    const filterDate = formatDate(req.body.date);
    const filteredEvents = events.filter(event => {
        return moment(req.body.date).isBetween(event.start, event.end, 'hour', '[)');
    });
    res.status(200).json({
        message: 'Events found between ' + filterDate,
        events: filteredEvents
    });
}


/**
 * list rsvp's for a particular event.
 */
exports.listRsvp = (req, res, next) => {
    const eventId = req.params.eventId;
    const event = events.find(event => event.id === eventId);
    res.status(200).json({
        message: 'RSVP for ' + event.name,
        rsvp: event.rsvp
    });
}



/**
 * allow user to rsvp for a particular event.
 */
exports.rsvp = (req, res, next) => {
    const eventId = req.params.eventId;
    const event = events.find(event => event.id === eventId);
    const rsvp = {
        name: req.body.fullName,
        status: req.body.status
    }
    event.rsvp.push(rsvp);
    res.status(200).json({
        message: 'RSVP created successfully',
        rsvp: event.rsvp
    });
}