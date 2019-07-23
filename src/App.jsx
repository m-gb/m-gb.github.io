import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/navbar.jsx';
import Introduction from './introduction/introduction.jsx';
import Projects from './projects/projects.jsx';
import Skills from './skills/skills.jsx';
import Contact from './contact/contact.jsx';
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
      <div>
        <Introduction />
        <NavBar />
        <main className="container">
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
