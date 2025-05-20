import React, { useState } from "react";

function Navbar({ onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent shadow-none w-full top-0 left-0 z-50 sticky">
            <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-2">
                <div className="flex items-center justify-center h-20">
                    <div className="flex items-center space-x-4">
                        <a href="#home" onClick={e => {e.preventDefault(); onNavigate('home')}} className="text-xl" style={{color: '#6D5DE7'}}>Home</a>
                        <span className="w-px h-4 bg-gray-300 opacity-40"></span>
                        <a href="#projects" onClick={e => {e.preventDefault(); onNavigate('projects')}} className="text-xl" style={{color: '#6D5DE7'}}>Projects</a>
                        <span className="w-px h-4 bg-gray-300 opacity-40"></span>
                        <a href="/contact" onClick={e => {e.preventDefault(); onNavigate('contact')}} className="text-xl" style={{color: '#6D5DE7'}}>Contact</a>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#home" onClick={e => {e.preventDefault(); onNavigate('home'); setIsOpen(false);}} className="block px-3 py-2 rounded-md text-base font-medium text-xl" style={{color: '#6D5DE7'}}>Home</a>
                        <a href="#projects" onClick={e => {e.preventDefault(); onNavigate('projects'); setIsOpen(false);}} className="block px-3 py-2 rounded-md text-base font-medium text-xl" style={{color: '#6D5DE7'}}>Projects</a>
                        <a href="#contact" onClick={e => {e.preventDefault(); onNavigate('contact'); setIsOpen(false);}} className="block px-3 py-2 rounded-md text-base font-medium text-xl" style={{color: '#6D5DE7'}}>Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;