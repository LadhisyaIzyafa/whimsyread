const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Konfigurasi EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route
const pageRoutes = require('./routes/page.routes');
app.use('/', pageRoutes);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`WhimSyRead berjalan di http://localhost:${PORT}`);
});