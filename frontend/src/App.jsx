import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import AIChatbot from './components/AIChatbot';

// Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import UserOnboarding from './pages/onboarding/UserOnboarding';
import WorkerOnboarding from './pages/onboarding/WorkerOnboarding';
import Dashboard from './pages/user/Dashboard';
import FindWorker from './pages/consultation/FindWorker';
import WorkerDashboard from './pages/worker/WorkerDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <AIChatbot />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Onboarding */}
        <Route path="/onboarding/user" element={<UserOnboarding />} />
        <Route path="/onboarding/worker" element={<WorkerOnboarding />} />

        {/* Protected Routes */}
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/find-specialist" element={<FindWorker />} />
        <Route path="/worker/dashboard" element={<WorkerDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                HealthMate AI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Smart Health & Lifestyle Assistant
              </p>
              <div className="space-x-4">
                <a
                  href="/login"
                  className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="inline-block px-8 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
