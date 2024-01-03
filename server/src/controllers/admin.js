const { createConnection } = require('../config/database');
const pool = createConnection('AD');


const xemToanBoThuoc = async (req, res) => {
    try {
        
        const request = await pool.request();
        let danhSachThuoc = await request.execute('SP_XEMTOANBOTHUOC', null);
        danhSachThuoc = danhSachThuoc.recordset;
        return res.status(200).json(danhSachThuoc);

    } catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });
    }

}

const xemBenhAn = async (req, res) => {
    try {
        const params = {
            SODT: req.params.SODT
        }
        const request = await pool.request();
        for (const paramName in params) {
            if (params.hasOwnProperty(paramName)) {
                request.input(paramName, params[paramName]);
            }
        }
        let benhAn = await request.execute('SP_XEMBENHAN');
        benhAn=benhAn.recordset;
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
const xemToanBoNhanVien = async (req, res) => {
    try {

        const request = await pool.request();
        let danhSachNhanVien = await request.execute('SP_xemtoanbonhanvien', null);
        danhSachNhanVien = danhSachNhanVien.recordset;
        return res.status(200).json(danhSachNhanVien);

    } catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });
    }
}
const xemToanBoAd = async (req, res) => {
    try {

        const request = await pool.request();
        let danhSachAd = await request.execute('SP_xemtoanboadmin', null);
        danhSachAd = danhSachAd.recordset;
        return res.status(200).json(danhSachAd);

    } catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });
    }
}
const themTKBN = async (req, res) => {
    try {
        const params = {
            SODT: req.body.SODT,
            HOTEN: req.body.HOTEN,
            PHAI: req.body.PHAI,
            NGAYSINH: req.body.NGAYSINH,
            DIACHI: req.body.DIACHI,
            MATKHAU: req.body.MATKHAU,
        }
        const request = await pool.request();
        for (const paramName in params) {
            if (params.hasOwnProperty(paramName)) {
                request.input(paramName, params[paramName]);
            }
        }
        await request.execute('SP_THEMTAIKHOANBENHNHAN');
        return res.status(201).json({ 'success': true });

    }
    catch (err) {
        return res.status(500).json({ 'Lỗi server': err.message });

    }
}

const xemThongTinBenhNhan = async (req, res) => {
    try {
        const params = {
            SODT: req.params.SODT
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
            SODT: req.params.SODT
        }
        const request = await pool.request();
        for (const paramName in params) {
            if (params.hasOwnProperty(paramName)) {
                request.input(paramName, params[paramName]);
            }
        }
        let lichHen = await request.execute('SP_XEMLICHHEN');
        lichHen =lichHen.recordset;
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
    xemToanBoAd,
    xemToanBoBacSi,
    xemToanBoDichVu,
    xemToanBoNhanVien,
    themTKBN
};