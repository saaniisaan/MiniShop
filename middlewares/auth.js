const jwt = require('jsonwebtoken');

// Middleware برای احراز هویت
module.exports = function (req, res, next) {
  const header = req.header('Authorization');
  if (!header) return res.status(401).json({ message: 'No token' });

  const token = header.split(' ')[1]; // استخراج توکن
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // اطلاعات کاربر
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
