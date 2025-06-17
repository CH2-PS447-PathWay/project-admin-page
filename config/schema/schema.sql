CREATE DATABASE IF NOT EXISTS toko_db;
USE toko_db;

CREATE TABLE produk (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100)
);

CREATE TABLE stok (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produk_id INT,
  jumlah INT,
  FOREIGN KEY (produk_id) REFERENCES produk(id)
);

CREATE TABLE pembelian (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produk_id INT,
  jumlah INT,
  status ENUM('completed', 'cancelled') DEFAULT 'completed',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (produk_id) REFERENCES produk(id)
);

-- Tambahkan 10 produk dummy
INSERT INTO produk (nama) VALUES 
('Sabun'), ('Shampoo'), ('Pasta Gigi'), ('Tissue'), ('Sikat Gigi'),
('Minyak Goreng'), ('Gula'), ('Kopi'), ('Teh'), ('Susu');

-- Tambahkan stok awal
INSERT INTO stok (produk_id, jumlah)
SELECT id, 100 FROM produk;
