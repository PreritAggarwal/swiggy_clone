// import { createPool } from 'mysql2/promise';
// import dotenv from 'dotenv';

// // Initialize dotenv
// dotenv.config();

// const pool = createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// export default pool;


import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Initialize dotenv
dotenv.config();

// Create a Sequelize instance
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false, // Set to true if you want to see SQL queries in the console
});

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use { force: true } if you want to drop existing tables and recreate them
    console.log('Database synced successfully!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();


export default sequelize;
