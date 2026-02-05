
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full border border-violet-500/20 text-xs font-mono text-violet-400 tracking-widest animate-fade-in">
          ESTADO: ONLINE • ENCRIPTACIÓN AES-256
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
          La verdad está <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            en los datos
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Especialistas en recolección de inteligencia digital, seguridad OSINT y análisis de huella digital. Descubre lo que la red sabe sobre cualquier objetivo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#services" 
            className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-violet-500/20"
          >
            Ver Catálogo de Servicios
          </a>
          <button className="px-8 py-4 glass text-white rounded-xl font-bold hover:bg-white/10 transition-all">
            Consultoría Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};
