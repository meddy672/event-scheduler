import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RSVP.css';


/**
 * this component will allow users to rsvp to events
 */
function RSVP() {

    const { eventId } = useParams();
    const [event, setEvent] = useState({});


    useEffect(() => {
        let mounted = true;
        axios.get(`http://localhost:3000/events/${eventId}`)
            .then(res => {
                const { data } = res;
                if (mounted) {
                    setEvent(data.event); 
                }
            })
            .catch(err => {
                throw new Error(err.message);
            })
        
        return () => { mounted = false };
    })
    
    /**
     * handle form submission
     */
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new URLSearchParams();
        formData.append('fullName', e.target.fullName.value);
        formData.append('status', e.target.status.value);
        const { data } = await axios.post(`http://localhost:3000/events/rsvp/${eventId}`, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        })
        console.log(data);
    }

    return (
        <div className="container rsvp">
            <div className="col-md-8 offset-md-2">
                <h1>RSVP To Event: { event.name }</h1>
                <hr />
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            id="fullName" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Status</label>
                        <select
                            name="status"
                            id="status"
                            className="form-select"
                            aria-label="Default select example">
                            <option defaultValue>Select Option</option>
                            <option value="In-person">Going</option>
                            <option value="Hybird">Maybe</option>
                            <option value="Virtual">Not Going</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RSVP;