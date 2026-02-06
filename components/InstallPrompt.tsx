
import React, { useState, useEffect } from 'react';

export const InstallPrompt: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'other'>('other');

  const APP_ICON = "https://cdn-icons-png.flaticon.com/512/11189/11189014.png";

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);
    const isInstalled = (window.navigator as any).standalone === true || window.matchMedia('(display-mode: standalone)').matches;

    if (!isInstalled && (isIOS || isAndroid)) {
      setPlatform(isIOS ? 'ios' : 'android');
      // Mostrar después de un pequeño delay
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 z-[150] animate-fade-up">
      <div className={`p-6 rounded-[2rem] shadow-2xl border flex flex-col gap-4 ${isDarkMode ? 'glass-obsidian border-white/10' : 'bg-white border-slate-200'}`}>
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center p-2 shadow-lg overflow-hidden border border-white/10">
            <img src={APP_ICON} alt="App Icon" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className={`font-black text-sm tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Instalar App JhonnyDoxeoVip
            </h3>
            <p className={`text-[11px] font-bold mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {platform === 'ios' 
                ? 'Toca el icono de "Compartir" y luego "Añadir a pantalla de inicio"' 
                : 'Instala el acceso directo para entrar como una App nativa.'}
            </p>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-slate-500 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {platform === 'android' && (
          <button 
            className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
            onClick={() => {
              alert('Haz clic en los tres puntos de arriba y selecciona "Instalar aplicación"');
              setIsVisible(false);
            }}
          >
            Instalar Ahora
          </button>
        )}
      </div>
    </div>
  );
};
