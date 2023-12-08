const express = require('express');
const router = express.Router();

const newsController = require('../controllers/newsController');
router.get('/news', newsController.getAllNews);
router.post('/news', newsController.createNews); // Ganti ini dengan metode yang sesuai untuk menangani POST

module.exports = router; // Perbaiki ini menjadi 'exports'
