
import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const messages = [
    "Iniciando Protocolos de Jhonny...",
    "Sincronizando Bases de Datos...",
    "Cargando Servicios de Jhonny...",
    "Verificando Estado de API...",
    "Estableciendo Conexión Segura..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    const msgTimer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 600);

    return () => {
      clearInterval(timer);
      clearInterval(msgTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-indigo-100 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-fuchsia-100 rounded-full blur-[100px] animate-pulse delay-500"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-12 relative">
          <div className="w-20 h-20 border-4 border-slate-100 border-t-indigo-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl">⚡</span>
          </div>
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
          Jhonny<span className="text-indigo-600">DoxeoVip</span>
        </h2>
        
        <p className="text-slate-400 font-mono tracking-wider text-xs mb-8 h-4 uppercase">
          {messages[msgIndex]}
        </p>

        <div className="w-72 h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-sm mb-4">
          <div 
            className="h-full bg-indigo-600 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(79,70,229,0.4)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="font-mono text-[10px] text-slate-500 flex gap-4 uppercase">
          <span>{progress}% COMPLETO</span>
          <span className="animate-pulse">SISTEMA: ONLINE</span>
        </div>
      </div>
    </div>
  );
};
