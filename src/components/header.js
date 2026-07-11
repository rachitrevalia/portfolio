import React, { useState, useEffect } from 'react';

function Header({ toggleTheme, isDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <div className="logo">Rachit <span>Revalia</span></div>

      <nav className={isMenuOpen ? 'nav-open' : ''}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a
          href={`${process.env.PUBLIC_URL}/Rachit Revalia.pdf`}
          download="Rachit Revalia.pdf"
          className="resume-btn small"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          📄 Download CV
        </a>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? '☀️' : '🌙'}
        </button>
        <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
          <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
          <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;