import React, { useState } from 'react';
import { FiSearch, FiStar, FiFilter, FiMessageSquare, FiVideo } from 'react-icons/fi';
import ChatMock from '../../components/ChatMock';

const workers = [
  { id: 1, name: 'Dr. Ananya Sharma', type: 'Dietitian', exp: '7 years', fees: '₹500', rating: 4.8, reviews: 120, image: 'https://i.pravatar.cc/150?img=47' },
  { id: 2, name: 'Dr. Rahul Verma', type: 'General Physician', exp: '12 years', fees: '₹400', rating: 4.9, reviews: 340, image: 'https://i.pravatar.cc/150?img=11' },
  { id: 3, name: 'Priya Patel', type: 'Fitness Trainer', exp: '5 years', fees: '₹300', rating: 4.6, reviews: 85, image: 'https://i.pravatar.cc/150?img=5' },
  { id: 4, name: 'Dr. Sarah Lee', type: 'Dermatologist', exp: '9 years', fees: '₹800', rating: 5.0, reviews: 521, image: 'https://i.pravatar.cc/150?img=44' }
];

const FindWorker = () => {
  const [filter, setFilter] = useState('All');
  const [activeChat, setActiveChat] = useState(null);

  const filteredWorkers = workers.filter(w => filter === 'All' || w.type.includes(filter));

  return (
    <div className="min-h-screen bg-[#f4f7f6] p-6 lg:p-10 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Find Specialists</h1>
        <p className="text-gray-500 mt-1">Book your online consultation</p>
      </header>

      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
          <input type="text" placeholder="Search doctors, dietitians..." className="w-full pl-12 pr-4 py-3 bg-white border-0 shadow-sm rounded-xl focus:ring-2 focus:ring-emerald-500" />
        </div>
        <button className="bg-white p-3 rounded-xl shadow-sm hover:bg-gray-50 transition border border-gray-100">
          <FiFilter className="text-gray-600 text-lg" />
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {['All', 'Dietitian', 'General Physician', 'Fitness Trainer'].map(cat => (
          <button 
            key={cat} onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full whitespace-nowrap font-medium text-sm transition ${filter === cat ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30' : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredWorkers.map(w => (
          <div key={w.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 justify-between transition hover:shadow-md animate-slideIn">
            <div className="flex items-start gap-4">
              <img src={w.image} alt={w.name} className="w-20 h-20 rounded-xl object-cover shadow-sm bg-gray-100" />
              <div>
                <h3 className="font-bold text-lg text-gray-900">{w.name}</h3>
                <p className="text-emerald-600 text-sm font-medium">{w.type}</p>
                <p className="text-gray-500 text-xs mt-1">{w.exp} experience</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2">
                  <div className="flex items-center gap-1 text-sm text-gray-700 bg-yellow-50 px-2 py-0.5 rounded-md w-max">
                    <FiStar className="text-yellow-400 fill-current" />
                    <span className="font-bold">{w.rating}</span>
                    <span className="text-gray-400 text-xs">({w.reviews})</span>
                  </div>
                  <span className="font-bold text-gray-800 bg-gray-50 px-2 py-0.5 rounded-md w-max">Fees: {w.fees}</span>
                </div>
              </div>
            </div>
            
            <div className="flex md:flex-col gap-2 items-end justify-center md:justify-end mt-4 md:mt-0 w-full md:w-auto">
              <button className="flex-1 md:flex-none w-full btn-primary bg-emerald-600 shadow-md shadow-emerald-500/20 py-2.5 px-6 rounded-xl flex items-center justify-center gap-2">
                Book Now
              </button>
              <div className="flex gap-2 w-full md:w-auto">
                <button onClick={() => setActiveChat(w.name)} className="flex-1 md:flex-none p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 flex justify-center items-center">
                  <FiMessageSquare />
                </button>
                <button className="flex-1 md:flex-none p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 hover:bg-purple-100 flex justify-center items-center">
                  <FiVideo />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeChat && (
        <ChatMock workerName={activeChat} onClose={() => setActiveChat(null)} />
      )}
    </div>
  );
};

export default FindWorker;
