import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { id, nama, tanggallahir, alamat, jabatan, foto } = req.body;
    try {
        if (!id || !nama || !tanggallahir || !alamat || !jabatan || !foto) {
            return res
                .status(400)
                .json({ message: 'Input harus diisi semua' })
        }
        const results = await db.query(`
        INSERT INTO pengurustakmir (id, nama, tanggallahir, alamat, jabatan, foto)
        VALUES (?,?,?,?,?,?)
        `, [id, nama, tanggallahir, alamat, jabatan, foto]
        );
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;