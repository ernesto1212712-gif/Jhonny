import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getAIResponse } from '../services/geminiService';

interface AIAssistantProps {
  isDarkMode: boolean;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bienvenido a la terminal de JhonnyDoxeoVip. ¿Qué protocolo desea ejecutar hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className={`w-[360px] h-[520px] rounded-[2rem] flex flex-col shadow-2xl overflow-hidden border animate-fade-up transition-all duration-300 ${isDarkMode ? 'glass-obsidian border-white/10' : 'bg-white border-slate-200'}`}>
          <div className={`p-5 border-b flex justify-between items-center ${isDarkMode ? 'bg-white/[0.03] border-white/5' : 'bg-slate-50 border-slate-100'}`}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <span className={`font-bold text-xs tracking-[0.2em] ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>INTELLIGENCE TERMINAL</span>
            </div>
            <button onClick={() => setIsOpen(false)} className={`transition-colors ${isDarkMode ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className={`flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar transition-colors ${isDarkMode ? 'bg-black/20' : 'bg-slate-50/50'}`}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white shadow-blue-900/20' 
                  : isDarkMode 
                    ? 'bg-white/[0.05] border border-white/5 text-slate-300' 
                    : 'bg-white border border-slate-100 text-slate-700 shadow-slate-200/50'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`p-4 rounded-2xl flex gap-1.5 ${isDarkMode ? 'bg-white/[0.03]' : 'bg-white border border-slate-100'}`}>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className={`p-5 border-t transition-colors ${isDarkMode ? 'bg-white/[0.01] border-white/5' : 'bg-white border-slate-100'}`}>
            <div className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Introduzca consulta..."
                className={`flex-1 border rounded-xl px-4 py-3 text-xs transition-all outline-none ${isDarkMode ? 'bg-white/[0.03] border-white/10 text-slate-200 focus:border-blue-500 placeholder:text-slate-700' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-400 placeholder:text-slate-400'}`}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 text-white flex items-center justify-center shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group border ${isDarkMode ? 'bg-blue-600 border-blue-400/20' : 'bg-slate-900 border-slate-700 text-white'}`}
        >
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0a0a0b] rounded-full shadow-lg"></div>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}
    </div>
  );
};