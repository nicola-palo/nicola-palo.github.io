import React from "react";

const projects = [
  {
    title: "catalogoProdottiClient",
    description: "Progetto realizzato con Java Spring e MySQL, connessione a Rest e DB esterni (catalogoProdotti) per prodotti.",
    link: "https://github.com/nicola-palo/catalogoProdottiClient",
    icons: ["fab fa-java", "fas fa-leaf", "fas fa-database"]
  },
  {
    title: "catalogoProdotti",
    description: "Progetto realizzato con Java Spring e MySQL, permette la gestione di prodotti tramite Mvc e Rest.",
    link: "https://github.com/nicola-palo/catalogoProdotti",
    icons: ["fab fa-java", "fas fa-leaf", "fas fa-database"]
  },
  {
    title: "libriSpringMicroservice",
    description: "Progetto realizzato con Java Spring e MySQL, permette operazioni sul DataBase tramite chiamate HTTP.",
    link: "https://github.com/nicola-palo/springMicroserviceBook",
    icons: ["fab fa-java", "fas fa-leaf", "fas fa-database"]
  },
  {
    title: "automobiliJdbc",
    description: "Progetto realizzato con Java/Jdbc e MySQL. Permette la gestire automobili all'interno di un DataBase.",
    link: "https://github.com/nicola-palo/automobiliJdbc",
    icons: ["fab fa-java", "fas fa-database"]
  },
  {
    title: "rubricaJava",
    description: "Progetto realizzato con Java, simula la gestione di una rubrica collegata ad un utente senza DataBase.",
    link: "https://github.com/nicola-palo/rubricaJava",
    icons: ["fab fa-java"]
  },
];

function Project() {
  return (
    <div className="max-w-4xl w-full flex items-center justify-center min-h-[60vh] mt-10 mx-2 sm:mx-4">
      <div className="w-full rounded-lg bg-transparent p-4 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card bg-white dark:bg-neutral-800/95 rounded-2xl shadow p-4 sm:p-6 flex flex-col relative border border-gray-100 dark:border-neutral-800 transition-all hover:-translate-y-2 cursor-pointer group outline-none focus:ring-2 focus:ring-[#6D5DE7] overflow-hidden min-h-[220px]"
              style={{ textDecoration: 'none' }}
            >
              <h3 className="text-lg sm:text-2xl font-bold mb-2 mt-1 text-left break-words" style={{color: '#6D5DE7'}}>{proj.title}</h3>
              <p className="text-gray-900 dark:text-white mb-4 opacity-90 text-sm sm:text-base leading-relaxed text-left break-words whitespace-pre-line">
                {proj.description}
              </p>
              <div className="flex items-center justify-between w-full mt-auto">
                {/* Icone completamente a sinistra */}
                <span className="flex items-center gap-2">
                  {proj.icons.map((icon, i) => (
                    <i key={i} className={icon + ' text-base sm:text-lg'} style={{color: '#6D5DE7'}}></i>
                  ))}
                </span>
                {/* Link a destra */}
                <span className="inline-flex items-center font-medium text-[#6D5DE7] group-hover:translate-x-1 transition-all text-sm sm:text-base break-words">
                  Vedi progetto <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
