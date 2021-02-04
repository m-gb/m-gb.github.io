import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  year = `${new Date().getFullYear()}`;
  render() {
    return (
      <div className="text-center">
        <div className="footer p-3">
          <span>&copy; {this.year} Maya Goldberg</span>
        </div>
      </div>
    );
  }
}

export default Footer;
