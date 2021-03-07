import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';

import './Events.css';

function Events() {
    const [events, setEvents] = useState([]);
    const [startTime, onChangeStartTime] = useState(new Date());
    let mounted = true;
    
    /**
     * retrieve all events from sever
     */
    useEffect(() => {
        axios.get('http://localhost:3000/events')
            .then(({ data }) => {
                if (mounted) {
                    setEvents(data.events);
                }
            });
        
        return () => { mounted = false; }
    }, [deleteEvent]);


    /**
     * allow user to rsvp to selected event
     */
    function rsvpToEvent(id) {
        console.log(id);
    }


    /**
     * allow user to rsvp to selected event
     */
    async function deleteEvent(id) {
        const data = await axios.delete('http://localhost:3000/events/' + id);
        console.log(data);
    }

    return (
        <div className="container Events">
            <h1>All Events <FontAwesomeIcon icon={faBullhorn} /></h1>
            <hr />
            {events.length > 0 && (
                <div className="row">
                    <label className="filter-label">Filter By Date</label>
                    <div className="mg-bottom-20">
                        <DateTimePicker onChange={onChangeStartTime} value={startTime} />
                        <button className="filter-btn btn btn-sm btn-primary" type="button">filter</button>
                    </div>
                    {events.map((event, index) => {
                        return (
                            <div key={index} className="col-md-4">
                                <div className="card" >
                                    <div className="card-body">
                                        <h3 className="card-title">
                                         {event.name}
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
                                        <span onClick={() => rsvpToEvent(event._id)}  className="card-link">RSVP</span>
                                        <span className="card-link">Edit</span>
                                        <span onClick={() => deleteEvent(event._id)} className="card-link">Delete</span>
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