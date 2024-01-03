const bacSiController = require('../controllers/bacSi');
const express = require('express');
const router = express.Router();
router.get('/toanBoThuoc',bacSiController.xemToanBoThuoc);
router.get('/toanBoDichVu',bacSiController.xemToanBoDichVu);
router.get('/toanBoBacSi',bacSiController.xemToanBoBacSi);
router.get('/toanBoNhanVien',bacSiController.xemToanBoNhanVien);
router.get('/toanBoAd',bacSiController.xemToanBoAd);
router.get('/benhAn/:SDT',bacSiController.xemBenhAn);
router.get('/benhNhan/:SDT', bacSiController.xemThongTinBenhNhan);
router.get('/lichHen/:SDT',bacSiController.xemLichHen);




module.exports = router;