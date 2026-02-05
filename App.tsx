import React, { useState, useEffect } from 'react';
import { SERVICES, WHATSAPP_NUMBER, CATEGORIES } from './constants';
import { ServiceCard } from './components/ServiceCard';
import { AIAssistant } from './components/AIAssistant';
import { LoadingScreen } from './components/LoadingScreen';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('doxeo');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handlePurchase = (service: typeof SERVICES[0]) => {
    let message = '';
    
    if (service.id === 'curso-generacion') {
      message = `¡Hola JhonnyDoxeoVip! 🚀 Vengo por el extraordinario *CURSO DE GENERACIÓN DE CUENTAS*. Estoy listo para aprender. Escribo la palabra: *!pagar* para continuar con la compra.`;
    } else if (service.category === 'streaming') {
      message = `Hola JhonnyDoxeoVip, deseo adquirir una cuenta de *${service.title}*.\nPlan: ${service.requirement}\nPrecio: ${service.price}.\n¿Tienen stock disponible?`;
    } else if (service.category === 'programas') {
      message = `Hola JhonnyDoxeoVip, me interesa tu servicio de Programación VIP: *${service.title}*.\nDescripción: ${service.result}\nTengo una idea/negocio y quiero que la hagas realidad.`;
    } else {
      message = `Hola JhonnyDoxeoVip, solicito el servicio de Inteligencia: *${service.title}*.\nRequisito: ${service.requirement}\nCosto: ${service.price}.`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  if (loading) return <LoadingScreen />;

  const filteredServices = SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0a0b] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[160px] transition-opacity duration-700 ${isDarkMode ? 'bg-blue-900/10 opacity-100' : 'bg-blue-500/5 opacity-50'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[140px] transition-opacity duration-700 ${isDarkMode ? 'bg-indigo-900/10 opacity-100' : 'bg-indigo-500/5 opacity-50'}`}></div>
      </div>

      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-[60]">
        <button 
          onClick={toggleTheme}
          className={`p-3 rounded-2xl border transition-all duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 text-amber-400 hover:bg-white/10' : 'bg-white border-slate-200 text-blue-600 shadow-lg hover:shadow-xl'}`}
          aria-label="Alternar modo de color"
        >
          {isDarkMode ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
          )}
        </button>
      </div>

      <header className="relative pt-32 pb-20 px-4 text-center z-10 animate-fade-up">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 border transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
          <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span className={`text-[9px] font-bold uppercase tracking-[0.3em] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Cyber Security Infrastructure</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
          <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>Jhonny</span><span className="gradient-text">DoxeoVip</span>
        </h1>
        
        <p className={`text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-16 px-4 transition-colors duration-300 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
          La verdad está en los datos. Convertimos el análisis de información en <span className="text-blue-500 font-bold">poder digital</span>.
        </p>

        <div className="flex justify-center px-4 overflow-x-auto custom-scrollbar pb-4">
          <div className={`p-1.5 rounded-2xl flex gap-1 shadow-2xl transition-all duration-300 ${isDarkMode ? 'glass-obsidian' : 'bg-white border border-slate-200'}`}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-6 md:px-8 py-3.5 rounded-xl text-[10px] md:text-xs font-bold transition-all uppercase tracking-widest border whitespace-nowrap ${
                  activeCategory === cat.id 
                  ? 'bg-blue-600 text-white shadow-lg border-blue-400/30' 
                  : isDarkMode 
                    ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border-transparent' 
                    : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50 border-transparent'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 pb-40 z-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              isDarkMode={isDarkMode}
              onPurchase={() => handlePurchase(service)} 
            />
          ))}
        </div>
      </main>

      <footer className={`relative py-16 border-t text-center z-10 transition-colors duration-300 ${isDarkMode ? 'bg-black/40 border-white/5' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-8 font-bold uppercase tracking-widest text-[8px] transition-colors duration-300 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            <p>&copy; 2025 JHONNYDOXEOVIP • CIBERSEGURIDAD DE ÉLITE</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-500 transition-colors">OSINT PROTOCOL</a>
              <a href="#" className="hover:text-blue-500 transition-colors">VIP SUPPORT</a>
            </div>
            <p className="text-blue-600 font-black">ENCRYPTED SESSION ACTIVE</p>
          </div>
        </div>
      </footer>

      <AIAssistant isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;