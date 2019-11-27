import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-white bg-white navbar-expand-lg">
      <Link to="/" className="navbar-brand">ExcerTracker</Link>
      <Link to="/trainer" className="navbar-brand">Trainer</Link>
      <Link to="/client" className="navbar-brand">Client</Link>




      </nav>
    );
  }
}
