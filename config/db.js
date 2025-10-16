const mongoose = require('mongoose');

// اتصال به MongoDB با استفاده از متغیر محیطی
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected'); // اتصال موفق
  } catch (err) {
    console.error(err.message); // نمایش خطا
    process.exit(1); // خروج از برنامه در صورت خطا
  }
}

module.exports = connectDB;
