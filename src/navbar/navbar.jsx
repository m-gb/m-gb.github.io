import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" className="topnav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="px-4" href="#introduction">Introduction</Nav.Link>
            <Nav.Link className="px-4" href="#projects">Recent Projects</Nav.Link>
            <Nav.Link className="px-4" href="#skills">Skills</Nav.Link>
            <Nav.Link className="px-4" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
