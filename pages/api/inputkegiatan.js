//@ts-check
import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { id, judul, tanggal, waktumulai, waktuselesai, lokasi, deskripsi, foto } = req.body;
    try {
        if (!id || !judul || !tanggal || !waktumulai || !waktuselesai || !lokasi || !deskripsi || !foto) {
            return res
                .status(400)
                .json({ message: 'Input harus diisi semua' })
        }
        const results = await db.query(`
        INSERT INTO kegiatan (id, judul,tanggal, waktumulai , waktuselesai, lokasi, deskripsi, foto)
        VALUES (?,?,?,?,?,?,?,?)
        `, [id, judul, tanggal, waktumulai, waktuselesai, lokasi, deskripsi, foto]
        );
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;