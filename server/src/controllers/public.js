const { createConnection } = require('../config/database');
const pool = createConnection('SYS');
const jwt = require('jsonwebtoken');
const sql = require('mssql');

const dangNhap = async (req, res) => {
    try {
        const params = {
            MATK: req.body.MATK,
            MATKHAU: req.body.MATKHAU
        }
        let request = await pool.request();
        for (const paramName in params) {
            if (params.hasOwnProperty(paramName)) {
                request.input(paramName, params[paramName]);
            }
        }
       
        let exeRes = await request.execute('SP_DANGNHAP');
        let role = exeRes.recordset[0].ROLE;
        
        if(!role) throw new Error();
        const accessToken = jwt.sign(
            {
                userId: params.MATK,
                userRole: role,
            },
            process.env.ACCTOK_SK,
            { expiresIn: process.env.ACCTOK_LIFE }
        );
        return res.status(200).json({
            success: true,
            accessToken: accessToken,

        });
    } catch (err) {
        if (err.message == 'Tài khoản hoặc mật khẩu không đúng.') return res.status(400).json({ error: err.message });

        return res.status(500).json({ 'Lỗi server': err.message });
    }
}

module.exports = {
    dangNhap
};