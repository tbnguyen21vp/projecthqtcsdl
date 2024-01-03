const { createConnection } = require('../config/database');
const pool = createConnection('BN');


const xemToanBoThuoc = async (req, res) => {
    try {

        const request = await pool.request();
        let danhSachThuoc = await request.execute('SP_XEMTOANBOTHUOC');
        danhSachThuoc = danhSachThuoc.recordset;

        return res.status(200).json(danhSachThuoc);

    } catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });
    }

}

const xemBenhAn = async (req, res) => {
    try {
        const params = {
            SODT: req.userId
        }
        const request = await pool.request();
        for (const paramName in params) {
            if (params.hasOwnProperty(paramName)) {
                request.input(paramName, params[paramName]);
            }
        }
        let benhAn = await request.execute('SP_XEMBENHAN'); benhAn = benhAn.recordset;

        return res.status(200).json(benhAn);

    } catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });
    }
}
const xemToanBoDichVu = async (req, res) => {
    try {

        const request = await pool.request();
        let danhSachDichVu = await request.execute('SP_XEMTOANBODICHVU', null);
        danhSachDichVu = danhSachDichVu.recordset;
        return res.status(200).json(danhSachDichVu);

    } catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });
    }
}

const xemToanBoBacSi = async (req, res) => {
    try {

        const request = await pool.request();
        let danhSachBacSi = await request.execute('SP_XEMTOANBOBACSI', null);
        danhSachBacSi = danhSachBacSi.recordset;
        return res.status(200).json(danhSachBacSi);

    } catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });
    }
}
const xemThongTinBenhNhan = async (req, res) => {
    try {
        const params = {
            SODT: req.userId
        }
        const request = await pool.request();
        for (const paramName in params) {
            if (params.hasOwnProperty(paramName)) {
                request.input(paramName, params[paramName]);
            }
        }
        let thongTin = await request.execute('SP_XEMTHONGTINBENHNHAN');
        thongTin = thongTin.recordset;
        return res.status(200).json(thongTin);
    } catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });

    }
}

const xemLichHen = async (req, res) => {
    try {
        const params = {
            SODT: req.userId
        }
        const request = await pool.request();
        for (const paramName in params) {
            if (params.hasOwnProperty(paramName)) {
                request.input(paramName, params[paramName]);
            }
        }
        let lichHen = await request.execute('SP_XEMLICHHEN');
        lichHen = lichHen.recordsetl
        return res.status(200).json(lichHen);
    } catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });

    }
}


module.exports = {
    xemToanBoThuoc,
    xemBenhAn,
    xemLichHen,
    xemThongTinBenhNhan,
    xemToanBoBacSi,
    xemToanBoDichVu,

};