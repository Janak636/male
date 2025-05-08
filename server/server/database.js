require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
user: process.env.DB_USER || 'postgres',
password: 'db_password_placeholder',
database: process.env.DATABASE || 'male',
host: process.env.DB_HOST || 'localhost',
post: process.env.DB_PORT || '5432',
});
module.exports = { pool };
