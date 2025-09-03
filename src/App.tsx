import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './App.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface Skill {
  name: string;
  level: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Prenota il tuo tavolo",
    description: "Programma di prenotazione tavoli completamente personalizzabile.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/nicola-palo/prenota-il-tuo-tavolo.git",
    liveUrl: "https://nicolapieropalo.pythonanywhere.com/"
  },
  {
    id: 2,
    title: "RicettAIo",
    description: "Programma generare ricette con IA da ingredienti.",
    technologies: ["React", "Prompt Engineering", "API"],
    githubUrl: "https://github.com/nicola-palo/ricettAIo.git",
    liveUrl: "https://nicolapalo.eu/ricettAIo/"
  }
];

const skills: Skill[] = [
  { name: "Prompt Engineering", level: "Base" },
  { name: "React", level: "Base" },
  { name: "JavaScript", level: "Base" },
  { name: "Python", level: "Base" },
  { name: "SQL", level: "Base" },
  { name: "Git", level: "Intermedio" },
  { name: "Docker", level: "Base" },
  { name: "Java", level: "Intermedio" },
  { name: "HTML", level: "Base" },
  { name: "CSS", level: "Base" },
  { name: "Bootstrap", level: "Base" },
  { name: "Spring Boot", level: "Base" },
  { name: "Spring Data JPA", level: "Base" }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Nicola Palo</h1>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Nicola Palo</h1>
          <h2 className="hero-subtitle">Junior Developer</h2>
          <p className="hero-description">
          Laureato in Informatica con esperienza lavorativa nel settore IT. Ho maturato competenze pratiche nella programmazione e nello sviluppo software, 
          consolidando le conoscenze acquisite durante il percorso universitario e le varie certificazioni.
          Sono una persona curiosa e orientata alla crescita continua: mi piace esplorare nuove tecnologie e arricchire costantemente le mie competenze, 
          mantenendo un approccio flessibile e aperto a nuove sfide professionali.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Progetti</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="button-group">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-container">
            <h2 className="section-title">Contatti</h2>
            <div className="contact-buttons">
              <a
                href="https://github.com/nicola-palo"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn github"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nicolapieropalo"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn linkedin"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="mailto:nicolapiero.palo@gmail.com"
                className="contact-btn email"
              >
                <Mail size={20} />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">&copy; 2025 Nicola Palo. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
