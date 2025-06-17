const db = require("../config/db");

const Stok = {
  kurangiStok: async (produkId, jumlah) => {
    const query = "UPDATE stok SET jumlah = jumlah - ? WHERE produk_id = ?";
    return new Promise((resolve, reject) => {
      db.query(query, [jumlah, produkId], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  tambahStok: async (produkId, jumlah) => {
    const query = "UPDATE stok SET jumlah = jumlah + ? WHERE produk_id = ?";
    return new Promise((resolve, reject) => {
      db.query(query, [jumlah, produkId], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Stok;
