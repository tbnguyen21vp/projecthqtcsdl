const adminController = require('../controllers/admin');
const express = require('express');
const router = express.Router();

router.get('/toanBoThuoc',adminController.xemToanBoThuoc);
router.get('/toanBoDichVu',adminController.xemToanBoDichVu);
router.get('/toanBoBacSi',adminController.xemToanBoBacSi);
router.get('/toanBoNhanVien',adminController.xemToanBoNhanVien);
router.get('/toanBoAd',adminController.xemToanBoAd);
router.get('/benhAn/:SDT',adminController.xemBenhAn);
router.post('/benhNhan', adminController.themTKBN);
router.get('/benhNhan/:SDT', adminController.xemThongTinBenhNhan);
router.get('/lichHen/:SDT',adminController.xemLichHen);




module.exports = router;