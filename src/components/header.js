import React from 'react'; // Add this import


function Header() {
  return (
    <header>
      <div className="logo">Rachit Revalia</div>
      <nav>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a className="resume-btn small" href="public/CV_Rachit(updated).pdf" download>
          📄 Resume
        </a>
      </nav>
    </header>
  );
}

export default Header;