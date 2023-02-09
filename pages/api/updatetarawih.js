import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { no, malam, imam, bilal } = req.body;
    try {
        if (!no || !malam || !imam || !bilal) {
            return res
                .status(400)
                .json({ message: 'Input Harus di isi semua' })
        }

        const results = await db.query(
            `UPDATE petugastarawih set no =?,  malam = ?, imam = ?, bilal = ?
    WHERE no = ?`, [no, malam, imam, bilal, no]
        );

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;

