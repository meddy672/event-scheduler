import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import './Events.css';

/**
 * this component will handle retreiving, deleting, and filtering events
 */
function Events() {
    const [events, setEvents] = useState([]);
    const [filterDate, onChangeFilterDate] = useState(new Date());
    let mounted = true;
    


    /**
     * retrieve all events from sever
     */
    useEffect(() => {
        axios.get('http://localhost:3000/events')
            .then(({ data }) => {
                if (mounted) {
                    console.log(data.events);
                    setEvents(data.events);
                }
            }).catch((err) => {
                throw new Error(err.message);
            })
        
        return () => { mounted = false; }
    }, []);



    /**
     * allow user to delete an event
     */
    async function deleteEvent(id) {
        const { data } = await axios.delete('http://localhost:3000/events/' + id);
        setEvents(data.events);
    }

    /**
     * filter events based on date
     */
    async function filterEvents() {
        const formData = new URLSearchParams() 
        formData.append('date', filterDate);
        const {data} = await axios.post('http://localhost:3000/events/filter', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        })
        setEvents(data.events);
    }


    return (
        <div className="container Events" id="Events">
            <h1>All Events <FontAwesomeIcon icon={faBullhorn} /></h1>
            <hr />
            {events.length > 0 ? (
                <div className="row">
                    <label className="filter-label">Filter By Date</label>
                    <div className="mg-bottom-20">
                        <DateTimePicker format="M/d/y hh:mm a" onChange={onChangeFilterDate} value={filterDate} />
                        <button onClick={filterEvents} className="filter-btn btn btn-sm btn-primary" type="button">filter</button>
                    </div>
                    {events.map((event, index) => {
                        return (
                            <div key={index} className="col-md-4 mg-bottom-20">
                                <div className="card" >
                                    <div className="card-body">
                                        <h3 className="card-title">{event.name}</h3>
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
                                        <span onClick={() => deleteEvent(event._id)} className="card-link">Delete</span>
                                        <NavLink to={`/events/details/${event._id}`} className="card-link">Update</NavLink>
                                        <NavLink to={`/events/details/${event._id}`} className="card-link">RSVP</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            ) : (
                    <h3>No events found for that date.</h3>
            )
            }
            
        </div>
    );

}

export default Events;