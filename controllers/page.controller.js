// Halaman Home
exports.home = (req, res) => {
  res.render('pages/home');
};

// Halaman About
exports.about = (req, res) => {
  res.render('pages/about');
};

// Halaman Katalog
exports.katalog = (req, res) => {
  const books = [
    {
      title: 'The Little Prince',
      author: 'Antoine de Saint-Exupéry',
      year: 1943,
      category: 'Fiksi'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      category: 'Romansa'
    },
    {
      title: 'The Secret Garden',
      author: 'Frances Hodgson Burnett',
      year: 1911,
      category: 'Klasik'
    }
  ];

  res.render('pages/katalog', { books });
};

// Halaman Form Tambah Data
exports.tambahData = (req, res) => {
  res.render('pages/tambah-data');
};

// Proses penyimpanan data dari form
exports.simpanData = (req, res) => {
  const book = req.body;

  console.log('Data buku yang dikirim:', book);

  res.redirect('/katalog');
};