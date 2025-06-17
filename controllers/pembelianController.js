const Produk = require("../models/produkModel");
const Pembelian = require("../models/pembelianModel");
const Stok = require("../models/stokModel");

exports.index = async (req, res) => {
  try {
    const pembelian = await Pembelian.getAll();
    const produk = await Produk.getAll();

    res.render("layouts/layout", {
      view: "pembelian/index",
      pembelian,
      produk,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat menampilkan data pembelian.");
  }
};

exports.form = async (req, res) => {
  try {
    const produk = await Produk.getAll();
    res.render("pembelian/form", { produk });
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat menampilkan form pembelian.");
  }
};

exports.store = async (req, res) => {
  try {
    const { produk_id, jumlah } = req.body;

    await Pembelian.insert({ produk_id, jumlah });
    await Stok.kurangiStok(produk_id, jumlah);

    res.redirect("/pembelian");
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal menyimpan data pembelian.");
  }
};

exports.cancel = async (req, res) => {
  try {
    const id = req.params.id;
    const pembelianData = await Pembelian.getById(id);
    const pembelian = pembelianData[0];

    await Stok.tambahStok(pembelian.produk_id, pembelian.jumlah);
    await Pembelian.cancel(id);

    res.redirect("/pembelian");
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal membatalkan pembelian.");
  }
};
