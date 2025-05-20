import React from "react";

function Contact() {
  return (
    <div className="max-w-md w-full flex items-center justify-center min-h-[60vh] mt-10">
      <div className="w-full rounded-lg bg-transparent p-8">
        <div className="flex flex-col items-center gap-6 mb-6 w-full">
          <a href="mailto:nicolapiero.palo@gmail.com" className="flex flex-col items-center justify-center w-40 p-4 rounded-lg hover:bg-white/10 transition cursor-pointer" style={{color: '#6D5DE7'}} title="Email">
            <div className="text-5xl mb-2"><i className="fas fa-envelope"></i></div>
            <span className="text-lg font-semibold">Email</span>
          </a>
          <a href="https://github.com/nicola-palo" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-40 p-4 rounded-lg hover:bg-white/10 transition cursor-pointer" style={{color: '#6D5DE7'}} title="GitHub">
            <div className="text-5xl mb-2"><i className="fab fa-github"></i></div>
            <span className="text-lg font-semibold">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/nicolapieropalo" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-40 p-4 rounded-lg hover:bg-white/10 transition cursor-pointer" style={{color: '#6D5DE7'}} title="LinkedIn">
            <div className="text-5xl mb-2"><i className="fab fa-linkedin"></i></div>
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
