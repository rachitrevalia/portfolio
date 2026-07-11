import React, { useState, useEffect } from 'react';

function About() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const phrases = [
      "Data Engineer",
      "Data Scientist",
      "Full-Stack Developer",
      "Python Developer"
    ];

    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 100);
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="about" className="fade-in about-section">
      <div className="about-content">
        <div className="about-text">
          <h1><span className="wave">👋</span> Hey there!</h1>
          <h2 className="typing-intro">
            I'm a <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p>
            Full-stack developer and data engineer currently pursuing my degree in
            Information and Communication Technology with a focus on Applied Data Sciences
            and Artificial Intelligence. My work combines backend development, data processing,
            and modern web technologies to build functional applications. I build systems that turn
            complex, multi-source data into decisions people actually use.
          </p>
          <p>
            I work primarily with Python (FastAPI, Django, Flask), SQL,
            and React/TypeScript, with hands-on experience across the full stack —
            from ETL pipeline design and machine learning model deployment to
            frontend dashboards and Linux server operations. Most recently I worked on
            AI inference optimisation and biometric data integration for a real-world
            esports coaching platform.
          </p>
          <p>
            Currently expanding my knowledge in data engineering, API development, and exploring
            modern technologies. I care about building things that work in the real world, not just in demos.
          </p>
        </div>

        <div className="about-photo">
          <div className="photo-ring">
            <div className="photo-inner">
              <img src={`${process.env.PUBLIC_URL}/pfp.jpeg`} alt="Rachit Revalia" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;