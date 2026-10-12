import React from 'react';

function Experience() {
  return (
    <section id="experience" className="fade-in">
      <h2>Work Experience</h2>

      <div className="card">
        <div className="experience-header">
          <div>
            <h3>Experience Coordinator</h3>
            <p className="company">Spinout 2026 · Jyväskylä Entrepreneurship Society (JES)</p>
          </div>
          <span className="experience-year">Sep 2026 – Present</span>
        </div>
        <p className="experience-description">
          Spinout is a two-day deep-tech research commercialisation competition at the University 
          of Jyväskylä, where student teams work with real university research cases to explore 
          how lab-based inventions could become real products, startups, or companies. As Experience 
          Coordinator, I lead venue logistics and on-site experience for the event, working with 
          the Partnerships team to secure event spaces and catering, designing the full two-day 
          program schedule, and managing applicant communications and verification for 100+ participants.
        </p>
        <div className="project-links">
          <a
            href="https://lnkd.in/p/dQyrd88w"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-post-link"
          >
            View LinkedIn Post →
          </a>
        </div>
      </div>

      <div className="card">
        <div className="experience-header">
          <div>
            <h3>Data Scientist (Industry Project)</h3>
            <p className="company">PlaySmart × Breda Guardians Esports, BUas</p>
          </div>
          <span className="experience-year">Feb 2026 – Jun 2026</span>
        </div>
        <p className="experience-description">
          Embedded with a professional esports coaching team to understand their
          operational problems, then built and deployed production solutions used
          daily, owning the entire arc from first conversation to shipped software.
          Built a GPU-accelerated YOLOv11 computer vision pipeline (CUDA/PyTorch)
          with Grad-CAM explainability, cutting reaction time analysis from 2–3
          hours to 42 minutes per session. Designed a FastAPI backend with
          server-side pandas analytics, replacing 100+ batched frontend HTTP calls
          with single-query computation, and integrated Nuanic BLE wearable sensors,
          tracing a MAC address rotation bug in the Windows BLE stack that was
          silently corrupting data. Full details in Projects below.
        </p>
        <div className="project-links">
          <a
            href="https://www.linkedin.com/posts/rachitrevalia_datascience-artificialintelligence-esportsanalytics-share-7479804214815129603-VnBH/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQK2x8BiZl14_lj5TqZPOllGkeYYDSYorw"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-post-link"
          >
            View LinkedIn Post →
          </a>
        </div>
      </div>

      <div className="card">
        <div className="experience-header">
          <div>
            <h3>Data Engineer (Industry Project)</h3>
            <p className="company">B.G.E.T. × Breda Guardians Esports, BUas</p>
          </div>
          <span className="experience-year">Sep 2025 – Jan 2026</span>
        </div>
        <p className="experience-description">
          Owned a greenfield project end-to-end: designed ETL pipelines processing
          thousands of gameplay and biometric events, integrated Riot Games,
          Henrik's API, and Tobii Eye Tracker data into PostgreSQL analytics
          workflows, and shipped a React/TypeScript Electron desktop app, all
          deployed to production on a Linux server within a single semester. Built
          a matching engine to align heterogeneous data sources with different
          sampling rates and no shared timestamp anchor, with validation logic to
          catch data quality issues early. Worked directly with coaching staff and
          iterated on real user feedback. This became the foundation for PlaySmart.
          Full details in Projects below.
        </p>
        <div className="project-links">
          <a
            href="https://www.linkedin.com/posts/rachitrevalia_datascience-artificialintelligence-esportsanalytics-ugcPost-7420833635198472192-onLN/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQK2x8BiZl14_lj5TqZPOllGkeYYDSYorw"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-post-link"
          >
            View LinkedIn Post →
          </a>
        </div>
      </div>

      <div className="card">
        <div className="experience-header">
          <div>
            <h3>AI Code Trainer & Evaluator</h3>
            <p className="company">Outlier · Remote Internship</p>
          </div>
          <span className="experience-year">Nov – Dec 2024</span>
        </div>
        <p className="experience-description">
          Evaluated AI-generated Python code for correctness and efficiency,
          developing structured rubrics and comprehensive test suites and
          exercising independent judgment on quality and edge cases at scale.
        </p>
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