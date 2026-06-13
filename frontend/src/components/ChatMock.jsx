import React, { useState } from 'react';
import { FiSend, FiX, FiPaperclip } from 'react-icons/fi';

const ChatMock = ({ workerName, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: `Hello! I'm ${workerName}. How can I help you today?`, sender: 'worker', time: '10:00 AM' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    setInput('');
    
    // Mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now()+1, text: "I've received your message. I'm reviewing your health profile now.", sender: 'worker', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 z-50 animate-slideIn">
      <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src="https://i.pravatar.cc/150?img=11" alt="avatar" className="w-10 h-10 rounded-full border-2 border-emerald-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full"></div>
          </div>
          <div>
            <h4 className="font-bold">{workerName}</h4>
            <p className="text-xs text-emerald-100">Online</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-emerald-700 rounded-full transition">
          <FiX className="text-xl" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl ${m.sender === 'user' ? 'bg-emerald-600 text-white rounded-tr-sm' : 'bg-white text-gray-800 rounded-tl-sm border border-gray-100 shadow-sm'}`}>
              <p className="text-sm">{m.text}</p>
              <p className={`text-[10px] mt-1 text-right ${m.sender === 'user' ? 'text-emerald-200' : 'text-gray-400'}`}>{m.time}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
        <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition">
          <FiPaperclip className="text-lg" />
        </button>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..." 
          className="flex-1 bg-gray-100 placeholder-gray-500 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50" 
        />
        <button type="submit" disabled={!input.trim()} className="p-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition disabled:opacity-50 disabled:hover:bg-emerald-600">
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default ChatMock;
