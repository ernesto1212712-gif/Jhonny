
import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const messages = [
    "Iniciando Protocolos Elite...",
    "Sincronizando Nodos de Inteligencia...",
    "Validando Identidad del Sistema...",
    "Desplegando Arquitectura Web...",
    "Estableciendo Canal Seguro AES-256..."
  ];

  const APP_ICON = "https://cdn-icons-png.flaticon.com/512/11189/11189014.png";

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const msgTimer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 700);

    return () => {
      clearInterval(timer);
      clearInterval(msgTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-[#0a0a0b] flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Luxury Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-blue-900/5 rounded-full blur-[160px] animate-pulse"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-14 relative group">
          <div className="w-20 h-20 border-2 border-white/5 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img src={APP_ICON} alt="Logo" className="w-full h-full object-contain animate-pulse" />
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tighter text-white mb-3">
          Jhonny<span className="text-blue-500">DoxeoVip</span>
        </h2>
        
        <p className="text-slate-600 font-bold tracking-[0.3em] text-[8px] mb-12 h-4 uppercase">
          {messages[msgIndex]}
        </p>

        <div className="w-60 h-1 bg-white/5 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="font-mono text-[9px] text-slate-700 flex gap-6 uppercase tracking-widest font-bold">
          <span>{progress}% COMPLETO</span>
          <span className="animate-pulse text-blue-900">SYSTEM: SECURE</span>
        </div>
      </div>
    </div>
  );
};
