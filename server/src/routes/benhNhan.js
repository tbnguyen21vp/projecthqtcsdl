const benhNhanController = require('../controllers/benhNhan');
const express = require('express');
const router = express.Router();

router.get('/toanBoThuoc',benhNhanController.xemToanBoThuoc);
router.get('/toanBoDichVu',benhNhanController.xemToanBoDichVu);
router.get('/toanBoBacSi',benhNhanController.xemToanBoBacSi);
router.get('/benhAn',benhNhanController.xemBenhAn);
router.get('/benhNhan', benhNhanController.xemThongTinBenhNhan);
router.get('/lichHen',benhNhanController.xemLichHen);


module.exports = router;