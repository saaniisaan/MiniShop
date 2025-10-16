const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/Product');
const auth = require('../middlewares/auth');

// تنظیم Multer برای آپلود عکس
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// ایجاد محصول جدید (Protected)
router.post('/', auth, upload.single('image'), async (req, res, next) => {
  try {
    const { name, price, description, inStock } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    const product = new Product({ name, price, description, inStock, image });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    next(err); // ارسال خطا به Middleware
  }
});

// دریافت همه محصولات
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
