import React, { useState, useEffect } from 'react';
import { SERVICES, WHATSAPP_NUMBER, CATEGORIES } from './constants';
import { ServiceCard } from './components/ServiceCard';
import { AIAssistant } from './components/AIAssistant';
import { LoadingScreen } from './components/LoadingScreen';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('doxeo');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="min-h-screen bg-[#0a0a0b] text-slate-200">
      {/* Background Decor - Minimalist Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[140px]"></div>
      </div>

      <header className="relative pt-32 pb-20 px-4 text-center z-10 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-10">
          <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Cyber Security Infrastructure</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
          Jhonny<span className="gradient-text">DoxeoVip</span>
        </h1>
        
        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-16 px-4">
          La verdad está en los datos. Convertimos el análisis de información en <span className="text-blue-400">poder digital</span>.
        </p>

        <div className="flex justify-center px-4 overflow-x-auto custom-scrollbar pb-4">
          <div className="glass-obsidian p-1.5 rounded-2xl flex gap-1 shadow-2xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-6 md:px-8 py-3.5 rounded-xl text-[10px] md:text-xs font-bold transition-all uppercase tracking-widest border border-transparent whitespace-nowrap ${
                  activeCategory === cat.id 
                  ? 'bg-blue-600 text-white shadow-lg border-blue-400/30' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
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
              onPurchase={() => handlePurchase(service)} 
            />
          ))}
        </div>
      </main>

      <footer className="relative py-16 bg-black/40 border-t border-white/5 text-center z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 font-bold uppercase tracking-widest text-[8px]">
            <p>&copy; 2025 JHONNYDOXEOVIP • CIBERSEGURIDAD DE ÉLITE</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-500 transition-colors">OSINT PROTOCOL</a>
              <a href="#" className="hover:text-blue-500 transition-colors">VIP SUPPORT</a>
            </div>
            <p className="text-blue-900 font-black">ENCRYPTED SESSION ACTIVE</p>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;