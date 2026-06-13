/**
 * Database Schema Documentation
 * Define all tables and relationships
 */

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  avatar_url VARCHAR(500),
  date_of_birth DATE,
  gender VARCHAR(20),
  occupation VARCHAR(100),
  role VARCHAR(20) DEFAULT 'user', -- user, worker, admin
  is_active BOOLEAN DEFAULT true,
  is_verified BOOLEAN DEFAULT false,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Health Data Table
CREATE TABLE IF NOT EXISTS user_health_data (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  age INTEGER,
  height DECIMAL(5, 2), -- in cm
  weight DECIMAL(5, 2), -- in kg
  blood_pressure VARCHAR(20), -- e.g., "120/80"
  blood_sugar DECIMAL(5, 2), -- in mg/dL
  cholesterol DECIMAL(5, 2), -- in mg/dL
  triglycerides DECIMAL(5, 2),
  bmi DECIMAL(5, 2),
  heart_rate INTEGER, -- beats per minute
  oxygen_saturation DECIMAL(5, 2),
  health_conditions TEXT, -- JSON array of conditions
  medications TEXT, -- JSON array of medications
  allergies TEXT, -- JSON array
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Health Analysis Results Table
CREATE TABLE IF NOT EXISTS health_analysis (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  health_score DECIMAL(5, 2),
  analysis_summary TEXT,
  risk_predictions JSONB, -- JSON object with risk scores for different conditions
  recommendations TEXT,
  generated_by VARCHAR(50), -- 'ai', 'doctor', etc.
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Workers (Doctors, Dietitians, Trainers) Table
CREATE TABLE IF NOT EXISTS workers (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  specialization VARCHAR(100), -- 'doctor', 'dietitian', 'trainer'
  qualification TEXT,
  experience_years INTEGER,
  bio TEXT,
  license_number VARCHAR(100),
  is_verified BOOLEAN DEFAULT false,
  verification_date TIMESTAMP,
  rating DECIMAL(3, 2) DEFAULT 0,
  total_ratings INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Consultations Table
CREATE TABLE IF NOT EXISTS consultations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  worker_id INTEGER NOT NULL REFERENCES workers(id) ON DELETE CASCADE,
  consultation_type VARCHAR(50), -- 'chat', 'call', 'video'
  status VARCHAR(20) DEFAULT 'pending', -- pending, active, completed, cancelled
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Consultation Messages Table
CREATE TABLE IF NOT EXISTS consultation_messages (
  id SERIAL PRIMARY KEY,
  consultation_id INTEGER NOT NULL REFERENCES consultations(id) ON DELETE CASCADE,
  sender_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  attachments JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Personalized Plans Table
CREATE TABLE IF NOT EXISTS plans (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan_type VARCHAR(50), -- 'fitness', 'diet', 'mental_health', 'general'
  title VARCHAR(255),
  description TEXT,
  duration_days INTEGER,
  goals TEXT, -- JSON array
  daily_routine JSONB,
  diet_plan JSONB,
  exercise_plan JSONB,
  status VARCHAR(20) DEFAULT 'active',
  created_by INTEGER, -- worker_id (null if AI generated)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Daily Tasks Table
CREATE TABLE IF NOT EXISTS daily_tasks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan_id INTEGER REFERENCES plans(id) ON DELETE SET NULL,
  task_title VARCHAR(255) NOT NULL,
  task_description TEXT,
  task_type VARCHAR(50), -- 'exercise', 'meal', 'medication', 'measurement', 'meditation'
  scheduled_time TIME,
  is_completed BOOLEAN DEFAULT false,
  completion_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Food Scanning History Table
CREATE TABLE IF NOT EXISTS food_scans (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  food_name VARCHAR(255),
  image_url VARCHAR(500),
  calories DECIMAL(7, 2),
  protein DECIMAL(6, 2),
  carbs DECIMAL(6, 2),
  fats DECIMAL(6, 2),
  nutrients JSONB,
  scan_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ratings & Reviews Table
CREATE TABLE IF NOT EXISTS ratings_reviews (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  worker_id INTEGER NOT NULL REFERENCES workers(id) ON DELETE CASCADE,
  rating DECIMAL(3, 2) NOT NULL,
  review_text TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Wearable Data Table
CREATE TABLE IF NOT EXISTS wearable_data (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  device_type VARCHAR(50), -- 'fitbit', 'apple_watch', 'google_fit'
  steps INTEGER,
  heart_rate INTEGER,
  sleep_duration DECIMAL(5, 2),
  calories_burned DECIMAL(7, 2),
  distance_km DECIMAL(7, 2),
  data_date DATE,
  raw_data JSONB,
  synced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mental Health Tracking Table
CREATE TABLE IF NOT EXISTS mental_health_records (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  mood_level INTEGER, -- 1-10 scale
  mood_emoji VARCHAR(20),
  stress_level INTEGER, -- 1-10 scale
  sleep_quality INTEGER, -- 1-10 scale
  sleep_hours DECIMAL(4, 2),
  meditation_minutes INTEGER,
  notes TEXT,
  record_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appointments Table
CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  worker_id INTEGER NOT NULL REFERENCES workers(id) ON DELETE CASCADE,
  appointment_date TIMESTAMP NOT NULL,
  appointment_type VARCHAR(50),
  status VARCHAR(20) DEFAULT 'scheduled', -- scheduled, completed, cancelled
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better query performance
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_user_health_data_user_id ON user_health_data(user_id);
CREATE INDEX idx_health_analysis_user_id ON health_analysis(user_id);
CREATE INDEX idx_workers_user_id ON workers(user_id);
CREATE INDEX idx_consultations_user_id ON consultations(user_id);
CREATE INDEX idx_consultations_worker_id ON consultations(worker_id);
CREATE INDEX idx_plans_user_id ON plans(user_id);
CREATE INDEX idx_daily_tasks_user_id ON daily_tasks(user_id);
CREATE INDEX idx_food_scans_user_id ON food_scans(user_id);
CREATE INDEX idx_wearable_data_user_id ON wearable_data(user_id);
CREATE INDEX idx_mental_health_user_id ON mental_health_records(user_id);
CREATE INDEX idx_appointments_user_id ON appointments(user_id);
CREATE INDEX idx_consultation_messages_consultation_id ON consultation_messages(consultation_id);
