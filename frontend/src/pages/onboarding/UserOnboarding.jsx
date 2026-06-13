import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiActivity, FiTarget, FiHeart, FiUser, FiCheckCircle } from 'react-icons/fi';

const UserOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '', gender: '', height: '', weight: '', occupation: '',
    bloodPressure: '', bloodSugar: '', cholesterol: '', pulse: '',
    primaryGoal: '', sleepHours: '', exerciseFreq: '', diet: '', smoking: ''
  });
  const [analysisResult, setAnalysisResult] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const simulateAnalysis = () => {
    setStep(5);
    setTimeout(() => {
      setAnalysisResult({
        healthScore: 82,
        diabetesRisk: 'Low',
        heartRisk: 'Low',
        hypertensionRisk: 'Medium',
        bmi: 22.8
      });
    }, 3000);
  };

  const renderStep1 = () => (
    <div className="space-y-4 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><FiUser className="text-emerald-500" /> Basic Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600 mb-1 block">Age</label>
          <input type="number" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} className="input-field" placeholder="25" />
        </div>
        <div>
          <label className="text-sm text-gray-600 mb-1 block">Gender</label>
          <select value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className="input-field">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600 mb-1 block">Height (cm)</label>
          <input type="number" value={formData.height} onChange={e => setFormData({...formData, height: e.target.value})} className="input-field" placeholder="165" />
        </div>
        <div>
          <label className="text-sm text-gray-600 mb-1 block">Weight (kg)</label>
          <input type="number" value={formData.weight} onChange={e => setFormData({...formData, weight: e.target.value})} className="input-field" placeholder="60" />
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-600 mb-1 block">Occupation</label>
        <select value={formData.occupation} onChange={e => setFormData({...formData, occupation: e.target.value})} className="input-field">
          <option value="">Select</option>
          <option value="Student">Student</option>
          <option value="Worker">Worker</option>
          <option value="Elder">Elderly</option>
        </select>
      </div>
      <button onClick={handleNext} className="w-full btn-primary mt-6 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30">Next</button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><FiHeart className="text-red-500" /> Health Information</h3>
      <div>
        <label className="text-sm text-gray-600 mb-1 block">Blood Pressure (mmHg)</label>
        <input type="text" value={formData.bloodPressure} onChange={e => setFormData({...formData, bloodPressure: e.target.value})} className="input-field" placeholder="120/80" />
      </div>
      <div>
        <label className="text-sm text-gray-600 mb-1 block">Blood Sugar (mg/dL)</label>
        <input type="number" value={formData.bloodSugar} onChange={e => setFormData({...formData, bloodSugar: e.target.value})} className="input-field" placeholder="110" />
      </div>
      <div>
        <label className="text-sm text-gray-600 mb-1 block">Cholesterol (mg/dL)</label>
        <input type="number" value={formData.cholesterol} onChange={e => setFormData({...formData, cholesterol: e.target.value})} className="input-field" placeholder="180" />
      </div>
      <div>
        <label className="text-sm text-gray-600 mb-1 block">Pulse Rate (bpm)</label>
        <input type="number" value={formData.pulse} onChange={e => setFormData({...formData, pulse: e.target.value})} className="input-field" placeholder="72" />
      </div>
      <div className="flex gap-4 mt-6">
        <button onClick={handlePrev} className="flex-1 btn-secondary">Back</button>
        <button onClick={handleNext} className="flex-1 btn-primary bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30">Next</button>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const goals = [
      { id: 'general', label: 'General Health', icon: '❤️' },
      { id: 'fitness', label: 'Body Fitness', icon: '🏋️' },
      { id: 'weightloss', label: 'Weight Loss', icon: '📉' },
      { id: 'skin', label: 'Skin Care', icon: '✨' },
    ];
    return (
      <div className="space-y-4 animate-fadeIn">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2"><FiTarget className="text-indigo-500" /> Select Goal</h3>
        <p className="text-gray-500 mb-4 text-sm">What is your main goal?</p>
        <div className="grid grid-cols-1 gap-3">
          {goals.map(g => (
            <div 
              key={g.id} 
              onClick={() => setFormData({...formData, primaryGoal: g.label})}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-4 ${formData.primaryGoal === g.label ? 'border-emerald-500 bg-emerald-50 shadow-md' : 'border-gray-100 hover:border-emerald-200 bg-white'}`}
            >
              <span className="text-2xl">{g.icon}</span>
              <span className="font-semibold text-gray-700">{g.label}</span>
              {formData.primaryGoal === g.label && <FiCheckCircle className="ml-auto text-emerald-500 text-xl" />}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <button onClick={handlePrev} className="flex-1 btn-secondary">Back</button>
          <button onClick={handleNext} disabled={!formData.primaryGoal} className="flex-1 btn-primary bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30 disabled:opacity-50">Next</button>
        </div>
      </div>
    );
  };

  const renderStep4 = () => (
    <div className="space-y-4 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">AI Lifestyle Questionnaire</h3>
      <p className="text-sm text-gray-500 mb-6">Smart questions to understand your habits.</p>
      
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">How many hours do you sleep?</label>
        <select value={formData.sleepHours} onChange={e => setFormData({...formData, sleepHours: e.target.value})} className="input-field bg-white">
          <option value="">Select</option>
          <option value="<6">Less than 6 hours</option>
          <option value="6-8">6 - 8 hours</option>
          <option value=">8">More than 8 hours</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">How often do you exercise?</label>
        <select value={formData.exerciseFreq} onChange={e => setFormData({...formData, exerciseFreq: e.target.value})} className="input-field bg-white">
          <option value="">Select</option>
          <option value="none">Never</option>
          <option value="1-2">1-2 times a week</option>
          <option value="3-4">3-4 times a week</option>
          <option value="daily">Daily</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">Dietary Preference</label>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {['Veg', 'Non-Veg', 'Both'].map(d => (
            <button key={d} onClick={() => setFormData({...formData, diet: d})} className={`flex-1 py-2 text-sm rounded-md transition-all ${formData.diet === d ? 'bg-emerald-500 text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}>{d}</button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">Do you smoke or drink?</label>
        <select value={formData.smoking} onChange={e => setFormData({...formData, smoking: e.target.value})} className="input-field bg-white">
          <option value="">Select</option>
          <option value="None">None</option>
          <option value="Smoke">Smoke</option>
          <option value="Drink">Drink</option>
          <option value="Both">Both</option>
        </select>
      </div>

      <div className="flex gap-4 mt-8">
        <button onClick={handlePrev} className="flex-1 btn-secondary">Back</button>
        <button onClick={simulateAnalysis} className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-700 transition font-bold flex items-center justify-center gap-2">
          <FiActivity /> Analyze with AI
        </button>
      </div>
    </div>
  );

  const renderStep5 = () => {
    if (!analysisResult) {
      return (
        <div className="py-12 text-center animate-fadeIn flex flex-col items-center">
          <div className="w-24 h-24 border-4 border-emerald-100 border-t-emerald-500 rounded-full animate-spin mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Analyzing...</h2>
          <p className="text-gray-500 mb-6">Our AI is processing your input</p>
          <div className="w-full max-w-xs space-y-3 text-left bg-gray-50 p-4 rounded-xl">
             <p className="text-sm text-gray-600 flex items-center gap-2"><FiCheckCircle className="text-emerald-500"/> Checking health risks</p>
             <p className="text-sm text-gray-600 flex items-center gap-2"><FiCheckCircle className="text-emerald-500"/> Analyzing lifestyle</p>
             <p className="text-sm text-gray-600 flex items-center gap-2"><FiCheckCircle className="text-emerald-500"/> Preparing recommendations</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6 animate-slideIn">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">Your Health Summary</h3>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl p-6 border border-emerald-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <FiActivity className="text-8xl text-emerald-600" />
          </div>
          <p className="text-sm font-semibold text-emerald-800 mb-1 flex items-center gap-2">
            <FiTarget /> Health Score
          </p>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-black text-emerald-600">{analysisResult.healthScore}</span>
            <span className="text-xl text-emerald-800/60 font-bold pb-1">/100</span>
            <span className="ml-auto bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">Good</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-700 mb-3">Risk Prediction</h4>
          <div className="space-y-3">
             <div className="flex justify-between items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <span className="flex items-center gap-2 text-gray-700"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Diabetes Risk</span>
                <span className={`text-sm font-bold px-2 py-1 rounded bg-emerald-100 text-emerald-700`}>{analysisResult.diabetesRisk}</span>
             </div>
             <div className="flex justify-between items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <span className="flex items-center gap-2 text-gray-700"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Heart Disease Risk</span>
                <span className={`text-sm font-bold px-2 py-1 rounded bg-emerald-100 text-emerald-700`}>{analysisResult.heartRisk}</span>
             </div>
             <div className="flex justify-between items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <span className="flex items-center gap-2 text-gray-700"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Hypertension Risk</span>
                <span className={`text-sm font-bold px-2 py-1 rounded bg-yellow-100 text-yellow-700`}>{analysisResult.hypertensionRisk}</span>
             </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
           <span className="font-bold text-gray-700">BMI</span>
           <span className="font-bold text-gray-900">{analysisResult.bmi} <span className="text-gray-400 text-xs font-normal">(Normal)</span></span>
        </div>

        <button onClick={() => navigate('/user/dashboard')} className="w-full btn-primary py-3.5 bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-600/20 text-lg rounded-xl">
           View Full Plan
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] py-12 flex justify-center px-4">
      <div className="w-full max-w-md">
        
        {/* Progress Bar */}
        <div className="mb-8 px-2 tracking-wide font-medium flex items-center justify-between">
           <button onClick={() => step > 1 && step < 5 ? handlePrev() : navigate(-1)} className="text-gray-400 hover:text-gray-600">&lt; Back</button>
           <span className="text-sm text-gray-500 font-semibold">{step < 5 ? `Step ${step} of 4` : 'Step 5 of 5'}</span>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 relative overflow-hidden">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()}
        </div>
      </div>
    </div>
  );
};

export default UserOnboarding;
