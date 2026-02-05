
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onPurchase: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onPurchase }) => {
  const badgeStyles = {
    STANDARD: 'bg-slate-100 text-slate-700',
    PREMIUM: 'bg-indigo-100 text-indigo-700',
    VIP: 'bg-amber-100 text-amber-700',
    FREEMIUM: 'bg-emerald-100 text-emerald-700'
  };

  const getCategoryLabel = () => {
    if (service.category === 'streaming') return 'Modo:';
    if (service.category === 'programas') return 'Entrega:';
    return 'Comando:';
  };

  const isCommand = service.requirement.startsWith('/');

  return (
    <div className="group bg-white rounded-[2.5rem] p-7 border border-slate-200 card-hover flex flex-col h-full shadow-sm relative overflow-hidden">
      {/* Decorative Gradient for VIP */}
      {service.badge === 'VIP' && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full blur-3xl -mr-12 -mt-12 opacity-50"></div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-3xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500 overflow-hidden p-3">
            {service.logoUrl ? (
              <img src={service.logoUrl} alt={service.title} className="w-full h-full object-contain" />
            ) : (
              service.icon
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest ${badgeStyles[service.badge]}`}>
            {service.badge}
          </span>
          <div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">{service.status}</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight tracking-tight uppercase">
        {service.title}
      </h3>

      <div className="flex-grow space-y-3 mb-8">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {getCategoryLabel()}
          </span>
          <span className={`text-sm font-bold leading-tight ${isCommand ? 'font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg w-fit' : 'text-slate-700'}`}>
            {service.requirement}
          </span>
        </div>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-indigo-50/30 group-hover:border-indigo-100 transition-colors">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Información del Sistema</p>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            {service.result}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-50">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inversión</p>
          <p className="text-2xl font-black text-slate-900 leading-none mt-1">
            {service.price}
          </p>
        </div>
        <button 
          onClick={onPurchase}
          className="bg-slate-900 hover:bg-indigo-600 text-white px-7 py-3.5 rounded-2xl font-black text-xs transition-all shadow-lg shadow-slate-200 hover:shadow-indigo-200 active:scale-95 uppercase tracking-widest"
        >
          Adquirir
        </button>
      </div>
    </div>
  );
};
