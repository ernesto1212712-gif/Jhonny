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
        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Preguntas Frecuentes</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isDarkMode 
                ? 'bg-white/[0.02] border-white/5 hover:border-blue-500/30' 
                : 'bg-white border-slate-200 shadow-sm hover:border-blue-200'
            }`}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 text-left flex justify-between items-center group"
            >
              <span className={`font-bold text-sm tracking-wide ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {faq.question}
              </span>
              <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
              } px-8 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}
            >
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};