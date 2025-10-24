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
  level: Record<Language, string>;
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
    heroSubtitle: "AI Engineer & Software Developer",
    heroDescription:
      "Computer Science graduate with professional IT experience. I gained hands-on skills in software development, reinforcing the knowledge earned at university and through certifications. I am curious and growth oriented: I enjoy exploring new technologies and expanding my expertise with a flexible, open mindset.",
    projectsTitle: "Projects",
    skillsTitle: "Skills",
    contactsTitle: "Contacts",
    footerText: "\u00A9 2025 Nicola Palo. All rights reserved.",
    liveDemoLabel: "Live Demo",
  },
  it: {
    heroSubtitle: "AI Engineer & Software Developer",
    heroDescription:
      "Laureato in Informatica con esperienza lavorativa nel settore IT. Ho maturato competenze pratiche nello sviluppo software, consolidando le conoscenze acquisite all'universita e tramite varie certificazioni. Sono curioso e orientato alla crescita: mi piace esplorare nuove tecnologie e ampliare costantemente le mie competenze mantenendo un approccio flessibile e aperto alle sfide.",
    projectsTitle: "Progetti",
    skillsTitle: "Competenze",
    contactsTitle: "Contatti",
    footerText: "\u00A9 2025 Nicola Palo. Tutti i diritti riservati.",
    liveDemoLabel: "Demo online",
  },
};

const projects: Project[] = [
  {
    id: 1,
    title: "ragEngine",
    description: {
      en: "Application to build and manage RAG pipelines, fully local and connected with Ollama LLM models.",
      it: "Applicazione per gestire e creare RAG. Interamente locale e collegata con modelli LLM di Ollama.",
    },
    technologies: ["React", "Sviluppo Android"],
    githubUrl: "https://github.com/nicola-palo/RAG_engine",
  },
  {
    id: 2,
    title: "fitMaster",
    description: {
      en: "Offline Android app for tracking exercises and workouts, built in Kotlin.",
      it: "Applicazione interamente locale per la gestione di esercizi e allenamenti, realizzata in Kotlin per Android.",
    },
    technologies: ["Kotlin", "Sviluppo Android"],
    githubUrl: "https://github.com/nicola-palo/FitMaster",
  },
  {
    id: 3,
    title: "catalogoProdotti",
    description: {
      en: "Java Spring and MySQL project for product management with MVC and REST endpoints.",
      it: "Progetto realizzato con Java Spring e MySQL, permette la gestione di prodotti tramite Mvc e Rest.",
    },
    technologies: ["Spring", "MySQL", "API"],
    githubUrl: "https://github.com/nicola-palo/catalogoProdotti.git",
  },
  {
    id: 4,
    title: "catalogoProdottiClient",
    description: {
      en: "Java Spring client connected to external REST APIs and database from catalogoProdotti.",
      it: "Progetto realizzato con Java Spring e MySQL, connessione a Rest e DB esterni (catalogoProdotti) per prodotti.",
    },
    technologies: ["Spring", "API"],
    githubUrl: "https://github.com/nicola-palo/catalogoProdottiClient.git",
  },
  {
    id: 5,
    title: "prenotaIlTuoTavolo",
    description: {
      en: "Customizable restaurant table reservation platform.",
      it: "Programma di prenotazione tavoli completamente personalizzabile.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/nicola-palo/prenota-il-tuo-tavolo.git",
    liveUrl: "https://nicolapieropalo.pythonanywhere.com/",
  },
  {
    id: 6,
    title: "ricettAIo",
    description: {
      en: "AI powered recipe generator based on available ingredients.",
      it: "Programma per generare ricette con AI da ingredienti.",
    },
    technologies: ["React", "Prompt Engineering", "API"],
    githubUrl: "https://github.com/nicola-palo/ricettAIo.git",
    liveUrl: "https://nicolapalo.eu/ricettAIo/",
  },
];

const skills: Skill[] = [
  { name: "RAG", level: { en: "Beginner", it: "Base" } },
  { name: "Prompt Engineering", level: { en: "Beginner", it: "Base" } },
  { name: "React", level: { en: "Beginner", it: "Base" } },
  { name: "Python", level: { en: "Beginner", it: "Base" } },
  { name: "SQL", level: { en: "Beginner", it: "Base" } },
  { name: "Git", level: { en: "Intermediate", it: "Intermedio" } },
  { name: "Docker", level: { en: "Beginner", it: "Base" } },
  { name: "Java", level: { en: "Intermediate", it: "Intermedio" } },
  { name: "HTML", level: { en: "Beginner", it: "Base" } },
  { name: "CSS", level: { en: "Beginner", it: "Base" } },
  { name: "Bootstrap", level: { en: "Beginner", it: "Base" } },
  { name: "Spring", level: { en: "Beginner", it: "Base" } },
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
                  <div className="skill-level">{skill.level[language]}</div>
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
