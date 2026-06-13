/**
 * Database Seed Template
 * Example: Seed sample users
 * 
 * To use this template:
 * 1. Create seed file in backend/database/seeds/
 * 2. Implement the seed logic
 * 3. Run: npm run seed
 */

export const up = async (queryInterface, DataTypes) => {
  /**
   * Add seed data here
   * Example:
   * await queryInterface.bulkInsert('users', [
   *   {
   *     email: 'user1@example.com',
   *     name: 'John Doe',
   *     password: 'hashed_password_here',
   *     role: 'user',
   *     createdAt: new Date(),
   *     updatedAt: new Date(),
   *   },
   *   {
   *     email: 'doctor1@example.com',
   *     name: 'Dr. Jane Smith',
   *     password: 'hashed_password_here',
   *     role: 'worker',
   *     createdAt: new Date(),
   *     updatedAt: new Date(),
   *   },
   * ]);
   */
};

export const down = async (queryInterface, DataTypes) => {
  /**
   * Add seed removal/rollback logic
   * Example:
   * await queryInterface.bulkDelete('users', null, {});
   */
};
