const nhanVienController = require('../controllers/nhanVien');
const express = require('express');
const router = express.Router();

router.get('/toanBoThuoc',nhanVienController.xemToanBoThuoc);
router.get('/toanBoDichVu',nhanVienController.xemToanBoDichVu);
router.get('/toanBoBacSi',nhanVienController.xemToanBoBacSi);
router.get('/toanBoNhanVien',nhanVienController.xemToanBoNhanVien);
router.get('/toanBoAd',nhanVienController.xemToanBoAd);
router.get('/benhAn/:SDT',nhanVienController.xemBenhAn);
router.post('/benhNhan', nhanVienController.themTKBN);
router.get('/benhNhan/:SDT', nhanVienController.xemThongTinBenhNhan);
router.get('/lichHen/:SDT',nhanVienController.xemLichHen);


module.exports = router;