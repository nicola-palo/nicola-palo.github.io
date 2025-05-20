import React from "react";

function Footer() {
  return (
    <footer className="text-center py-8 mt-16 border-t border-white/10">
      <p className="" >© 2025 Tutti i diritti riservati</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/nicola-palo" target="_blank" rel="noopener" className="flex items-center gap-2 text-lg" style={{color: '#6D5DE7'}}>
          <i className="fab fa-github"></i>GitHub
        </a>
        <a href="https://linkedin.com/in/nicolapieropalo" target="_blank" rel="noopener" className="flex items-center gap-2 text-lg" style={{color: '#6D5DE7'}}>
          <i className="fab fa-linkedin"></i>LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
