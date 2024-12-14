import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div id="projects" data-aos="fade-up">
        <h1 className="font-weight-bold text-center py-5">Recent Projects</h1>
        <div className="row">
          <div className="col-lg-4 py-3">
            <div className="card">
              <img className="img-fluid p-3" src="/dashofoats.png" alt="Dash of Oats" />
              <div className="card-body">
                <div className="project-card">
                  <h5 className="card-title">Dash of Oats</h5>
                  <p className="card-text">A cooking blog, including a calculator and a search function with suggestions</p>
                  <p className="card-text">Using Angular, Node.JS and MongoDB</p>
                </div>
                <a href="https://dashofoats.mayagoldberg.net" className="btn btn-dark">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-3">
            <div className="card">
              <img className="img-fluid p-3" src="/starrynight.png" alt="Starry Night" />
              <div className="card-body">
                <div className="project-card">
                  <h5 className="card-title">Starry Night</h5>
                  <p className="card-text">A weather app based on current or desired location with unit conversion</p>
                  <p className="card-text">Using React and OpenWeatherMap API</p>
                </div>
                <a href="https://m-gb.github.io/starry-night/" className="btn btn-dark">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-3">
            <div className="card">
              <img className="img-fluid p-3" src="/github.png" alt="GitHub" />
              <div className="card-body">
                <div className="project-card">
                  <h5 className="card-title">GitHub</h5>
                  <p className="card-text">My GitHub profile where you can find all my other projects</p>
                  <p className="card-text"><br /></p>
                </div>
                <a href="https://github.com/m-gb" className="btn btn-dark">Visit my GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
