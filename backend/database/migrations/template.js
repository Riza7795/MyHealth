/**
 * Database Migration Template
 * Example: Create Users Table
 * 
 * To use this template:
 * 1. Copy this file to backend/database/migrations/
 * 2. Rename it with timestamp: YYYYMMDDHHMMSS-create-users-table.js
 * 3. Implement up() and down() methods
 * 4. Run: npm run migrate
 */

const Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add altering commands here.
     * Example:
     * await queryInterface.createTable('users', {
     *   id: {
     *     type: DataTypes.INTEGER,
     *     primaryKey: true,
     *     autoIncrement: true,
     *   },
     *   email: {
     *     type: DataTypes.STRING,
     *     allowNull: false,
     *     unique: true,
     *   },
     *   name: {
     *     type: DataTypes.STRING,
     *     allowNull: false,
     *   },
     *   createdAt: {
     *     type: DataTypes.DATE,
     *     allowNull: false,
     *     defaultValue: Sequelize.fn('NOW'),
     *   },
     *   updatedAt: {
     *     type: DataTypes.DATE,
     *     allowNull: false,
     *     defaultValue: Sequelize.fn('NOW'),
     *   },
     * });
     */
  },

  down: async (queryInterface, DataTypes) => {
    /**
     * Add reverting commands here.
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
