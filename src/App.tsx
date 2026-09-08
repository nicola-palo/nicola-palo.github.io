import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './App.css';

type Language = 'en' | 'it';

interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo';
}

interface Project {
  id: number;
  title: string;
  description: Record<Language, string>;
  technologies: string[];
  links: ProjectLink[];
}

interface Skill {
  name: string;
}

const translations: Record<
  Language,
  {
    heroSubtitle: string;
    heroDescription: string;
    heroHook: string;
    projectsTitle: string;
    skillsTitle: string;
    contactsTitle: string;
    footerText: string;
  }
> = {
  en: {
    heroSubtitle: "AI ENGINEER | SOFTWARE ENGINEER",
    heroDescription:
      "Software Engineer bridging robust backend architectures with production-grade AI. Specialized in microservices (Java/Python), LLM pipelines, RAG systems, and scalable data-driven services.",
    heroHook: "I don't stop at the prototype: I design and ship backend systems and AI pipelines to production, from the database to the API.",
    projectsTitle: "Featured Projects",
    skillsTitle: "Technical Skills",
    contactsTitle: "Get in Touch",
    footerText: "\u00A9 2026 Nicola Palo. All rights reserved.",
  },
  it: {
    heroSubtitle: "AI ENGINEER | SOFTWARE ENGINEER",
    heroDescription:
      "Ingegnere del software che unisce backend solido e intelligenza artificiale in produzione. Specializzato in microservizi (Java/Python), pipeline LLM, sistemi RAG e architetture scalabili.",
    heroHook: "Non mi fermo al prototipo: progetto e porto in produzione sistemi backend e pipeline AI, dal database fino all'API.",
    projectsTitle: "Progetti in Evidenza",
    skillsTitle: "Competenze Tecniche",
    contactsTitle: "Contatti",
    footerText: "\u00A9 2026 Nicola Palo. Tutti i diritti riservati.",
  },
};

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema ATM a microservizi",
    description: {
      en: "Full ATM system designed and built end-to-end across three microservices: a React front end, a Java/Spring core service, and a Python/Flask chat-support service, each with its own database.",
      it: "Sistema ATM completo, progettato e costruito end-to-end su tre microservizi: front end in React, servizio core in Java/Spring e servizio di assistenza chat in Python/Flask, ciascuno con il proprio database.",
    },
    technologies: ["React", "Java", "Spring", "Python", "Flask", "PostgreSQL", "SQLite", "Docker"],
    links: [
      { label: "Live Demo", url: "https://nicolapalo.it/fe.bancomat.react/", type: 'demo' },
      { label: "Frontend (React)", url: "https://github.com/nicola-palo/fe.bancomat.react", type: 'github' },
      { label: "Backend (Java/Spring)", url: "https://github.com/nicola-palo/be.bancomat.java", type: 'github' },
      { label: "Chat support (Python/Flask)", url: "https://github.com/nicola-palo/be.chatBancomat.python", type: 'github' },
    ],
  },
  {
    id: 2,
    title: "wa.prenotaIlTuoTavolo.py",
    description: {
      en: "Customizable restaurant table reservation platform. Deployed with PythonAnywhere.",
      it: "Programma di prenotazione tavoli completamente personalizzabile. Pubblicato con PythonAnywhere.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"],
    links: [
      { label: "Live Demo", url: "https://nicolapieropalo.pythonanywhere.com/", type: 'demo' },
      { label: "GitHub", url: "https://github.com/nicola-palo/prenota-il-tuo-tavolo.git", type: 'github' },
    ],
  },
  {
    id: 3,
    title: "antigravityVSplug-in",
    description: {
      en: "VSCodium and VSCode extension to integrate Antigravity directly into the IDE, developed prior to the current official release.",
      it: "Plugin di VSCodium e VSCode che permette di utilizzare Antigravity all'interno dell'ide, creato prima di quello ufficiale attuale.",
    },
    technologies: ["React", "Prompt Engineering", "API"],
    links: [
      { label: "GitHub", url: "https://github.com/nicola-palo/antigravityVSplug-in", type: 'github' },
    ],
  },
  {
    id: 4,
    title: "HybridRAG",
    description: {
      en: "Hybrid RAG backend (vector + full-text) under development on PostgreSQL: targets a streaming, secure, and Langfuse-monitored FastAPI service.",
      it: "Backend RAG ibrido (vettoriale + full-text) in sviluppo su PostgreSQL: punta a un'API FastAPI in streaming, sicura e monitorata con Langfuse.",
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Langfuse"],
    links: [
      { label: "GitHub", url: "https://github.com/nicola-palo/HybridRAG", type: 'github' },
    ],
  },
];

const skills: Skill[] = [
  { name: "Python" },
  { name: "Java" },
  { name: "TypeScript" },
  { name: "Prompt Engineering" },
  { name: "Claude Code" },
  { name: "Opencode" },
  { name: "Spring" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "SQL" },
  { name: "Docker" },
  { name: "Git" },
  { name: "React" },
  { name: "Pytorch" },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
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

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'it') {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleLanguageToggle = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = event.target as HTMLElement;
    const requestedLanguage = target.dataset.lang;

    if (requestedLanguage === 'en' || requestedLanguage === 'it') {
      setLanguage(requestedLanguage);
      return;
    }

    setLanguage((prev) => (prev === 'en' ? 'it' : 'en'));
  };

  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Nicola Palo</h1>
          <div className="header-actions">
            <button
              type="button"
              onClick={handleLanguageToggle}
              className="language-toggle"
              aria-label="Toggle language"
              data-active={language}
            >
              <span
                data-lang="en"
                className={`toggle-option ${
                  language === 'en' ? 'active' : ''
                }`}
              >
                en
              </span>
              <span
                data-lang="it"
                className={`toggle-option ${
                  language === 'it' ? 'active' : ''
                }`}
              >
                it
              </span>
              <span
                className={`toggle-thumb ${
                  language === 'it' ? 'toggle-thumb-right' : 'toggle-thumb-left'
                }`}
                aria-hidden="true"
              />
            </button>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Nicola Palo</h1>
          <h2 className="hero-subtitle">{t.heroSubtitle}</h2>
          <p className="hero-description">{t.heroDescription}</p>
          <p className="hero-hook">{t.heroHook}</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t.projectsTitle}</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card${
                  index === 0 ? ' project-card-featured' : ''
                }`}
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description[language]}
                </p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="button-group">
                  {(() => {
                    const primary =
                      project.links.find((l) => l.type === 'demo') ||
                      project.links[0];
                    const secondary = project.links.filter(
                      (l) => l.url !== primary.url
                    );
                    const renderLink = (link: ProjectLink) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${
                          link.type === 'demo' ? 'btn-secondary' : 'btn-primary'
                        }`}
                      >
                        {link.type === 'github' ? (
                          <Github size={16} />
                        ) : (
                          <ExternalLink size={16} />
                        )}
                        {link.label}
                      </a>
                    );
                    return (
                      <>
                        {renderLink(primary)}
                        {secondary.map(renderLink)}
                      </>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t.skillsTitle}</h2>
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
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
            <h2 className="section-title">{t.contactsTitle}</h2>
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
          <p className="footer-text">{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;