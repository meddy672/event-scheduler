const { formatDate, validate } = require('../util/helpers');
const Event = require('../models/event');
const moment = require('moment');


/**
 * creates a new event and saves it to database
 */
exports.createEvent = async (req, res, next) => {
    const start = formatDate(req.body.start);
    const end = formatDate(req.body.end);

    const eventObj = {
        name: req.body.name,
        start: start,
        end: end,
        description: req.body.description,
        location: req.body.location,
        eventType: req.body.type,
        rsvp:[]
    };
    try {
        const event = new Event(eventObj);
        await event.save();
        res.status(201).json({
            message: 'Event created successfully',
            event: event
        }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error has occured'
        })
    }


}



/**
 * updates an event based on the eventId
 */
exports.updateEvent = async (req, res, next) => {
    const eventId = req.params.eventId;
    const start = formatDate(req.body.start);
    const end = formatDate(req.body.end);
    try {
        const event = await Event.findById({ _id: eventId });
        event.name = req.body.name;
        event.start = start;
        event.end = end;
        event.description = req.body.description;
        event.location = req.body.location;
        event.eventType = req.body.type;
        req.body.rsvp ? event.rsvp.push(req.body.rsvp) : false; // TODO: Bug Fix Multiple statuses
        await event.save();
        res.status(200).json({
            message: 'Event updated successfully',
            event: event
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error has occured'
        });
    }
}


/**
 * delete an event by eventId
 */
exports.deleteEvent = async (req, res, next) => {
    const eventId = req.params.eventId;
    try {
        await Event.deleteOne({ _id: eventId });
        res.status(200).json({
            message: 'Event deleted successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error has occurred',
        });
    }

}



/**
 * filters events between start and end date and time
 */
exports.filterByDate = async (req, res, next) => {
    const filterDate = formatDate(req.body.date);
    try {
        const events = await Event.find();
        const filteredEvents = events.filter(event => {
            return moment(req.body.date).isBetween(event.start, event.end, 'hour', '[)');
        });
        res.status(200).json({
            message: 'Events found between ' + filterDate,
            events: filteredEvents
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error has occurred'
        })
    }

}


/**
 * list rsvp's for a particular event
 */
exports.listRsvp = async (req, res, next) => {
    const eventId = req.params.eventId;
    try {
        const event = await Event.findById({ _id: eventId });
        res.status(200).json({
            message: 'RSVP for ' + event.name,
            rsvp: event.rsvp
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error has occurred'
        });
    }
}



/**
 * allow user to rsvp for a particular event
 */
exports.rsvp = async (req, res, next) => {
    const eventId = req.params.eventId;
    try {
        const event = await Event.findById({ _id: eventId });
        const rsvp = {
            name: req.body.fullName,
            status: req.body.status
        }
        event.rsvp.push(rsvp); // TODO: Bug Fix Multiple statuses
        res.status(200).json({
            message: 'RSVP created successfully',
            rsvp: event.rsvp
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error has occurred'
        })
    }
}