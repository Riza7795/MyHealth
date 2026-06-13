/**
 * User Model
 * Represents user in database
 */

import { DataTypes } from 'sequelize';

export const UserModel = (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password_hash',
      },
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name',
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
      },
      phone: DataTypes.STRING,
      avatarUrl: {
        type: DataTypes.STRING,
        field: 'avatar_url',
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        field: 'date_of_birth',
      },
      gender: DataTypes.STRING,
      occupation: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM('user', 'worker', 'admin'),
        defaultValue: 'user',
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'is_active',
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_verified',
      },
      lastLogin: {
        type: DataTypes.DATE,
        field: 'last_login',
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
      tableName: 'users',
      timestamps: true,
      underscored: false,
    }
  );

  return User;
};
