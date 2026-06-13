import React, { useState } from 'react';
import { FiUsers, FiActivity, FiShield, FiCheckCircle, FiXCircle, FiMoreVertical } from 'react-icons/fi';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('system');

  const stats = [
    { label: 'Total Users', value: '12,493', diff: '+124 today' },
    { label: 'Active Workers', value: '430', diff: '+5 this week' },
    { label: 'Consultations', value: '8,204', diff: '+92 today' },
    { label: 'System Health', value: '99.9%', diff: 'Optimal' },
  ];

  const pendingWorkers = [
    { id: 1, name: 'Dr. Emily Carter', type: 'Dietitian', exp: '8 years', status: 'Pending Verification' },
    { id: 2, name: 'John Doe', type: 'Fitness Trainer', exp: '3 years', status: 'Pending Verification' },
  ];

  return (
    <div className="min-h-screen flex bg-[#f4f7f6] font-sans">
      {/* Sidebar Admin Menu */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen sticky top-0 hidden md:flex">
        <div className="p-6">
          <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
             <FiShield className="text-emerald-400" /> Admin
          </h2>
          <p className="text-slate-400 text-sm mt-1">HealthMate Control Panel</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <button onClick={() => setActiveTab('system')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'system' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-300 hover:bg-slate-800'}`}>
            <FiActivity /> System Monitor
          </button>
          <button onClick={() => setActiveTab('workers')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'workers' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-300 hover:bg-slate-800'}`}>
            <FiBriefcaseIcon /> Worker Mgmt
          </button>
          <button onClick={() => setActiveTab('users')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'users' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-300 hover:bg-slate-800'}`}>
            <FiUsers /> User Mgmt
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 capitalize">{activeTab} Controls</h1>
            <p className="text-gray-500 mt-1">Manage HealthMate platform settings</p>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-200 flex items-center justify-center font-bold font-mono">
            SU
          </div>
        </header>

        {activeTab === 'system' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-sm font-medium text-gray-500 mb-1">{s.label}</p>
                  <h3 className="text-3xl font-black text-gray-800">{s.value}</h3>
                  <p className="text-xs font-semibold text-emerald-600 mt-2 bg-emerald-50 w-max px-2 py-0.5 rounded">{s.diff}</p>
                </div>
              ))}
            </div>

            <div className="card shadow-sm border border-gray-100 min-h-[300px] flex items-center justify-center bg-white">
              <div className="text-center text-gray-400">
                <FiActivity className="text-6xl mx-auto mb-4 opacity-50" />
                <p>Advanced Analytics Chart Placeholder</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'workers' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-800">Pending Approvals</h2>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">Name</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">Specialization</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">Experience</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pendingWorkers.map(w => (
                    <tr key={w.id} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-bold text-gray-800">{w.name}</td>
                      <td className="px-6 py-4 text-gray-600">{w.type}</td>
                      <td className="px-6 py-4 text-gray-600">{w.exp}</td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">{w.status}</span>
                      </td>
                      <td className="px-6 py-4 flex justify-end gap-2">
                        <button className="p-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg">
                          <FiCheckCircle className="text-lg" />
                        </button>
                        <button className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg">
                          <FiXCircle className="text-lg" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="card shadow-sm border border-gray-100 min-h-[300px] flex flex-col items-center justify-center text-center animate-fadeIn">
            <FiUsers className="text-6xl text-gray-300 mb-4" />
            <h2 className="text-xl font-bold text-gray-700">User Management Portal</h2>
            <p className="text-gray-500 mt-2 max-w-md">The full database grid for managing thousands of users will be rendered here. You can block/unblock, reset passwords, or view activity logs.</p>
          </div>
        )}

      </main>
    </div>
  );
};

// Extracted internal icon for missing import
const FiBriefcaseIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

export default AdminDashboard;
