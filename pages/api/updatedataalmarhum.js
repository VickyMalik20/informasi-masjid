//@ts-check
import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { no, nama, tanggalwafat, tanggallahir, rt, rw, bin } = req.body;
    try {
        if (!no || !nama || !tanggalwafat || !tanggallahir || !rt || !rw || !bin) {
            return res
                .status(400)
                .json({ message: 'Input harus diisi semua' })
        }
        const results = await db.query(
            `UPDATE dataalmarhum set no =?, nama=?, tanggalwafat=?,tanggallahir=?, rt=?, rw=?, bin=? WHERE no =?
        `, [no, nama, tanggalwafat, tanggallahir, rt, rw, bin, no]
        );

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;