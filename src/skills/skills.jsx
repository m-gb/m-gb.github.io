import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './skills.css';

class Skills extends Component {
  render() {
    return (
      <div id="skills" data-aos="fade-up">
        <h1 className="font-weight-bold text-center py-5"><i className="fas fa-tools pr-3" />Skills & Tools</h1>
        <Table borderless responsive="lg">
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
              <td className="text-left">Angular, Ext JS, React</td>
            </tr>
            <tr>
              <th className="text-right">Databases</th>
              <td className="text-left">MySQL, PostgreSQL, MongoDB</td>
            </tr>
            <tr>
              <th className="text-right">Backend Frameworks</th>
              <td className="text-left">PHP Laravel, Ruby on Rails, Node.JS</td>
            </tr>
            <tr>
              <th className="text-right">Tools</th>
              <td className="text-left">Git, Jenkins, Docker, JIRA, Photoshop</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Skills;
