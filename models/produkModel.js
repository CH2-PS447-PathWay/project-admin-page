const db = require("../config/db");

const Produk = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT produk.id, produk.nama, stok.jumlah
        FROM produk
        JOIN stok ON stok.produk_id = produk.id
      `;
      db.query(query, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },
};

module.exports = Produk;
