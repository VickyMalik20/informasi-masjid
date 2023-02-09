import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { no, tanggal, bilalawal, bilalakhir, imam } = req.body;
    try {
        if (!no || !tanggal || !bilalawal || !bilalakhir || !imam) {
            return res
                .status(400)
                .json({ message: 'Input Harus di isi semua' })
        }

        const results = await db.query(
            `UPDATE petugasjumat set no =?,  tanggal = ?, bilalawal = ?, bilalakhir = ?, imam = ?
    WHERE no = ?`, [no, tanggal, bilalawal, bilalakhir, imam, no]
        );

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;

