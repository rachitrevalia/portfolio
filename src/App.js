import React from 'react';
import Header from './components/header';
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contacts';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <div class="blob-container">
        <svg viewBox="0 0 120 120">
            <path id="blob1" fill="#9ACBD0"
                d="M43.1,-58.6C56.9,-51.1,68.9,-39.2,73.9,-24.9C78.9,-10.5,76.9,8.4,67.8,21.9C58.8,35.4,42.7,44.4,29.1,49.4C15.5,54.4,4.8,55.3,-4.2,51.5C-13.3,47.6,-26.6,39.1,-34.2,27.5C-41.7,16,-43.4,2.4,-41.8,-11.7C-40.2,-25.8,-35.3,-39.6,-28.9,-48.4C-22.4,-57.3,-14.1,-61.1,-5.4,-61.7C3.3,-62.3,11.8,-59.7,18.7,-55.3C25.6,-50.8,31,-44.4,43.1,-58.6Z"
                transform="translate(100 100)" />
        </svg>
    </div>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;