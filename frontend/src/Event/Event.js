import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import './Event.css';

function Event() {
    const [startTime, onChangeStartTime] = useState(new Date());
    const [endTime, onChangeEndTime] = useState(new Date());


    return (
        <div className="container Event">
            <div className="col-md-8 offset-md-2">
                <h1>Schedule Event</h1>
                <hr />
                <form className="row g-3" onSubmit={() => {
                    
            }}>
                <div className="col-md-6">
                    <label className="form-label">Event Name</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Event Location</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-4">
                    <label className="form-label">Start Time</label>
                    <DateTimePicker onChange={onChangeStartTime} value={startTime} />
                </div>
                <div className="col-4">
                    <label className="form-label">End Time</label>
                    <DateTimePicker onChange={onChangeEndTime} value={endTime} />
                </div>

                <div className="col-4">
                    <label className="form-label">Event Type</label>
                    <select className="form-select form-select-sm" aria-label="Default select example">
                        <option selected>Select Option</option>
                        <option value="in-person">In Person</option>
                        <option value="hybird">hybird</option>
                        <option value="virtual">Virtual</option>
                    </select>
                </div>

                <div className="col-sm-12">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Event;