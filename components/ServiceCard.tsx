import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  isDarkMode: boolean;
  onPurchase: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, isDarkMode, onPurchase }) => {
  const badgeStyles = {
    STANDARD: isDarkMode ? 'bg-white/5 text-slate-400' : 'bg-slate-200 text-slate-700 font-black',
    PREMIUM: 'bg-blue-600/10 text-blue-600 border border-blue-500/20 font-black',
    VIP: 'bg-amber-600/10 text-amber-600 border border-amber-500/20 font-black',
    FREEMIUM: 'bg-emerald-600/10 text-emerald-600 border border-emerald-400/20 font-black'
  };

  // Dinamic border color for categories
  const categoryBorder = service.category === 'streaming' 
    ? (isDarkMode ? 'hover:border-blue-500/40' : 'hover:border-blue-500 shadow-blue-100')
    : service.category === 'programas' 
      ? (isDarkMode ? 'hover:border-amber-500/40' : 'hover:border-amber-500 shadow-amber-100')
      : (isDarkMode ? 'hover:border-blue-400/40' : 'hover:border-blue-400 shadow-blue-100');

  // Label changes depending on category
  const getLabel = () => {
    if (service.category === 'streaming') return 'Se entrega perfil:';
    if (service.category === 'programas' || service.category === 'extras') return 'Concepto:';
    return 'Requisito:';
  };

  const requirementLabel = getLabel();

  return (
    <div className={`group rounded-[2.5rem] p-8 card-luxury flex flex-col h-full relative overflow-hidden transition-all duration-500 ${isDarkMode ? 'glass-obsidian' : 'bg-white border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]'} ${categoryBorder}`}>
      {/* Luxury Gradient Accent */}
      {service.badge === 'VIP' && (
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none transition-opacity ${isDarkMode ? 'bg-amber-500/5' : 'bg-amber-500/10'}`}></div>
      )}

      <div className="flex justify-between items-start mb-8">
        <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-3xl border transition-all duration-500 overflow-hidden ${isDarkMode ? 'bg-white/5 border-white/5 group-hover:scale-110 shadow-lg' : 'bg-slate-50 border-slate-100 group-hover:scale-110 shadow-sm'}`}>
          {service.logoUrl ? (
            <img src={service.logoUrl} alt={service.title} className="w-full h-full object-contain p-2.5 opacity-100 transition-opacity" />
          ) : (
            <span className="opacity-100">{service.icon}</span>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`text-[9px] px-3 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm ${badgeStyles[service.badge]}`}>
            {service.badge}
          </span>
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${isDarkMode ? 'border-white/5' : 'border-slate-200 bg-white shadow-sm'}`}>
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${service.status === 'OPERATIVO' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
            <span className={`text-[8px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>{service.status}</span>
          </div>
        </div>
      </div>

      <h3 className={`text-xl font-black mb-4 leading-tight tracking-tight transition-colors uppercase ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
        {service.title}
      </h3>

      <div className="flex-grow space-y-5 mb-10">
        <div className="flex flex-col gap-2">
          <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-slate-600' : 'text-blue-700'}`}>{requirementLabel}</span>
          <span className={`text-xs font-mono font-bold break-all py-2.5 px-4 rounded-xl border transition-colors ${isDarkMode ? 'border-white/5 bg-white/[0.02] text-blue-400' : 'border-blue-100 bg-blue-50/50 text-blue-900'}`}>
            {service.requirement}
          </span>
        </div>

        <div className={`p-5 rounded-2xl border transition-colors ${isDarkMode ? 'bg-white/[0.01] border-white/5 group-hover:bg-white/[0.03]' : 'bg-slate-50/80 border-slate-100 group-hover:bg-white shadow-sm'}`}>
          <p className={`text-[9px] font-black uppercase tracking-[0.2em] mb-2.5 ${isDarkMode ? 'text-slate-700' : 'text-slate-400'}`}>Información del Sistema</p>
          <p className={`text-[12px] leading-relaxed font-bold ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>
            {service.result}
          </p>
        </div>
      </div>

      <div className={`flex items-center justify-between mt-auto pt-6 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
        <div>
          <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-slate-700' : 'text-slate-400'}`}>Inversión</p>
          <p className={`text-2xl font-black leading-none mt-1.5 ${isDarkMode ? 'text-slate-100' : 'text-blue-600'}`}>
            {service.price}
          </p>
        </div>
        <button 
          onClick={onPurchase}
          className={`btn-luxury px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${isDarkMode ? 'bg-white/5 text-white hover:bg-blue-600 hover:border-blue-400' : 'bg-slate-900 text-white hover:bg-blue-600 shadow-xl'}`}
        >
          Adquirir
        </button>
      </div>
    </div>
  );
};