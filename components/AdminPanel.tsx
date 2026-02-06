
import React, { useState } from 'react';

interface AdminPanelProps {
  currentAnnouncement: string;
  onUpdate: (newMsg: string) => void;
  onClose: () => void;
  isDarkMode: boolean;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ currentAnnouncement, onUpdate, onClose, isDarkMode }) => {
  const [newMsg, setNewMsg] = useState(currentAnnouncement);

  const handleNotify = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('JhonnyDoxeoVip Elite', {
        body: newMsg,
        icon: 'https://i.postimg.cc/1RGDBBJW/Gemini-Generated-Image-vwp3quvwp3quvwp3.png'
      });
    } else {
      alert('Las notificaciones no están permitidas o no han sido solicitadas en este navegador.');
    }
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
      <div className={`w-full max-w-md p-8 rounded-[2.5rem] border shadow-2xl ${isDarkMode ? 'bg-[#0f0f12] border-white/10' : 'bg-white border-slate-200'}`}>
        <h2 className="text-2xl font-black mb-6 tracking-tighter uppercase">Panel de Control VIP</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Anuncio del Sistema (Banner Superior)</label>
            <textarea 
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              className={`w-full p-4 rounded-2xl text-xs font-mono border outline-none focus:border-blue-500 transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
              rows={4}
              placeholder="Ej: 🛡️ SISTEMA ACTUALIZADO. Gracias por descargar la App. Aprovecha hoy: Cuentas Streaming desde 5 soles. ¡Solo por tiempo limitado! 🚀"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => onUpdate(newMsg)}
              className="py-4 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
            >
              Publicar Cambios
            </button>
            <button 
              onClick={handleNotify}
              className="py-4 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all"
            >
              Lanzar Alerta
            </button>
          </div>
          
          <button 
            onClick={onClose}
            className="w-full py-4 bg-white/5 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-white/5 hover:text-white transition-colors"
          >
            Cerrar Terminal
          </button>
        </div>
      </div>
    </div>
  );
};
