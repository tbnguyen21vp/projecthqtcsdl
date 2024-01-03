var express = require('express');
const adminRoutes = require('./admin');
const bacSiRoutes = require('./bacSi');
const benhNhanRoutes = require('./benhNhan');
const nhanVienRoutes = require('./nhanVien');
const publicRoutes = require('./public');
const authMiddleware = require('../middlewares/auth');


const routers = (app) => {
  app.use('/api/admin',
    authMiddleware.authTokenCheck, authMiddleware.proctectRole('AD')
    , adminRoutes);
  app.use('/api/benhNhan', authMiddleware.authTokenCheck, authMiddleware.proctectRole('BN')
    , benhNhanRoutes);
  app.use('/api/bacSi', authMiddleware.authTokenCheck, authMiddleware.proctectRole('BS')
    , bacSiRoutes);
  app.use('/api/nhanVien', authMiddleware.authTokenCheck, authMiddleware.proctectRole('NV')
    , nhanVienRoutes);
  app.use('/api/public', publicRoutes);

}


module.exports = routers;
