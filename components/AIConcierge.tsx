
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, MessageSquare, Bot } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to L'Essence. I am your digital sommelier. May I recommend a pairing or answer questions about our curated ingredients?" }
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
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-amber-600/30"></div>
          <Sparkles className="text-black group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-amber-900/50 to-neutral-900 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                <Bot size={18} className="text-black" />
              </div>
              <div>
                <p className="text-sm font-bold tracking-wider serif">Digital Concierge</p>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] text-white/50 uppercase tracking-tighter">Online Sommelier</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-amber-600 text-black font-medium' 
                  : 'bg-white/10 text-white/90 backdrop-blur-md border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-2 rounded-2xl flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-black/40 border-t border-white/10">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about wine pairings..." 
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-amber-500 transition-all pr-12"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 text-amber-500 hover:text-amber-400 disabled:text-neutral-600 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center mt-2 text-white/20 uppercase tracking-[0.2em]">Powered by Gemini AI</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConcierge;
