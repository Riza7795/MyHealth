import React from 'react';
import { FiUsers, FiCalendar, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';

const WorkerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f6] p-6 lg:p-10 font-sans">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Dr. Dashboard 👋</h1>
          <p className="text-gray-500 mt-1">Manage your patients and appointments</p>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 shadow-md">
          <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Patients', value: '142', icon: <FiUsers className="text-blue-500" />, bg: 'bg-blue-50' },
          { label: 'Today\'s Appointments', value: '6', icon: <FiCalendar className="text-orange-500" />, bg: 'bg-orange-50' },
          { label: 'Unread Messages', value: '12', icon: <FiMessageSquare className="text-purple-500" />, bg: 'bg-purple-50' },
          { label: 'Reviews Rating', value: '4.8', icon: <FiTrendingUp className="text-emerald-500" />, bg: 'bg-emerald-50' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4 ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Appointments List */}
        <div className="card lg:col-span-2 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Appointments</h2>
            <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map(item => (
              <div key={item} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 rounded-xl gap-4 hover:shadow-md transition bg-white border border-gray-100">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex justify-center items-center font-bold">SM</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sarah Mitchell</h4>
                    <p className="text-xs text-gray-500">Dietary Plan Update • ID: #{2934 + item}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                   <div className="text-right mr-2 hidden lg:block">
                     <p className="text-sm font-bold text-gray-800">2:30 PM</p>
                     <p className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Video Call</p>
                   </div>
                   <button className="p-2.5 bg-emerald-600 text-white rounded-lg shadow-md shadow-emerald-500/20 hover:bg-emerald-700 w-full sm:w-auto">Start</button>
                   <button className="p-2.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-100 w-full sm:w-auto">Reschedule</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Monitoring snippet */}
        <div className="card shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Patient Alerts</h2>
          <div className="space-y-3">
             <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
               <div className="flex justify-between items-center">
                 <span className="font-bold text-red-700 text-sm">High Blood Pressure</span>
                 <span className="text-xs text-red-500 font-medium">10 mins ago</span>
               </div>
               <p className="text-gray-600 text-sm mt-1">John Doe recorded 140/90. Action needed.</p>
               <button className="mt-2 text-xs font-bold text-red-700 underline">Send Message</button>
             </div>
             <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-xl">
               <div className="flex justify-between items-center">
                 <span className="font-bold text-yellow-700 text-sm">Missed Tasks</span>
                 <span className="text-xs text-yellow-500 font-medium">2 hours ago</span>
               </div>
               <p className="text-gray-600 text-sm mt-1">Alice skipped 3 daily workouts this week.</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkerDashboard;
