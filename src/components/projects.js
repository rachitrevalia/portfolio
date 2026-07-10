import React, { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 420;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const projectsData = [
    {
      id: 1,
      title: "PlaySmart – Esports Coaching Analytics Platform",
      tech: "FastAPI, React, TypeScript, Electron, Python, SQLite, YOLOv11, Whisper, Bleak (BLE), Pandas, Poetry",
      shortDesc: "Multimodal esports coaching intelligence system with AI inference, biometric sensors, and real-time dashboards.",
      images: [
        `${process.env.PUBLIC_URL}/playometer1.png`,
        `${process.env.PUBLIC_URL}/playometer8.png`,
        `${process.env.PUBLIC_URL}/playometer9.png`,
        `${process.env.PUBLIC_URL}/playometer10.png`,
        `${process.env.PUBLIC_URL}/playometer11.png`,
      ],
      github: null,
      linkedin: "https://www.linkedin.com/posts/rachitrevalia_datascience-artificialintelligence-esportsanalytics-share-7479804214815129603-VnBH/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQK2x8BiZl14_lj5TqZPOllGkeYYDSYorw",
      isUniversityProject: true,
      purpose: "PlaySmart (formerly B.G.E.T.) is a multimodal esports coaching analytics platform built across two semesters at Breda University of Applied Sciences, in collaboration with the Breda Guardians esports organisation. The platform captures and correlates multiple player data streams — gameplay video, physiological signals (EDA via wearable rings), eye-tracking, facial emotion recognition, and keyboard/mouse telemetry — and surfaces them through coach and player dashboards. The goal is to help coaches make faster, more informed decisions by giving them both performance metrics and insight into the player's cognitive and emotional state during critical in-game moments. The platform supports Valorant and League of Legends and won three awards at the BUas end-of-semester showcase: Best Business Value, Most Innovative Project, and Best Project Overall (runner-up).",
      features: [
        "YOLOv11-based reaction time detection model — GPU-accelerated with batch inference, reducing processing from 2–3 hours to ~42 minutes per session",
        "Nuanic BLE wearable ring integration for real-time EDA (electrodermal activity) data collection via Bluetooth Low Energy",
        "Audio transcription pipeline using OpenAI Whisper with ffmpeg chunking and overlap for full session transcripts",
        "IGN mapping system (per-PC JSON files merged server-side) to reliably identify players across multiple machines",
        "Server-side pandas analytics with caching for match statistics, error pattern detection, and performance trends",
        "Error Patterns coaching dashboard page surfacing recurring mistake patterns per player",
        "Video Feedback Review dashboard with emotion overlays, reaction time markers, and interactive timeline",
        "Match Feedback dashboard aggregating gaze, input telemetry, emotion, and performance data across modalities",
        "Role-based dashboards for coaches and players with different access levels and views",
        "Hive SFTP server integration for both Valorant and League of Legends session data",
        "Tobii Eye Tracker integration for gaze and attention heatmap data",
        "JWT authentication with secure session management",
        "Sphinx documentation, APPLICATION_SETUP.md, and full code handoff for incoming development teams"
      ],
      techDetails: "Full-stack architecture with a FastAPI backend (Python, Poetry) and a React/TypeScript frontend packaged as an Electron desktop application. The AI inference pipeline runs YOLOv11 models on an RTX 3070 GPU server (Hive), with ONNX export and batched frame inference for performance. BLE communication with Nuanic rings is handled via the Bleak library, using device-object-based connection to bypass Resolvable Private Address rotation on Windows. Audio transcription uses ffmpeg to chunk session recordings before passing them to Whisper for overlap-aware transcription. Session data from multiple PCs is merged server-side via paramiko SFTP. The backend serves pandas-powered analytics with response caching to reduce repeated computation. The frontend is modular with separate coach and player interfaces, shared component library, and React Router for navigation."
    },
    {
      id: 2,
      title: "Breda Guardians Esports Tool (B.G.E.T.)",
      tech: "FastAPI, React, TypeScript, Electron, Poetry, PostgreSQL",
      shortDesc: "Esports analytics platform with biometric integration and real-time dashboards — the first semester foundation of PlaySmart.",
      images: [
        `${process.env.PUBLIC_URL}/playometer1.png`,
        `${process.env.PUBLIC_URL}/playometer2.png`,
        `${process.env.PUBLIC_URL}/playometer3.png`,
        `${process.env.PUBLIC_URL}/playometer4.png`,
        `${process.env.PUBLIC_URL}/playometer5.png`,
        `${process.env.PUBLIC_URL}/playometer6.png`,
        `${process.env.PUBLIC_URL}/playometer7.png`,
      ],
      github: null,
      linkedin: "https://www.linkedin.com/posts/rachitrevalia_datascience-artificialintelligence-esportsanalytics-activity-7420833636448366592-6jz2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQK2x8BiZl14_lj5TqZPOllGkeYYDSYorw",
      isUniversityProject: true,
      purpose: "The original 18-week capstone project at Breda University of Applied Sciences, built in collaboration with the Breda Guardians esports team. As a Data Engineer, I designed and built the core data pipelines, application architecture, and system integration layer that became the foundation for PlaySmart in semester two. The platform integrates game telemetry, physiological data, and AI-powered performance metrics to help coaches analyse matches faster and make more informed training decisions across Valorant and League of Legends.",
      features: [
        "Real-time biometric data integration with Tobii Eye Tracker for gaze analysis",
        "Role-based dashboards tailored for coaches and players with different access levels",
        "Match performance tracking with detailed statistics and timeline visualization",
        "API integration with Riot Games and Henrik's Valorant API for comprehensive match data",
        "Timestamp-based correlation system matching local recordings with online match events",
        "JWT authentication system with secure session management",
        "Champion/agent matchup analysis with historical performance metrics",
        "Desktop and Android application built with Electron for cross-platform compatibility",
        "Production deployment on BUas Hive server with SSH/SFTP configuration",
        "Machine learning models for reaction time analysis and map awareness detection",
        "AI-powered inference pipeline on dedicated server for YOLO-based computer vision tasks",
        "Automated video annotation system generating metrics CSV reports from gameplay footage"
      ],
      techDetails: "Built with a modern full-stack architecture featuring FastAPI backend with Poetry dependency management and PostgreSQL database. Frontend developed in React with TypeScript for type safety, packaged as an Electron desktop application. Implements RESTful API design with rate limiting for external API calls. Backend handles complex data pipelines processing biometric CSV data, eye-tracking information, and gameplay statistics. Uses SSH/SFTP for secure server deployment and file management. Data synchronization achieved through timestamp matching algorithms correlating multiple data streams from different sources. Includes a machine learning pipeline with custom-trained YOLO models deployed on a separate AI server for reaction time analysis and map awareness detection."
    },
    {
      id: 3,
      title: "Task Manager Dashboard",
      tech: "Django, Python, JavaScript, CSS, SQLite",
      shortDesc: "Full-stack dashboard with login, deadlines, and task delegation.",
      images: [
        `${process.env.PUBLIC_URL}/project1.png`,
      ],
      github: "https://github.com/rachitrevalia/django-project",
      purpose: "A comprehensive task management system designed to streamline team collaboration and project organization. Built to address the need for efficient task delegation, deadline tracking, and team coordination in collaborative work environments.",
      features: [
        "User authentication system with secure login/logout functionality",
        "Intuitive task creation interface with title, description, and deadline fields",
        "Task delegation system allowing assignment of tasks to team members",
        "Real-time dashboard displaying all tasks in an organized grid layout",
        "Task lifecycle management with update and delete capabilities",
        "User role differentiation for task creators and assignees",
        "Deadline tracking to ensure timely task completion",
        "Responsive card-based UI for optimal viewing across devices"
      ],
      techDetails: "Built using Django's MTV (Model-Template-View) architecture with a SQLite database for efficient data persistence. The authentication system leverages Django's built-in user management for secure session handling. Frontend utilizes Django's template engine with Jinja2 syntax, Bootstrap 5 for responsive design, and vanilla JavaScript for dynamic interactions. The application implements CRUD operations through Django's ORM, ensuring clean separation of concerns and maintainable code structure."
    },
    {
      id: 5,
      title: "Library Management System",
      tech: "Python, SQLite",
      shortDesc: "Terminal-based system for borrowing, returning, and reserving books.",
      images: [
        `${process.env.PUBLIC_URL}/project3.png`,
      ],
      github: "https://github.com/rachitrevalia/library_management_system",
      purpose: "A command-line interface application designed to manage library operations including book inventory, borrowing, and user management.",
      features: [
        "Book catalog management",
        "Borrow and return book functionality",
        "Book reservation system",
        "User account management",
        "Search and filter books by various criteria"
      ],
      techDetails: "Pure Python application using SQLite for data storage. Implements object-oriented design patterns and uses SQL queries for data manipulation."
    },
    {
      id: 6,
      title: "Personal Portfolio Website",
      tech: "React, JavaScript, CSS",
      shortDesc: "Responsive developer portfolio with horizontal project gallery, modal overlays, and typewriter animation.",
      images: [`${process.env.PUBLIC_URL}/portfolio.png`],
      github: "https://github.com/rachitrevalia/portfolio",
      purpose: "Built to showcase my projects and technical background to recruiters and collaborators. Designed and developed from scratch with a focus on clean UI and smooth user experience.",
      features: [
        "Horizontal scrollable project gallery with modal detail views",
        "Typewriter animation cycling through role titles",
        "Responsive design across desktop and mobile",
        "Fade-in scroll animations",
        "Direct links to GitHub, LinkedIn, and project demos"
      ],
      techDetails: "Single-page React application with component-based architecture, CSS animations, and React hooks for state management. Deployed on Vercel."
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  return (
    <>
      <section id="projects" className="fade-in">
        <h2>Projects</h2>
        <div className="projects-wrapper">
          <button className="scroll-btn scroll-left" onClick={() => scroll('left')}>
            ‹
          </button>

          <div className="projects-scroll-container" ref={scrollContainerRef}>
            <div className="projects-horizontal">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="prcard"
                  onClick={() => openModal(project)}
                >
                  <div className="card-image-wrapper">
                    <img src={project.images[0]} alt={project.title} />
                  </div>
                  <h3>{project.title}</h3>
                  <button className="know-more-btn">Know More</button>
                </div>
              ))}
            </div>
          </div>

          <button className="scroll-btn scroll-right" onClick={() => scroll('right')}>
            ›
          </button>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            <div className="modal-body">
              <div className="modal-image-section">
                <div className="image-gallery">
                  {selectedProject.images.length > 1 && currentImageIndex > 0 && (
                    <button className="image-nav-btn prev-btn" onClick={prevImage}>
                      ‹
                    </button>
                  )}

                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} interface preview ${currentImageIndex + 1}`}
                    className="modal-image"
                  />

                  {selectedProject.images.length > 1 && currentImageIndex < selectedProject.images.length - 1 && (
                    <button className="image-nav-btn next-btn" onClick={nextImage}>
                      ›
                    </button>
                  )}
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="image-indicators">
                    {selectedProject.images.map((_, index) => (
                      <span
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="modal-details">
                <h2>{selectedProject.title}</h2>
                <p className="modal-tech">{selectedProject.tech}</p>

                <div className="modal-section">
                  <h3>Purpose</h3>
                  <p>{selectedProject.purpose}</p>
                </div>

                <div className="modal-section">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Technical Details</h3>
                  <p>{selectedProject.techDetails}</p>
                </div>

                {selectedProject.isUniversityProject && (
                  <div className="school-project-note">
                    <p>
                      <strong>Note:</strong> This was a university capstone project developed for real clients and stakeholders.
                      The repository is hosted on the university's private GitLab instance and is not publicly accessible.
                      But you can check the research website which explains more about the project.{' '}
                      <br />
                      <a href="https://research-website-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
                        https://research-website-sigma.vercel.app/
                      </a>
                    </p>
                  </div>
                )}

                <div className="project-links">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn github-link"
                    >
                      View on GitHub →
                    </a>
                  )}
                  {selectedProject.linkedin && (
                    <a
                      href={selectedProject.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn linkedin-link"
                    >
                      View LinkedIn Post →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .projects-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .scroll-btn {
          background: #00796B;
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 2rem;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.3s;
          z-index: 10;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .scroll-btn:hover {
          background: #005f56;
          transform: scale(1.1);
        }

        .scroll-btn:active {
          transform: scale(0.95);
        }

        .projects-scroll-container {
          overflow-x: auto;
          overflow-y: hidden;
          padding: 2rem 0;
          flex: 1;
          scrollbar-width: thin;
          scrollbar-color: #00796B #f0f0f0;
        }

        .projects-scroll-container::-webkit-scrollbar {
          height: 8px;
        }

        .projects-scroll-container::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 10px;
        }

        .projects-scroll-container::-webkit-scrollbar-thumb {
          background: #00796B;
          border-radius: 10px;
        }

        .projects-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #005f56;
        }

        .projects-horizontal {
          display: flex;
          gap: 2rem;
          padding: 0 1rem;
          min-width: min-content;
        }

        .prcard {
          flex: 0 0 400px;
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .prcard:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }

        .card-image-wrapper {
          width: 100%;
          height: 280px;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
        }

        .prcard img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .prcard h3 {
          margin: 1rem 0;
          color: #00796B;
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .know-more-btn {
          margin-top: 0.5rem;
          padding: 0.7rem 1.8rem;
          background: #00796B;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: background 0.3s, transform 0.2s;
          letter-spacing: 0.01em;
        }

        .know-more-btn:hover {
          background: #005f56;
          transform: scale(1.05);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          overflow-y: auto;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          max-width: 1100px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.8rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background 0.3s;
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 2rem;
        }

        .modal-image-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .image-gallery {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          border-radius: 12px;
          padding: 2rem;
          min-height: 400px;
        }

        .modal-image {
          max-width: 100%;
          max-height: 500px;
          object-fit: contain;
          border-radius: 8px;
        }

        .image-nav-btn {
          position: absolute;
          background: rgba(0, 121, 107, 0.8);
          color: white;
          border: none;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          font-size: 2rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .image-nav-btn:hover {
          background: rgba(0, 121, 107, 1);
          transform: scale(1.1);
        }

        .prev-btn {
          left: 1rem;
        }

        .next-btn {
          right: 1rem;
        }

        .image-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
          transition: all 0.3s;
        }

        .indicator.active {
          background: #00796B;
          width: 30px;
          border-radius: 5px;
        }

        .indicator:hover {
          background: #00796B;
        }

        .modal-details h2 {
          color: #00796B;
          margin-top: 0;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .modal-tech {
          color: #666;
          font-size: 1rem;
          margin: 0.5rem 0 1.5rem 0;
          padding-bottom: 1rem;
          border-bottom: 2px solid #e0e0e0;
          font-weight: 500;
        }

        .modal-section {
          margin: 1.5rem 0;
        }

        .modal-section h3 {
          color: #00796B;
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .modal-section p {
          color: #444;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .modal-section ul {
          list-style: none;
          padding: 0;
        }

        .modal-section ul li {
          color: #444;
          padding: 0.6rem 0;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
          font-size: 1.02rem;
        }

        .modal-section ul li:before {
          content: "→";
          position: absolute;
          left: 0;
          color: #00796B;
          font-weight: bold;
        }

        .school-project-note {
          background: #f0f9f8;
          border-left: 4px solid #00796B;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          border-radius: 4px;
        }

        .school-project-note p {
          margin: 0;
          color: #555;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .school-project-note strong {
          color: #00796B;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .project-link-btn {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: background 0.3s, transform 0.2s;
          font-size: 1rem;
          letter-spacing: 0.01em;
        }

        .project-link-btn:hover {
          transform: translateY(-2px);
        }

        .github-link {
          background: #00796B;
        }

        .github-link:hover {
          background: #005f56;
        }

        .linkedin-link {
          background: #0077B5;
        }

        .linkedin-link:hover {
          background: #005582;
        }

        @media (max-width: 968px) {
          .prcard {
            flex: 0 0 350px;
          }

          .card-image-wrapper {
            height: 240px;
          }

          .scroll-btn {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }

          .image-gallery {
            min-height: 300px;
          }

          .modal-image {
            max-height: 400px;
          }
        }

        @media (max-width: 600px) {
          .prcard {
            flex: 0 0 300px;
          }

          .card-image-wrapper {
            height: 200px;
          }

          .modal-overlay {
            padding: 1rem;
          }

          .modal-content {
            max-height: 95vh;
          }

          .modal-body {
            padding: 1rem;
          }

          .scroll-btn {
            display: none;
          }

          .image-gallery {
            min-height: 250px;
            padding: 1rem;
          }

          .modal-image {
            max-height: 300px;
          }

          .image-nav-btn {
            width: 35px;
            height: 35px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default Projects;