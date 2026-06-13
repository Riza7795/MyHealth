import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User, UserProfile, WorkerProfile } from '../models/index.js';

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: '30d',
  });
};

export const register = async (req, res) => {
  const { email, password, firstName, lastName, role, ...profileData } = req.body;

  // Validation
  if (!email || !password || !firstName || !lastName || !role) {
    return res.status(400).json({ status: 'error', message: 'Please provide all required fields' });
  }

  // Check if user exists
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.status(400).json({ status: 'error', message: 'User already exists' });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    email,
    passwordHash,
    firstName,
    lastName,
    role
  });

  // Create specific profiles based on role
  if (role === 'user') {
    await UserProfile.create({
      userId: user.id,
      ...profileData,
    });
  } else if (role === 'worker') {
    await WorkerProfile.create({
      userId: user.id,
      ...profileData,
    });
  }

  res.status(201).json({
    status: 'success',
    data: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      token: generateToken(user.id, user.role),
    },
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: 'error', message: 'Please provide email and password' });
  }

  const user = await User.findOne({ where: { email } });

  if (user && (await bcrypt.compare(password, user.passwordHash))) {
    // Update last login
    user.lastLogin = new Date();
    await user.save();

    res.json({
      status: 'success',
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        token: generateToken(user.id, user.role),
      },
    });
  } else {
    res.status(401).json({ status: 'error', message: 'Invalid credentials' });
  }
};

export const getMe = async (req, res) => {
  // This expects auth middleware to have set req.user
  const user = await User.findByPk(req.user.id, {
    attributes: { exclude: ['passwordHash'] },
    include: req.user.role === 'worker' ? 'workerProfile' : 'userProfile'
  });

  if (!user) {
    return res.status(404).json({ status: 'error', message: 'User not found' });
  }

  res.json({
    status: 'success',
    data: user,
  });
};
