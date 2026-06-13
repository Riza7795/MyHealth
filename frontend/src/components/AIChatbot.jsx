import React, { useState } from 'react';
import { FiMessageCircle, FiX, FiSend, FiCpu } from 'react-icons/fi';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm HealthMate AI. 👋\n\nYou can ask me about your diet plan, daily routine, or any general health queries.", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now()+1, 
        text: "I am a mock AI model. I've noted your input, and in a production app, I'd provide a verified response to your health query based on extensive medical data guidelines.", 
        sender: 'ai' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Bubble Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-full shadow-2xl hover:scale-110 hover:shadow-emerald-500/50 transition-all z-50 animate-bounce"
        >
          <FiMessageCircle className="text-2xl" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-50 border border-gray-100 animate-slideIn">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-400 flex justify-center items-center text-white shadow-sm border border-white/20">
                <FiCpu className="text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-wide">HealthMate AI</h3>
                <p className="text-emerald-400 text-xs font-mono">Online | Smart Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white p-2">
              <FiX className="text-xl" />
            </button>
          </div>

          <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-emerald-600 text-white rounded-br-sm' : 'bg-white text-gray-700 border border-gray-200 shadow-sm rounded-bl-sm'}`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..." 
              className="flex-1 bg-slate-100 border-none px-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none transition" 
            />
            <button 
              disabled={!input.trim()}
              className="p-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition disabled:opacity-50"
            >
              <FiSend />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
