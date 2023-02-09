import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { tanggal } = req.query
    try {
        if (!tanggal) {
            return res.status(400).json({ message: ' `tanggal` tidak ada ' })
        }

        const results = await db.query(
            `
            DELETE FROM jadwalsholat
            WHERE tanggal = ?
            `, tanggal
        )
        res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default handler;