import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div id="projects" data-aos="fade-up" className="pt-5">
        <h1 className="font-weight-bold py-5 text-center"><i className="fas fa-code pr-3" />Recent Projects</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img className="img-fluid" src="/dashofoats.png" alt="Dash of Oats" />
              <div className="card-body">
                <h5 className="card-title">Dash of Oats</h5>
                <p className="card-text">A cooking blog, including a servings calculator and a search function with suggestions</p>
                <p className="card-text">Using Angular, Node.JS and MongoDB</p>
                <a href="https://dashofoats.mayagoldberg.net" className="btn btn-secondary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="img-fluid" src="/starrynight.png" alt="Starry Night" />
              <div className="card-body">
                <h5 className="card-title">Starry Night</h5>
                <p className="card-text">A weather app based on current or desired location with unit conversion</p>
                <p className="card-text">Using React and OpenWeatherMap API</p>
                <a href="https://m-gb.github.io/starry-night/" className="btn btn-secondary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="img-fluid" src="/github.png" alt="GitHub" />
              <div className="card-body">
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">My GitHub profile where you can find all my other projects</p>
                <p className="card-text"><br /></p>
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
