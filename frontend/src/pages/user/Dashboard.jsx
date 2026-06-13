import React from 'react';
import { FiActivity, FiDroplet, FiSun, FiCheckSquare } from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Dashboard = () => {

  const chartData = {
    labels: ['16 Apr', '18 Apr', '20 Apr', '22 Apr', '24 Apr', '26 Apr'],
    datasets: [
      {
        fill: true,
        label: 'Weight (kg)',
        data: [60, 59.5, 59.2, 58.8, 58.0, 57.0],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { display: false, min: 55 },
      x: { grid: { display: false } }
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] p-6 lg:p-10 font-sans">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Welcome, John 👋</h1>
          <p className="text-gray-500 mt-1">Here is your daily health summary</p>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 shadow-sm bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
          JD
        </div>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Today's Plan */}
        <div className="card lg:col-span-2 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FiActivity className="text-emerald-500" /> Today's Plan
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-blue-50 text-blue-900 rounded-xl cursor-pointer hover:shadow-sm transition">
              <div className="w-10 h-10 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center"><FiDroplet /></div>
              <div className="flex-1">
                <p className="font-bold">Drink 8 glasses of water</p>
                <p className="text-sm opacity-70">4/8 completed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-emerald-50 text-emerald-900 rounded-xl cursor-pointer hover:shadow-sm transition">
              <div className="w-10 h-10 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center"><FiSun /></div>
              <div className="flex-1">
                <p className="font-bold">30 min Morning Walk</p>
                <p className="text-sm opacity-70">8:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-orange-50 text-orange-900 rounded-xl cursor-pointer hover:shadow-sm transition">
              <div className="w-10 h-10 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center">🍽️</div>
              <div className="flex-1">
                <p className="font-bold">Eat Healthy Breakfast</p>
                <p className="text-sm opacity-70">Oats with Fruits</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 text-emerald-600 font-bold hover:bg-emerald-50 py-2 rounded-lg transition">View Full Plan</button>
        </div>
        
        {/* Progress & Charts View */}
        <div className="space-y-6">
          <div className="card bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-500/20">
            <h2 className="text-xl font-bold mb-4">Daily Progress</h2>
            <div className="flex justify-center mb-6">
               <div className="relative w-32 h-32 flex justify-center items-center cursor-pointer hover:scale-105 transition-transform">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="56" fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="12" />
                    <circle cx="64" cy="64" r="56" fill="transparent" stroke="white" strokeWidth="12" strokeDasharray="351" strokeDashoffset="120" strokeLinecap="round" />
                  </svg>
                  <div className="absolute font-black text-3xl">67%</div>
               </div>
            </div>
            <div className="text-center font-medium opacity-90">
              Completed 6 of 9 tasks today
            </div>
          </div>

          <div className="card shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-4">
               <h2 className="text-lg font-bold text-gray-800">Weight Progress</h2>
               <span className="text-sm font-bold text-emerald-500">-3 kg</span>
             </div>
             <div className="h-40">
               <Line options={chartOptions} data={chartData} />
             </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
