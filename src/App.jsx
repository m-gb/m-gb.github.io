import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/navbar.jsx';
import Home from './home/home.jsx';
import Projects from './projects/projects.jsx';
import Skills from './skills/skills.jsx';
import Footer from './footer/footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  constructor(props) {
    super(props);
    AOS.init({
      duration: 1000
    });
  }

  render() {
    return (
      <div className="main">
        <Home />
        <NavBar />
        <main className="container">
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    var homeElement = document.getElementById("home");
    var navbarElement = document.getElementById("navbar");
    // Calculate offset bottom of home component
    var homeBottom = homeElement.offsetTop + homeElement.offsetHeight;
    if (window.pageYOffset >= homeBottom) {
      navbarElement.classList.remove("nav-bottom");
      navbarElement.classList.add("sticky-top");
      navbarElement.classList.add("nav-style");
    } else {
      navbarElement.classList.remove("sticky-top");
      navbarElement.classList.remove("nav-style");
      navbarElement.classList.add("nav-bottom");
    }
  }
}

export default App;
