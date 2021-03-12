import React, { Component } from 'react';
import './skills.css';

class Skills extends Component {
  render() {
    return (
      <div id="skills" data-aos="fade-up" className="skills-background">
        <h1 className="font-weight-bold text-center py-5">Skills & Tools</h1>
        <div className="row skill-cards">
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title"><i className="pr-2 fas fa-laptop-code"></i>Programming Languages</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>JavaScript</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>PHP</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Ruby</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title"><i className="pr-2 fas fa-paint-brush"></i>Frontend Frameworks</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Angular</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>React</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Ext JS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title"><i className="pr-2 fas fa-server"></i>Backend Frameworks</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Node.JS</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>PHP Laravel</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Ruby on Rails</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title"><i className="pr-2 fas fa-database"></i>Databases</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>MySQL</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>PostgreSQL</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>MongoDB</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title"><i className="pr-2 fas fa-code"></i>Markup</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>HTML</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>CSS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title"><i className="pr-2 fas fa-code-branch"></i>Tools</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Git</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Jira</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Jenkins</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
