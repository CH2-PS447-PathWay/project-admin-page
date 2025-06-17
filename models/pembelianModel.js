const db = require("../config/db");

const Pembelian = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT pembelian.id, pembelian.produk_id, produk.nama AS nama_produk, pembelian.jumlah, pembelian.status, pembelian.created_at
        FROM pembelian
        JOIN produk ON pembelian.produk_id = produk.id
        ORDER BY pembelian.created_at DESC
      `;
      db.query(query, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  insert: ({ produk_id, jumlah }) => {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO pembelian (produk_id, jumlah, status) VALUES (?, ?, 'completed')";
      db.query(query, [produk_id, jumlah], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  cancel: (id) => {
    return new Promise((resolve, reject) => {
      const query = "UPDATE pembelian SET status = ? WHERE id = ?";
      db.query(query, ["cancelled", id], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM pembelian WHERE id = ?";
      db.query(query, [id], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Pembelian;
