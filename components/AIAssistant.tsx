
import React, { useState, useRef, useEffect } from 'react';
import { generateVFXAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello. I'm the MOTA Solution Engine. How can I assist with your VFX production or network query today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));
      const advice = await generateVFXAdvice(userMsg, history);
      setMessages(prev => [...prev, { role: 'model', content: advice || "I'm having trouble connecting to the network." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', content: "Error connecting to the Solution Engine. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[110] bg-brand-pink w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-brain'} text-2xl`}></i>
        <span className="absolute right-20 bg-brand-dark px-4 py-2 rounded border border-white/10 text-xs uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Talk to the Engine
        </span>
      </button>

      {/* Chat Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-[450px] bg-brand-dark/95 backdrop-blur-xl z-[120] border-l border-white/10 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-8 border-b border-white/10 flex justify-between items-center">
            <div>
              <h3 className="text-2xl text-brand-pink font-['Oswald']">VFX Consultant</h3>
              <p className="text-[10px] uppercase tracking-[2px] text-gray-500 font-bold">Powered by Gemini AI</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-lg text-[14px] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-pink text-white rounded-br-none' 
                    : 'bg-white/5 border border-white/10 text-text-body rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg rounded-bl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-white/10">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about global tax credits, studio networks..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-brand-pink transition-colors"
              />
              <button 
                onClick={handleSend}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-pink hover:scale-125 transition-transform"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[115]"></div>}
    </>
  );
};

export default AIAssistant;
