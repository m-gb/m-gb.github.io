import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './skills.css';

class Skills extends Component {
  render() {
    return (
      <div id="skills" data-aos="fade-up">
        <h1 className="font-weight-bold text-center py-5"><i className="fas fa-tools pr-3" />Skills & Tools</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title">Programming Languages</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>JavaScript</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>PHP</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Ruby</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title">Frontend Frameworks</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Angular</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>React</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Ext JS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title">Backend Frameworks</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Node.JS</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>PHP Laravel</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Ruby on Rails</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title">Databases</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>MySQL</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title">Markup</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>HTML</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>CSS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent skill-card">
              <div className="card-body">
                <h5 className="card-title">Tools</h5>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Git</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Jira</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Jenkins</p>
                <p className="card-text"><i className="pr-2 fas fa-angle-right card-arrow"></i>Docker</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Table borderless responsive="lg">
          <tbody className="skills-table">
            <tr>
              <th className="text-right w-50">Programming Languages</th>
              <td className="text-left">JavaScript, PHP, Ruby</td>
            </tr>
            <tr>
              <th className="text-right">Markup</th>
              <td className="text-left">HTML, CSS</td>
            </tr>
            <tr>
              <th className="text-right">Frontend Frameworks</th>
              <td className="text-left">Angular, React, Ext JS</td>
            </tr>
            <tr>
              <th className="text-right">Databases</th>
              <td className="text-left">MySQL, PostgreSQL</td>
            </tr>
            <tr>
              <th className="text-right">Backend Frameworks</th>
              <td className="text-left">PHP Laravel, Node.JS, Ruby on Rails</td>
            </tr>
            <tr>
              <th className="text-right">Tools</th>
              <td className="text-left">Git, Jira, Jenkins, Docker, Photoshop</td>
            </tr>
          </tbody>
        </Table> */}
      </div>
    );
  }
}

export default Skills;
