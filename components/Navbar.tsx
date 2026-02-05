
import React from 'react';
import { SITE_NAME } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            {SITE_NAME}
          </span>
          <div className="hidden sm:block w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        </div>
        <div className="flex gap-8 text-sm font-medium tracking-wide">
          <a href="#services" className="hover:text-violet-400 transition-colors">SERVICIOS</a>
          <a href="#about" className="hover:text-violet-400 transition-colors">NOSOTROS</a>
          <a href="#" className="text-violet-500 border border-violet-500/50 px-4 py-1 rounded-full hover:bg-violet-500 hover:text-white transition-all">ACCESO</a>
        </div>
      </div>
    </nav>
  );
};
