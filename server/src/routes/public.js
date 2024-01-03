const publicController = require('../controllers/public');
const express = require('express');
const router = express.Router();

router.post('/dangNhap',publicController.dangNhap);

module.exports = router;

