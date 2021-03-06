import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Events.css';

function Events() {
    const [events, setEvents] = useState([]);

    /**
     * retrieve all events from sever
     */
    useEffect(() => {
        axios.get('http://localhost:3000/events')
            .then(({ data }) => {
                setEvents(data.events);
            });
    }, []);

    console.log(events)
    return (
        <div className="container Events">
            <h1>All Events</h1>
            <hr />
            {events.length > 0 && (
                <div className="row">
                    {events.map((event, index) => {
                        return (
                            <div key={index} className="col-md-4">
                                <div className="card" >
                                    <div className="card-body">
                                        <h3 className="card-title">{event.name}</h3>
                                        
                                        <p className="card-text">{event.description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <label>Event Type:</label> {event.eventType}
                                        </li>
                                        <li className="list-group-item">
                                            <i className="icon-time"></i>
                                            <label>Starts On: </label> {event.start}
                                        </li>
                                        <li className="list-group-item">
                                            <label>Ends On: </label> {event.end} 
                                        </li>
                                        <li className="list-group-item">
                                            <label>Location:</label> {event.location}
                                        </li>
                                    </ul>
                                    <div className="card-body">
                                        <a  className="card-link">RSVP</a>
                                        <a className="card-link">See Whos Going</a>
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