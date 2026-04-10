import React from 'react';
import { cvData } from './data';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="cv-container">
      {/* Sidebar - Dark Professional Sidebar */}
      <aside className="sidebar">
        <div className="profile-header">
          <h1>{cvData.header.name.split(' ').map((n, i) => i < 2 ? n : '').join(' ')}</h1>
          <p>AI & Software Engineer</p>
        </div>

        <div className="sidebar-section">
          <h2 className="sidebar-title">Contact</h2>
          <ul className="contact-list">
            <li>{cvData.header.location}</li>
            <li>{cvData.header.phone}</li>
            <li><a href={`mailto:${cvData.header.email}`}>{cvData.header.email}</a></li>
            <li><a href={cvData.header.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={cvData.header.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h2 className="sidebar-title">Expertise</h2>
          <div className="skill-pill-container">
            {cvData.skills.find(s => s.category === "Programming Languages")?.items.split(', ').map((skill, i) => (
              <span key={i} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="sidebar-section">
          <h2 className="sidebar-title">Frameworks</h2>
          <div className="skill-pill-container">
            {cvData.skills.find(s => s.category === "Frameworks & Libraries")?.items.split(', ').map((skill, i) => (
              <span key={i} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="sidebar-section">
          <h2 className="sidebar-title">Competencies</h2>
          <div className="skill-pill-container">
            {cvData.skills.find(s => s.category === "Core Competencies")?.items.split(', ').map((skill, i) => (
              <span key={i} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Print-only spacer to handle sidebar offset on Page 1 only */}
        <div className="print-sidebar-spacer"></div>

        <section className="main-section">
          <h2 className="main-section-title">Profile</h2>
          <p className="summary-text">{cvData.summary}</p>
        </section>

        <section className="main-section experience-page-break">
          <h2 className="main-section-title">Experience</h2>
          {cvData.experience?.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="item-header">
                <h3 className="item-title">{exp.role}</h3>
                <span className="item-meta">{exp.duration}</span>
              </div>
              <div className="item-subtitle">{exp.company} · {exp.type}</div>
              <ul className="item-list">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="main-section">
          <h2 className="main-section-title">Key Projects</h2>
          {cvData.projects.map((project, index) => (
            <div key={index} className="timeline-item">
              <div className="item-header">
                <h3 className="item-title">{project.title}</h3>
                <span className="item-meta">Project</span>
              </div>
              <div className="item-subtitle">{project.tech}</div>
              <ul className="item-list">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="main-section">
          <h2 className="main-section-title">Education</h2>
          {cvData.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="item-header">
                <h3 className="item-title">{edu.degree}</h3>
                <span className="item-meta">{edu.graduation.split(': ')[1] || edu.graduation}</span>
              </div>
              <div className="item-subtitle">{edu.institution}</div>
              <ul className="item-list">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
