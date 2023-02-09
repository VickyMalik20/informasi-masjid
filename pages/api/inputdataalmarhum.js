//@ts-check
import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { nama, tanggalwafat, tanggallahir, rt, rw, bin } = req.body;
    try {
        if (!nama || !tanggalwafat || !tanggallahir || !rt || !rw || !bin) {
            return res
                .status(400)
                .json({ message: 'Input harus diisi semua' })
        }
        const results = await db.query(`
        INSERT INTO dataalmarhum (nama, tanggalwafat, tanggallahir, rt, rw, bin)
        VALUES (?,?,?,?,?,?)
        `, [nama, tanggalwafat, tanggallahir, rt, rw, bin]
        );
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;