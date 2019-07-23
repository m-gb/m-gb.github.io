import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
        <Navbar expand="lg" variant="dark" className="topnav">
          <Nav className="m-auto">
            <Nav.Link className="px-4" href="#introduction">Introduction</Nav.Link>
            <Nav.Link className="px-4" href="#projects">Recent Projects</Nav.Link>
            <Nav.Link className="px-4" href="#skills">Skills</Nav.Link>
            <Nav.Link className="px-4" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
    );
  }
}

export default NavBar;
