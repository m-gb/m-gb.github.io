import React, { Component } from 'react';
import './experience.css';

class Experience extends Component {
  render() {
    return (
      <div id="experience" data-aos="fade-up">
        <h1 className="font-weight-bold py-5 text-center">Work Experience</h1>
        <div className="row">
          <div className="col-lg-3 text-right">
            <p className="job-year">2017-2018</p>
            <p className="job-location">Berlin, Germany</p>
          </div>
          <div className="col-lg-9">
            <p className="job-title">Intern Web Developer</p>
            <p className="job-company">Ecratum GmbH</p>
            <ul className="job-description">
              <li>Implemented web interfaces using JavaScript, HTML and CSS</li>
              <li>Maintained Ruby on Rails backend and MySQL database migrations</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-right">
            <p className="job-year">2018-2019</p>
            <p className="job-location">Berlin, Germany</p>
          </div>
          <div className="col-lg-9">
            <p className="job-title">Junior Fullstack Developer</p>
            <p className="job-company">Cognita AG</p>
            <ul className="job-description">
              <li>Implemented responsive web interfaces using React, TypeScript and Bootstrap</li>
              <li>Developed and used REST APIs in a Ruby on Rails microservice architecture</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-right">
            <p className="job-year">2019-2020</p>
            <p className="job-location">Haifa, Israel</p>
          </div>
          <div className="col-lg-9">
            <p className="job-title">Fullstack Developer</p>
            <p className="job-company">B-com Software Solutions</p>
            <ul className="job-description">
              <li>Implemented responsive web interfaces using Angular, Ext JS and Bootstrap</li>
              <li>Maintained a PHP Laravel backend, using complex REST APIs and large MySQL databases</li>
              <li>Worked closely with the design, QA and product management teams</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
