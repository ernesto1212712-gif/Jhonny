import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onPurchase: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onPurchase }) => {
  const badgeStyles = {
    STANDARD: 'bg-white/5 text-slate-400',
    PREMIUM: 'bg-blue-600/10 text-blue-400 border border-blue-400/20',
    VIP: 'bg-amber-600/10 text-amber-400 border border-amber-400/20',
    FREEMIUM: 'bg-emerald-600/10 text-emerald-400 border border-emerald-400/20'
  };

  const isCommand = service.requirement.startsWith('/') || service.requirement.includes('|');

  return (
    <div className="group glass-obsidian rounded-3xl p-8 card-luxury flex flex-col h-full relative overflow-hidden">
      {/* Luxury Gradient Accent */}
      {service.badge === 'VIP' && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none"></div>
      )}

      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl border border-white/5 group-hover:border-blue-500/30 group-hover:scale-105 transition-all duration-500 overflow-hidden">
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
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-white/5">
            <div className={`w-1 h-1 rounded-full animate-pulse ${service.status === 'OPERATIVO' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
            <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">{service.status}</span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-100 mb-3 leading-tight tracking-wide group-hover:text-blue-400 transition-colors uppercase">
        {service.title}
      </h3>

      <div className="flex-grow space-y-4 mb-10">
        <div className="flex flex-col gap-1.5">
          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">Entrega:</span>
          <span className={`text-xs font-mono break-all py-1.5 px-3 rounded-lg border border-white/5 bg-white/[0.02] ${isCommand ? 'text-blue-400' : 'text-slate-400'}`}>
            {service.requirement}
          </span>
        </div>

        <div className="p-4 bg-white/[0.01] rounded-2xl border border-white/5 group-hover:bg-white/[0.03] transition-colors">
          <p className="text-[8px] font-bold text-slate-700 uppercase tracking-[0.2em] mb-2">Información del Sistema</p>
          <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
            {service.result}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
        <div>
          <p className="text-[8px] font-bold text-slate-700 uppercase tracking-[0.2em]">Inversión</p>
          <p className="text-xl font-black text-slate-100 leading-none mt-1">
            {service.price}
          </p>
        </div>
        <button 
          onClick={onPurchase}
          className="btn-luxury bg-white/5 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all"
        >
          Adquirir
        </button>
      </div>
    </div>
  );
};