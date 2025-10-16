const mongoose = require('mongoose');

// تعریف Schema محصول
const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // نام محصول
  price: { type: Number, required: true }, // قیمت
  description: String, // توضیح محصول
  image: String, // مسیر عکس محصول
  inStock: { type: Number, default: 0 }, // تعداد موجود
  createdAt: { type: Date, default: Date.now } // تاریخ ایجاد
});

module.exports = mongoose.model('Product', productSchema);
