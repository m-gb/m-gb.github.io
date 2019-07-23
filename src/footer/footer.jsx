import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  year = `${new Date().getFullYear()}`;
  render() {
    return (
      <div className="footer p-2 text-center">
        <span>© {this.year} Maya Goldberg</span>
      </div>
    );
  }
}

export default Footer;
