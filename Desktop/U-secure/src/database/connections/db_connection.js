const mongoose = require('mongoose');
async function connectDB() {
   mongoose.connect(process.env.DB_URL);
   console.log('MongoDB connected successfully');
}
module.exports = connectDB;
