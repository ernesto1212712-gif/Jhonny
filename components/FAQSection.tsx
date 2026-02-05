import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  isDarkMode: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs, isDarkMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-32 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-black mb-4 tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Preguntas Frecuentes</h2>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-lg"></div>
      </div>
      
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
              isDarkMode 
                ? 'bg-white/[0.02] border-white/5 hover:border-blue-500/30' 
                : 'bg-white border-slate-200 shadow-xl shadow-slate-200/20 hover:border-blue-400'
            }`}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full px-10 py-7 text-left flex justify-between items-center group"
            >
              <span className={`font-black text-sm tracking-tight ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                {faq.question}
              </span>
              <span className={`transition-transform duration-300 p-2 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-blue-50 text-blue-600'} ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 py-8' : 'max-h-0 opacity-0 py-0'
              } px-10 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-100 bg-slate-50/30'}`}
            >
              <p className={`text-[15px] leading-relaxed font-bold ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};