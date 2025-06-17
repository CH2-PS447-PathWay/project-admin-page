const express = require("express");
const router = express.Router();
const controller = require("../controllers/pembelianController");

router.get("/", (req, res) => res.redirect("/pembelian"));
router.get("/pembelian", controller.index);
router.get("/pembelian/tambah", controller.form);
router.post("/pembelian", controller.store);
router.post("/pembelian/:id/cancel", controller.cancel);

module.exports = router;
