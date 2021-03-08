import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './EventDetails.css';

function EventDetails() {

    const { eventId } = useParams();
    const [event, setEvent] = useState({});
    const [startTime, onChangeStartTime] = useState(new Date());
    const [endTime, onChangeEndTime] = useState(new Date());

    let mounted = true;

    useEffect(() => {

        axios.get('http://localhost:3000/events/' + eventId)
            .then(({ data }) => {
                if (mounted) {
                    setEvent(data.event);
                }
            })
            .catch(err => {
                console.log(err)
                throw new Error(err.message)
            })

        return () => { mounted = false; }
    }, []);

        /**
     * handles submitting data to server.
     */
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new URLSearchParams() 
        formData.append('name', event.target.eventName.value);
        formData.append('description', event.target.eventDescription.value);
        formData.append('location', event.target.eventLocation.value);
        formData.append('type', event.target.eventType.value);
        formData.append('start', startTime);
        formData.append('end', endTime);
        const res = await axios.put('http://localhost:3000/events/'+eventId, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        });
        
    }

    return (
        <div className="container mg-top-50">
            <div className="col-md-12">
                <h1>Edit Event: {event.name}</h1>
                <hr />
            </div>
            {event.rsvp > 0 ? (
                <div>
                    <label>RSVP:</label>
                    {event.rsvp.map((attendee, index) => {
                        <span key={index}>{attendee.name} {attendee.status}</span>
                    })}
                </div>
            ) : (
                    <div>
                        <label>No RSVP Listed</label>
                    </div>
                )

            }

            <div className="ScheduleEvent">
                <div className="col-md-12">
                    <hr />
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label className="form-label">Event Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="eventName"
                                id="eventName" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Event Location</label>
                            <input
                                type="text"
                                className="form-control"
                                name="eventLocation"
                                id="eventLocation" />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Start Time</label><br/>
                            <DateTimePicker
                            format="M/d/y hh:mm a"
                            onChange={onChangeStartTime}
                            value={startTime} />
                        </div>
                        <div className="col-4">
                            <label className="form-label">End Time</label><br/>
                            <DateTimePicker
                            onChange={onChangeEndTime}
                            value={endTime} />
                        </div>

                        <div className="col-4">
                            <label className="form-label">Event Type</label>
                            <select
                                name="eventType"
                                id="eventType"
                                className="form-select"
                                aria-label="Default select example">
                                <option defaultValue>Select Option</option>
                                <option value="In-person">In Person</option>
                                <option value="Hybird">Hybird</option>
                                <option value="Virtual">Virtual</option>
                            </select>
                        </div>

                        <div className="col-sm-12">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                name="eventDescription"
                                id="eventDescription"
                                rows="3">
                            </textarea>
                        </div>
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary">Update Event</button>
                        </div>
                    </form>
                                    
                </div>
            </div>

        </div>
    )
}

export default EventDetails;
