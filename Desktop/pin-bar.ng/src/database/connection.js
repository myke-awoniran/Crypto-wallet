const mongoose = require('mongoose');
const DB_URL = process.env.DATABASE_URL;
async function connectDB() {
   await mongoose.connect(DB_URL);
   console.log('database connected successfully');
}

module.exports = connectDB;
