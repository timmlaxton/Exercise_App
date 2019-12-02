import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/weight.svg';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-white bg-white navbar-expand-lg">
      <Link to="/">
      <div className="weight-icon">
      <img src={logo} alt="weight"/>
      </div>
      <Link to="/trainer" className="navbar-brand">Trainer</Link>
      <Link to="/client" className="navbar-brand">Client</Link>
      </Link>
      </nav>
    );
  }
}
