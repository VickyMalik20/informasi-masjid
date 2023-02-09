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
        const results = await db.query(
            `UPDATE kegiatan set id =?, judul=?, tanggal=?, waktumulai=?, waktuselesai=?, lokasi=?, deskripsi=?, foto=? WHERE id =?
        `, [id, judul, tanggal, waktumulai, waktuselesai, lokasi, deskripsi, foto, id]
        );

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;