
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
    
    if (service.category === 'streaming') {
      message = `Hola JhonnyDoxeoVip, deseo adquirir una cuenta de *${service.title}* por ${service.price}. ¿Tienen stock?`;
    } else if (service.category === 'programas') {
      message = `Hola JhonnyDoxeoVip, me interesa el servicio de programación: *${service.title}*.\n\nDescripción: ${service.result}\n\nDeseo una cotización para mi proyecto.`;
    } else {
      message = `Hola JhonnyDoxeoVip, solicito el servicio: *${service.title}*.\n\nRequisito: ${service.requirement}\nCosto: ${service.price}\n\nEspero instrucciones para el pago.`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  if (loading) return <LoadingScreen />;

  const filteredServices = SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-100 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-50 rounded-full blur-[100px]"></div>
      </div>

      <header className="relative pt-24 pb-16 px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-12 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">SISTEMAS VIP • ONLINE</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
          Jhonny<span className="gradient-text">DoxeoVip</span>
        </h1>
        
        <p className="text-slate-500 text-lg md:text-2xl font-bold max-w-2xl mx-auto leading-tight mb-16">
          Investigación digital avanzada, entretenimiento premium y desarrollo de software a medida.
        </p>

        {/* Categories */}
        <div className="flex justify-center">
          <div className="bg-white/70 backdrop-blur-md p-2 rounded-[2.5rem] flex flex-wrap justify-center gap-2 shadow-xl border border-white/50">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-6 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm font-black transition-all uppercase tracking-widest ${
                  activeCategory === cat.id 
                  ? 'bg-slate-900 text-white shadow-lg scale-105' 
                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                }`}
              >
                <span className="text-xl md:text-2xl">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 pb-40 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onPurchase={() => handlePurchase(service)} 
            />
          ))}
        </div>
      </main>

      <footer className="relative py-20 bg-white border-t border-slate-100 text-center z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 font-bold uppercase tracking-widest text-[9px]">
            <p>&copy; 2025 JHONNYDOXEOVIP • OSINT & DEV</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-indigo-600">SOPORTE ELITE</a>
              <a href="#" className="hover:text-indigo-600">GARANTÍA TOTAL</a>
            </div>
            <p className="text-indigo-600 font-black">ENCRIPTACIÓN DE DATOS ACTIVA</p>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
