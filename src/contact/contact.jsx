import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact" data-aos="fade-up" className="text-center">
        <h1 className="font-weight-bold py-3"><i className="fas fa-envelope pr-3" />Contact</h1>
        <div className="contact-icons">
          <h5 className="p-5">For more information, you can visit my GitHub and LinkedIn profiles.</h5>
          <a className="px-3 py-5" href="https://il.linkedin.com/in/maya-goldberg-528689150?trk=people-guest_profile-result-card_result-card_full-click"><i className="fab fa-linkedin fa-2x" /></a>
          <a className="px-3 py-5" href="https://github.com/m-gb"><i className="fab fa-github-square fa-2x" /></a>
        </div>
      </div>
    );
  }
}

export default Contact;
