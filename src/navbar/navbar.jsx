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
            <Nav.Link className="px-4" href="#home"><i className="pr-1 fas fa-home" /><span className="nav-link-text">Home</span></Nav.Link>
            <Nav.Link className="px-4" href="#projects"><i className="pr-1 fas fa-edit" /><span className="nav-link-text">Recent Projects</span></Nav.Link>
            <Nav.Link className="px-4" href="#experience"><i className="pr-1 fas fa-briefcase" /><span className="nav-link-text">Work Experience</span></Nav.Link>
            <Nav.Link className="px-4" href="#skills"><i className="pr-1 fas fa-tools" /><span className="nav-link-text">Skills & Tools</span></Nav.Link>
          </Nav>
          <Nav className="ml-auto">
          <Nav.Link className="px-4" href="https://github.com/m-gb"><i className="pr-1 contact-link fab fa-github-square" /><span className="nav-link-text">GitHub</span></Nav.Link>
          <Nav.Link className="px-4" href="https://il.linkedin.com/in/maya-goldberg-528689150?trk=people-guest_profile-result-card_result-card_full-click"><i className="pr-1 contact-link fab fa-linkedin" /><span className="nav-link-text">LinkedIn</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
