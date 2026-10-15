const express = require('express');
const router = express.Router();

const pageController = require('../controllers/page.controller');

// Halaman utama
router.get('/', pageController.home);

// Halaman About
router.get('/about', pageController.about);

// Halaman katalog
router.get('/katalog', pageController.katalog);

// Halaman form tambah data
router.get('/tambah-data', pageController.tambahData);

// Proses form tambah data
router.post('/tambah-data', pageController.simpanData);

module.exports = router;