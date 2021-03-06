import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/schedule">Bevy Project</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/schedule">Schedule Event</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/events"> See Events</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;