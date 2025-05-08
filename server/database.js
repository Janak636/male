require('dotenv').config();  // 

const Pool = require('pg').Pool;

// Setup database connection
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',  //
  password: process.env.DB_PASSWORD || 'sql',  // 
  database: process.env.DATABASE || 'male',  // 
  host: process.env.DB_HOST || 'localhost',  // 
  port: process.env.DB_PORT || '5432',  // 
});

module.exports = { pool };