const { mongoose, Schema } = require('mongoose');

// Define the schema
const eventSchema = Schema({
    name: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    eventType: { type: String, required: true },
    rsvp: { type: String }
    
});

// Create event model
const Event = mongoose.model('Event', eventSchema);

export default Event;

