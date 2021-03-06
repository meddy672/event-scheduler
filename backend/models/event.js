const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const eventSchema = Schema({
    name: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    eventType: { type: String, required: true },
    rsvp: { type: Array }
    
});

module.exports = mongoose.model('Event', eventSchema);

