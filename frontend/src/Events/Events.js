import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import axios from 'axios';

import './Events.css';

function Events() {
    const [events, setEvents] = useState([]);
    const [startTime, onChangeStartTime] = useState(new Date());

    /**
     * retrieve all events from sever
     */
    useEffect(() => {
        axios.get('http://localhost:3000/events')
            .then(({ data }) => {
                setEvents(data.events);
            });
    }, []);


    /**
     * allow user to rsvp to selected event
     */
    function rsvpToEvent(id) {
        console.log(id);
    }


    /**
     * allow user to rsvp to selected event
     */
    function deleteEvent(id) {
        console.log(id);
    }

    return (
        <div className="container Events">
            <h1>All Events</h1>
            <hr />
            {events.length > 0 && (
                <div className="row">
                    <label className="filter-label">Filter By Date</label>
                    <div className="mg-bottom-20">
                        <DateTimePicker onChange={onChangeStartTime} value={startTime} />
                    </div>
                    {events.map((event, index) => {
                        return (
                            <div key={index} className="col-md-4">
                                <div className="card" >
                                    <div className="card-body">
                                        <h3 className="card-title">
                                        <FontAwesomeIcon icon={faBullhorn} /> {event.name}
                                        </h3>
                                        <p className="card-text">{event.description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <label className="event-label">Event Type:</label> {event.eventType}
                                        </li>
                                        <li className="list-group-item">
                                            <label className="event-label">Starts On: </label> {event.start}
                                        </li>
                                        <li className="list-group-item">
                                            <label className="event-label">Ends On: </label> {event.end} 
                                        </li>
                                        <li className="list-group-item">
                                            <label className="event-label">Location:</label> {event.location}
                                        </li>
                                    </ul>
                                    <div className="card-body">
                                        <a onClick={() => rsvpToEvent(event._id)}  className="card-link">RSVP</a>
                                        <a className="card-link">Edit</a>
                                        <a onClick={() => deleteEvent(event._id)} className="card-link">Delete</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            )
            }
        </div>
    );

}

export default Events;