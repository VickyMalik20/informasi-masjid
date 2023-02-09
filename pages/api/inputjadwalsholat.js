//@ts-check
import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { bulan, tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya } = req.body;
    try {
        if (!bulan || !tanggal || !imsyak || !subuh || !terbit || !dzuhur || !ashar || !maghrib || !isya) {
            return res
                .status(400)
                .json({ message: 'Input harus diisi semua' })
        }
        const results = await db.query(`
        INSERT INTO jadwalsholat (bulan, tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya)
        VALUES (?,?,?,?,?,?,?,?,?)
        `, [bulan, tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya]
        );
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;