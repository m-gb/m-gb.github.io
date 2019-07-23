import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h1 className="font-weight-bold py-5 text-center"><i className="fas fa-code pr-3" />Recent Projects</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img className="img-fluid" src="/dashofoats.png" alt="Dash of Oats" />
              <div className="card-body">
                <h5 className="card-title">Dash of Oats</h5>
                <p className="card-text"></p>
                <a href="https://www.dashofoats.xyz" className="btn btn-secondary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="img-fluid" src="/starrynight.png" alt="Starry Night" />
              <div className="card-body">
                <h5 className="card-title">Starry Night</h5>
                <p className="card-text"></p>
                <a href="https://m-gb.github.io/starry-night/" className="btn btn-secondary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="img-fluid hidden-img" src="/starrynight.png" alt="Starry Night" />
              <i className="card-img-top fab fa-github fa-5x github-card" />
              <div className="card-body">
                <h5 className="card-title">GitHub Page</h5>
                <p className="card-text"></p>
                <a href="https://github.com/m-gb" className="btn btn-secondary">Visit my GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
