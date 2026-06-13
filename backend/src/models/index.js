import sequelize from '../config/database.js';
import { UserModel } from './user.js';
import { UserProfileModel } from './UserProfile.js';
import { WorkerProfileModel } from './WorkerProfile.js';

// Initialize Models
const User = UserModel(sequelize);
const UserProfile = UserProfileModel(sequelize);
const WorkerProfile = WorkerProfileModel(sequelize);

// Define Relationships
// User <-> UserProfile (1-to-1)
User.hasOne(UserProfile, { foreignKey: 'userId', as: 'userProfile', onDelete: 'CASCADE' });
UserProfile.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// User <-> WorkerProfile (1-to-1)
User.hasOne(WorkerProfile, { foreignKey: 'userId', as: 'workerProfile', onDelete: 'CASCADE' });
WorkerProfile.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export { sequelize, User, UserProfile, WorkerProfile };
