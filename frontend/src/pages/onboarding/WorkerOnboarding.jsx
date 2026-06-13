import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBriefcase, FiAward, FiClock } from 'react-icons/fi';

const WorkerOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    specialization: '', qualification: '', experience: '',
    licenseNumber: '', bio: ''
  });
  const navigate = useNavigate();

  const handleFinish = (e) => {
    e.preventDefault();
    // Simulate API save
    alert("Verification submitted successfully! Once approved, you can login.");
    navigate('/worker/dashboard'); // Navigating right to dashboard for demo purposes
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] py-12 flex justify-center px-4">
      <div className="w-full max-w-md">
        
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 relative overflow-hidden animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><FiBriefcase className="text-emerald-500" /> Professional Details</h3>
          <p className="text-sm text-gray-500 mb-6">Complete your profile to start accepting consultations.</p>
          
          <form onSubmit={handleFinish} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 font-medium mb-1 block">Specialization</label>
              <select required value={formData.specialization} onChange={(e) => setFormData({...formData, specialization: e.target.value})} className="input-field">
                <option value="">Select Specialization</option>
                <option value="Dietitian">Dietitian</option>
                <option value="General Physician">General Physician</option>
                <option value="Fitness Trainer">Fitness Trainer</option>
                <option value="Dermatologist">Dermatologist</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm mb-1 font-medium text-gray-600 flex items-center gap-2"><FiAward /> Qualification</label>
              <input required type="text" value={formData.qualification} onChange={(e) => setFormData({...formData, qualification: e.target.value})} className="input-field" placeholder="e.g., MBBS, MD" />
            </div>

            <div>
              <label className="text-sm mb-1 font-medium text-gray-600 flex items-center gap-2"><FiClock /> Experience (Years)</label>
              <input required type="number" min="0" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="input-field" placeholder="e.g., 5" />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">Medical License Number (if applicable)</label>
              <input type="text" value={formData.licenseNumber} onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})} className="input-field" placeholder="xxxx-xxxx-xxxx" />
            </div>

            <button type="submit" className="w-full btn-primary bg-emerald-600 hover:bg-emerald-700 mt-6 py-3 shadow-lg shadow-emerald-500/20 rounded-xl">
              Submit for Verification
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default WorkerOnboarding;
