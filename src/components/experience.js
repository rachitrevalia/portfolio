import React from 'react';

function Experience() {
  return (
    <section id="experience" className="fade-in">
      <h2>Work Experience</h2>
      
      <div className="card">
        <div className="experience-header">
          <div>
            <h3>Coder - AI Training</h3>
            <p className="company">Outlier (via Braintrust)</p>
          </div>
          <span className="experience-year">2024</span>
        </div>
        <p className="experience-description">
          Contributed to training large language models for improved code generation capabilities. 
          Secured position based on Python expertise through Braintrust platform.
        </p>
        <ul className="experience-highlights">
          <li>Evaluated AI-generated code quality and provided detailed technical rationales</li>
          <li>Solved complex coding problems with functional and efficient solutions</li>
          <li>Optimized code implementations for maximum performance and efficiency</li>
          <li>Developed comprehensive test cases to ensure code reliability</li>
          <li>Authored human-readable explanations of coding problems and solutions</li>
          <li>Documented multiple problem-solving approaches with clear technical documentation</li>
        </ul>
        <a 
          href="https://www.linkedin.com/posts/rachitrevalia_internshipjourney-ai-generativeai-activity-7271160524791271424-4NiW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQK2x8BiZl14_lj5TqZPOllGkeYYDSYorw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-post-link"
        >
          Read More on LinkedIn →
        </a>
      </div>
    </section>
  );
}

export default Experience;