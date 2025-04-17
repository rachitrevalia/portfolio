import React, { useState, useEffect } from 'react';

function About() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const phrases = ["Python Developer", "Full-stack Web Dev", "AI Trainer"]; // Move phrases here
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      setText((prev) =>
        isDeleting ? currentPhrase.substring(0, prev.length - 1) : currentPhrase.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1); // Functional update
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [text, isDeleting, loopNum, typingSpeed]); // Removed 'phrases' from dependencies since it's now inside the effect

  return (
    <section id="about" className="fade-in about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>Welcome! I am Rachit Revalia.</h1>
          <p>
            Hey there! I’m a tech enthusiast and a curious learner on a mission to turn ideas into clean,
            functional code. As a driven student, I’m always eager to bridge the gap between what I learn in
            class and what I can build in the real world. I’ve dived deep into Python, web development
            (React, Flask, Django), and databases like SQLite and SQL. Whether it’s building full-stack
            projects, training AI models, or collaborating on real-world applications, I love rolling up my
            sleeves and making things happen. I adapt fast, learn even faster, and thrive in team settings
            where innovation meets execution. If there’s a challenge, I’m the kind of person who’s already
            exploring three ways to solve it. Let’s build something awesome together!
          </p>
        </div>
        <div className="about-photo">
          <img src={`${process.env.PUBLIC_URL}/profile_pic.jpg`} alt="Rachit Revalia" />
          <h2 className="typing">{text}</h2>
        </div>
      </div>
    </section>
  );
}

export default About;