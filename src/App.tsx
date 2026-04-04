import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './App.css';

type Language = 'en' | 'it';

interface Project {
  id: number;
  title: string;
  description: Record<Language, string>;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface Skill {
  name: string;
}

const translations: Record<
  Language,
  {
    heroSubtitle: string;
    heroDescription: string;
    projectsTitle: string;
    skillsTitle: string;
    contactsTitle: string;
    footerText: string;
    liveDemoLabel: string;
  }
> = {
  en: {
    heroSubtitle: "Software Developer",
    heroDescription:
      "I am a 26-year-old IT professional with a degree in Computer Science and proven experience in programming. Through ongoing training and the " +
        "attainment of technical certifications, I have developed strong problem-solving skills and the ability to adapt to new technologies. As a results-oriented and collaborative professional, " +
        "I am constantly seeking new challenges that allow me to combine my passion for digital innovation with professional growth within dynamic organizations and well-structured teams",
    projectsTitle: "Projects",
    skillsTitle: "Skills",
    contactsTitle: "Contacts",
    footerText: "\u00A9 2025 Nicola Palo. All rights reserved.",
    liveDemoLabel: "Live Demo",
  },
  it: {
    heroSubtitle: "Software Developer",
    heroDescription:
      "Professionista IT di 26 anni con laurea in Informatica e comprovata esperienza nella programmazione. Grazie a un percorso di formazione continua e al conseguimento di certificazioni tecniche, " +
        "ho sviluppato una spiccata capacità di problem solving e adattamento tecnologico. Orientato ai risultati e alla collaborazione, ricerco" +
        " costantemente nuove sfide che mi permettano di coniugare la mia passione per l'innovazione digitale con la crescita professionale all'interno di realtà dinamiche e team strutturati.",
    projectsTitle: "Progetti",
    skillsTitle: "Competenze",
    contactsTitle: "Contatti",
    footerText: "\u00A9 2025 Nicola Palo. Tutti i diritti riservati.",
    liveDemoLabel: "Live Demo",
  },
};

const projects: Project[] = [
  {
    id: 1,
    title: "game.pratoFiorito.cpp",
    description: {
      en: "Simple flower lawn terminal game",
      it: "Semplice gioco da terminale di prato fiorito",
    },
    technologies: ["C++"],
    githubUrl: "https://github.com/nicola-palo/game.pratoFiorito.cpp"
  },
  {
    id: 2,
    title: "ricettAIo",
    description: {
      en: "AI powered recipe generator based on available ingredients.",
      it: "Programma per generare ricette con AI da ingredienti.",
    },
    technologies: ["React", "Prompt Engineering", "API"],
    githubUrl: "https://github.com/nicola-palo/ricettAIo.git",
    liveUrl: "https://nicolapalo.eu/ricettAIo/",
  },
  {
    id: 3,
    title: "webapp.prenotaIlTuoTavolo.python",
    description: {
      en: "Customizable restaurant table reservation platform. Deployed with PythonAnywhere.",
      it: "Programma di prenotazione tavoli completamente personalizzabile. Pubblicato con PythonAnywhere.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/nicola-palo/prenota-il-tuo-tavolo.git",
    liveUrl: "https://nicolapieropalo.pythonanywhere.com/",
  },

  {
    id: 4,
    title: "fe.bancomat.react",
    description: {
      en: "React-based front end ATM, connected to two microservices with dedicated databases. Published on GitHub Pages.",
      it: "FE ATM realizzato in React, collegato a due microservizi con appositi DB. Pubblicato con GitHub Pages.",
    },
    technologies: ["React"],
    githubUrl: "https://github.com/nicola-palo/fe.bancomat.react",
    liveUrl: "https://nicolapalo.eu/fe.bancomat.react/",
  },
  {
    id: 5,
    title: "be.bancomat.java",
    description: {
      en: "BE ATM main, first microservice developed in Java with Spring and PostgreSQL. Deployed with Render.",
      it: "BE ATM principale, primo microservizio realizzato in Java con Spring e PostgreSQL. Pubblicato con Render.",
    },
    technologies: ["Spring", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/nicola-palo/be.bancomat.java",
  },
  {
    id: 6,
    title: "be.chatBancomat.python",
    description: {
      en: "BE ATM of the Chat support, second microservice, built with Flask and SQLite. Deployed with Render.",
      it: "BE ATM dell'assistenza Chat, secondo microservizio, realizzato con Flask e SQLite. Pubblicato con Render.",
    },
    technologies: ["Flask", "SQLite", "Docker"],
    githubUrl: "https://github.com/nicola-palo/be.chatBancomat.python",
  },

];

const skills: Skill[] = [
  { name: "C++" },
  { name: "Python" },
  { name: "Docker" },
  { name: "Canva" },
  { name: "Java" },
  { name: "Spring" },
  { name: "SQL" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Git" },
  { name: "Claude Code" }
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
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t.projectsTitle}</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
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
                      {t.liveDemoLabel}
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
