import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  isDarkMode: boolean;
  onPurchase: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, isDarkMode, onPurchase }) => {
  const badgeStyles = {
    STANDARD: isDarkMode ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-500',
    PREMIUM: 'bg-blue-600/10 text-blue-500 border border-blue-500/20',
    VIP: 'bg-amber-600/10 text-amber-500 border border-amber-500/20',
    FREEMIUM: 'bg-emerald-600/10 text-emerald-500 border border-emerald-500/20'
  };

  const isCommand = service.requirement.startsWith('/') || service.requirement.includes('|');

  return (
    <div className={`group rounded-3xl p-8 card-luxury flex flex-col h-full relative overflow-hidden transition-all duration-300 ${isDarkMode ? 'glass-obsidian' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50 hover:border-blue-200'}`}>
      {/* Luxury Gradient Accent */}
      {service.badge === 'VIP' && (
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none transition-opacity ${isDarkMode ? 'bg-amber-500/5' : 'bg-amber-500/10'}`}></div>
      )}

      <div className="flex justify-between items-start mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border transition-all duration-500 overflow-hidden ${isDarkMode ? 'bg-white/5 border-white/5 group-hover:border-blue-500/30' : 'bg-slate-50 border-slate-100 group-hover:border-blue-400 shadow-sm'}`}>
          {service.logoUrl ? (
            <img src={service.logoUrl} alt={service.title} className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity" />
          ) : (
            <span className="opacity-80 group-hover:opacity-100">{service.icon}</span>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] ${badgeStyles[service.badge]}`}>
            {service.badge}
          </span>
          <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
            <div className={`w-1 h-1 rounded-full animate-pulse ${service.status === 'OPERATIVO' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
            <span className={`text-[7px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{service.status}</span>
          </div>
        </div>
      </div>

      <h3 className={`text-lg font-bold mb-3 leading-tight tracking-wide group-hover:text-blue-500 transition-colors uppercase ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
        {service.title}
      </h3>

      <div className="flex-grow space-y-4 mb-10">
        <div className="flex flex-col gap-1.5">
          <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>Requisito:</span>
          <span className={`text-xs font-mono break-all py-1.5 px-3 rounded-lg border transition-colors ${isDarkMode ? 'border-white/5 bg-white/[0.02] text-blue-400' : 'border-slate-100 bg-slate-50 text-blue-600'}`}>
            {service.requirement}
          </span>
        </div>

        <div className={`p-4 rounded-2xl border transition-colors ${isDarkMode ? 'bg-white/[0.01] border-white/5 group-hover:bg-white/[0.03]' : 'bg-slate-50 border-slate-100 group-hover:bg-white group-hover:border-blue-100'}`}>
          <p className={`text-[8px] font-bold uppercase tracking-[0.2em] mb-2 ${isDarkMode ? 'text-slate-700' : 'text-slate-400'}`}>Información del Sistema</p>
          <p className={`text-[11px] leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {service.result}
          </p>
        </div>
      </div>

      <div className={`flex items-center justify-between mt-auto pt-6 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
        <div>
          <p className={`text-[8px] font-bold uppercase tracking-[0.2em] ${isDarkMode ? 'text-slate-700' : 'text-slate-400'}`}>Inversión</p>
          <p className={`text-xl font-black leading-none mt-1 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            {service.price}
          </p>
        </div>
        <button 
          onClick={onPurchase}
          className={`btn-luxury px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${isDarkMode ? 'bg-white/5 text-white hover:bg-blue-600' : 'bg-slate-900 text-white hover:bg-blue-600'}`}
        >
          Adquirir
        </button>
      </div>
    </div>
  );
};