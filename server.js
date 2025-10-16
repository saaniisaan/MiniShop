require('dotenv').config(); // بارگذاری متغیرهای محیطی
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Middleware ها
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // نمایش تصاویر آپلود شده

// اتصال به دیتابیس
connectDB();

// روت‌ها
app.use('/api/products', require('./routes/products'));
app.use('/api/auth', require('./routes/auth'));

// مدیریت خطاها
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
