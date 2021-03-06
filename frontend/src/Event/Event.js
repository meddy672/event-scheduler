import React from 'react';
import './Event.css';

function Event() {
    return (
        <div className="container event">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Event Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Event Name" />
            </div>
            <div class="row g-3">
                <div class="col">
                <label for="location" className="form-label">Event Type</label>
                    <select className="form-select" id="location" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">In Person</option>
                        <option value="2">Hybird</option>
                        <option value="3">Virtual</option>
                    </select>
                </div>
                <div class="col">
                    <label for="location" className="form-label">Location</label>
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                </div>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="eventDescription" rows="3"></textarea>
            </div>
        </div>
    )
}

export default Event;