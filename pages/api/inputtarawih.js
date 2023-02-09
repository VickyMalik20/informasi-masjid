//@ts-check
import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { no, malam, bilal, imam, } = req.body;
    try {
        if (!no || !malam || !bilal || !imam) {
            return res
                .status(400)
                .json({ message: 'Input harus diisi semua' })
        }
        const results = await db.query(`
        INSERT INTO petugastarawih (no, malam, bilal, imam)
        VALUES (?,?,?,?)
        `, [no, malam, bilal, imam]
        );
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;