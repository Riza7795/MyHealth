import { DataTypes } from 'sequelize';

export const UserProfileModel = (sequelize) => {
  const UserProfile = sequelize.define(
    'UserProfile',
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
      height: DataTypes.FLOAT, // cm
      weight: DataTypes.FLOAT, // kg
      bloodPressure: {
        type: DataTypes.STRING,
        field: 'blood_pressure',
      },
      bloodSugar: {
        type: DataTypes.STRING,
        field: 'blood_sugar',
      },
      cholesterol: DataTypes.STRING,
      primaryGoal: {
        type: DataTypes.STRING,
        field: 'primary_goal', // Fitness, Weight loss, Skin, General health
      },
      healthScore: {
        type: DataTypes.INTEGER,
        field: 'health_score',
        defaultValue: 0,
      },
      diabetesRisk: {
        type: DataTypes.STRING,
        field: 'diabetes_risk',
        defaultValue: 'Low'
      },
      heartDiseaseRisk: {
        type: DataTypes.STRING,
        field: 'heart_disease_risk',
        defaultValue: 'Low'
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
      tableName: 'user_profiles',
      timestamps: true,
      underscored: false,
    }
  );

  return UserProfile;
};
