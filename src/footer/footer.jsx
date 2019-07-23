import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  year = `${new Date().getFullYear()}`;
  render() {
    return (
      <div className="pt-5 text-center">
        <div className="footer p-3">
          <span>© {this.year} Maya Goldberg</span>
        </div>
      </div>
    );
  }
}

export default Footer;
