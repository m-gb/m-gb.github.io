import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar" className="nav-default nav-bottom">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="px-4" href="#introduction">Introduction</Nav.Link>
            <Nav.Link className="px-4" href="#projects">Recent Projects</Nav.Link>
            <Nav.Link className="px-4" href="#skills">Skills</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link className="px-3" href="https://github.com/m-gb" title="GitHub"><i className="fab fa-github-square" /></Nav.Link>
          <Nav.Link className="px-3" href="https://il.linkedin.com/in/maya-goldberg-528689150?trk=people-guest_profile-result-card_result-card_full-click" title="LinkedIn"><i className="fab fa-linkedin" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
