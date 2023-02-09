import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { bulan, tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya } = req.body;
    try {
        if (!bulan || !tanggal || !imsyak || !subuh || !terbit || !dzuhur || !ashar || !maghrib || !isya) {
            return res
                .status(400)
                .json({ message: 'Input Harus di isi semua' })
        }

        const results = await db.query(
            `UPDATE jadwalsholat set bulan =?,  tanggal = ?, imsyak = ?, subuh = ?, terbit = ?, dzuhur = ?, ashar = ?, maghrib = ?, isya = ?
    WHERE tanggal = ?`, [bulan, tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya, tanggal]
        );

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;

