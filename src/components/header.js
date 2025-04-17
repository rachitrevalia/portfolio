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
        <a href="/CV_Rachit_Updated.pdf" download className="resume-btn small">
  📄 Download CV
</a>
      </nav>
    </header>
  );
}

export default Header;