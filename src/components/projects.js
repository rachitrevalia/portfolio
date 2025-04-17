import React from 'react';

function Projects() {
  return (
    <section id="projects" class="fade-in">
            <h2>Projects</h2>
            <div class="projects-container">
                <div class="prcard">
                    <a href="https://github.com/rachitrevalia/django-project" rel="noopener noreferrer" class="project-link">
                    <img src={`${process.env.PUBLIC_URL}/project1.png`} alt='project1' />
                    <h3>Task Manager</h3>
                    <p>Tech: Django, Python, JS, CSS, SQLite</p>
                    <p>Full-stack dashboard with login, deadlines, and task delegation.</p>
                </a>
                </div>
                <div class="prcard">
                    <img src="project2.jpg"  alt='project2'/>
                    <h3>Flask Todo App</h3>
                    <p>Tech: Flask, SQLAlchemy, Bootstrap</p>
                    <p>Minimalistic todo app with filtering and Jinja templating.</p>
                </div>
                <div class="prcard">
                    <a href="https://github.com/rachitrevalia/library_management_system" rel="noopener noreferrer" class="project-link">
                    <img src={`${process.env.PUBLIC_URL}/project3.png`} alt='project3'/>
                    <h3>Library System</h3>
                    <p>Tech: Python, SQLite</p>
                    <p>Terminal-based system for borrowing, returning and reserving books.</p>
                </a>
                </div>
            </div>
        </section>
  );
}

export default Projects;