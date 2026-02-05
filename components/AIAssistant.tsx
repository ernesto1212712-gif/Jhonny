import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getAIResponse } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
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
        <div className="glass-obsidian w-[360px] h-[520px] rounded-[2rem] flex flex-col shadow-2xl overflow-hidden border border-white/10 animate-fade-up">
          <div className="p-5 bg-white/[0.03] border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <span className="font-bold text-xs tracking-[0.2em] text-slate-200">INTELLIGENCE TERMINAL</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar bg-black/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                  : 'bg-white/[0.05] border border-white/5 text-slate-300'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/[0.03] p-4 rounded-2xl flex gap-1.5">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-white/[0.01] border-t border-white/5">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Introduzca consulta..."
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 text-white flex items-center justify-center"
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
          className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl hover:bg-blue-500 transition-all transform hover:scale-110 active:scale-95 group border border-blue-400/20"
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