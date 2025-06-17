# 🛍️ Admin Page - input data pembelian, dan cancel pembelian oleh admin toko

Proyek ini merupakan aplikasi web sederhana untuk mengelola data pembelian dan stok produk menggunakan **Node.js**, **Express**, **EJS**, dan **MySQL**.

## 📦 Fitur Utama

- Menampilkan daftar pembelian produk
- Menambahkan data pembelian
- Pembatalan pembelian (cancel)
- Pengelolaan stok otomatis:
  - Stok **berkurang** saat pembelian dilakukan
  - Stok **bertambah** saat pembelian dibatalkan
- Menampilkan tabel stok barang
- Antarmuka web sederhana dan mudah digunakan

---

## ⚙️ Teknologi yang Digunakan

| Kategori  | Teknologi                                                      |
| --------- | -------------------------------------------------------------- |
| Backend   | Node.js, Express.js                                            |
| Frontend  | EJS (Embedded JavaScript Templates), Tailwind CSS _(opsional)_ |
| Database  | MySQL                                                          |
| Dev Tools | Nodemon (auto-reload saat development)                         |

---

## 🔧 Cara Menjalankan Proyek

### 1. Clone repository:

```bash
git clone https://github.com/CH2-PS447-PathWay/project-admin-page.git
cd project-admin-page
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Konfigurasi database:

- Buat database MySQL (misal: admin_db)
- import file sql ke database, atau buat tabel manual

```sql
CREATE TABLE produk (
id INT AUTO_INCREMENT PRIMARY KEY,
nama VARCHAR(100),
stok INT
);

CREATE TABLE pembelian (
id INT AUTO_INCREMENT PRIMARY KEY,
produk_id INT,
jumlah INT,
status ENUM('completed', 'cancelled') DEFAULT 'completed',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE stok (
id INT AUTO_INCREMENT PRIMARY KEY,
produk_id INT,
jumlah INT
);
```

### 4. Konfigurasi koneksi database:

- Buat file .env dan sesuaikan konfigurasi koneksi database:

```javascript
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=toko_db
PORT=3000
```

### 5. Jalankan aplikasi:

```bash
npm run dev
```

### 6. Buka browser dan akses:

```
http://localhost:3000
```
