import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { no } = req.query
    try {
        if (!no) {
            return res.status(400).json({ message: ' `no` tidak ada ' })
        }

        const results = await db.query(
            `
            DELETE FROM petugastarawih
            WHERE no = ?
            `, no
        )
        res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default handler;