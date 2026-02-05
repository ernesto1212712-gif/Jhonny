import React from 'react';

interface Testimonial {
  name: string;
  text: string;
  role: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  isDarkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials, isDarkMode }) => {
  return (
    <section className="mb-32">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-black mb-4 tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Experiencia Elite</h2>
        <p className={`text-[11px] uppercase tracking-[0.4em] font-black ${isDarkMode ? 'text-slate-600' : 'text-blue-600'}`}>Lo que dicen nuestros clientes VIP</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className={`p-10 rounded-[3rem] border transition-all duration-500 hover:-translate-y-3 ${
              isDarkMode 
                ? 'bg-white/[0.02] border-white/5 hover:border-amber-500/20' 
                : 'bg-white border-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] hover:border-amber-100'
            }`}
          >
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className={`text-[15px] italic mb-10 leading-relaxed font-bold tracking-tight ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              "{t.text}"
            </p>
            
            <div className="flex items-center gap-5 mt-auto">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-inner ${isDarkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-600 text-white shadow-blue-400'}`}>
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className={`text-sm font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.name}</h4>
                <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};