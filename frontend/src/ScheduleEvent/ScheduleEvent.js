import React, { useState } from 'react';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import './ScheduleEvent.css';


/**
 * this component will handle creating new events.
 */
function ScheduleEvent() {
    const [startTime, onChangeStartTime] = useState(new Date());
    const [endTime, onChangeEndTime] = useState(new Date());


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
        const res = await axios.post('http://localhost:5000/events', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        if (res.status === 201) {
            clearFields(event);
        }

    }


    /**
     * handles clearing form input fields.
     */
    function clearFields(event) {
        event.target.eventName.value = '';
        event.target.eventDescription.value = '';
        event.target.eventLocation.value = '';
        event.target.eventType.value = '';
    }


    return (
        <div className="container ScheduleEvent">
            <div className="col-md-8 offset-md-2">
                <h1>Schedule Event <FontAwesomeIcon icon={faCalendarDay} /></h1>
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
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <label className="form-label">Start Time</label>
                        <DateTimePicker
                            format="M/d/y hh:mm a"
                            onChange={onChangeStartTime}
                            value={startTime} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <label className="form-label">End Time</label>
                        <DateTimePicker
                            onChange={onChangeEndTime}
                            value={endTime} />
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <label className="form-label">Event Type</label>
                        <select
                            name="eventType"
                            id="eventType"
                            className="form-select form-select-sm"
                            aria-label="Default select example">

                            <option defaultValue>Select Option</option>
                            <option value="In Person">In Person</option>
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
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ScheduleEvent;