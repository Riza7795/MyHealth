import { DataTypes } from 'sequelize';

export const WorkerProfileModel = (sequelize) => {
  const WorkerProfile = sequelize.define(
    'WorkerProfile',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
      },
      qualification: DataTypes.STRING,
      experienceYears: {
        type: DataTypes.INTEGER,
        field: 'experience_years',
      },
      specialization: DataTypes.STRING,
      rating: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      reviewsCount: {
        type: DataTypes.INTEGER,
        field: 'reviews_count',
        defaultValue: 0,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        field: 'is_verified',
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'updated_at',
      },
    },
    {
      tableName: 'worker_profiles',
      timestamps: true,
      underscored: false,
    }
  );

  return WorkerProfile;
};
