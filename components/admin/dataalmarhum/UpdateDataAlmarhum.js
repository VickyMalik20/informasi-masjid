//@ts-check

import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const UpdateDataAlmarhum = () => {
    const [_no, setNo] = useState('');
    const [_nama, setNama] = useState('');
    const [_tanggalwafat, setTanggalwafat] = useState('');
    const [_tanggallahir, setTanggallahir] = useState('');
    const [_rt, setRt] = useState('');
    const [_rw, setRw] = useState('');
    const [_bin, setBin] = useState('');

    const router = useRouter();
    const { no, nama, tanggalwafat, tanggallahir, rt, rw, bin } = router.query;

    useEffect(() => {

        if (typeof no == 'string') {
            setNo(no);
        }
        if (typeof nama == 'string') {
            setNama(nama);
        }
        if (typeof tanggalwafat == 'string') {
            setTanggalwafat(tanggalwafat);
        }
        if (typeof tanggallahir == 'string') {
            setTanggallahir(tanggallahir);
        }
        if (typeof rt == 'string') {
            setRt(rt);
        }
        if (typeof rw == 'string') {
            setRw(rw);
        }
        if (typeof bin == 'string') {
            setBin(bin);
        }
    }, [no, nama, tanggalwafat, tanggallahir, rt, rw, bin],)

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch('/api/updatedataalmarhum', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    no: _no,
                    nama: _nama,
                    tanggalwafat: _tanggalwafat,
                    tanggallahir: _tanggallahir,
                    rt: _rt,
                    rw: _rw,
                    bin: _bin
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Update data sukses")

            Router.push('/admin/dataalmarhum/dataalmarhumadmin')
        } catch (e) {
            throw Error(e.message)
        }
    }


    return (
        <>
            <Head>
                <title>Ubah Data Almarhum</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div className='container mt-5'>
                <div className='container mt-5'>
                    <div className="jumbotron text-center" style={{ backgroundColor: '#f5f5f5' }}>
                        <h3 className="display-12" style={{ color: 'orange' }}><em>Edit Data Almarhum</em></h3>
                    </div>
                </div>
                <form onSubmit={submitHandler} className='container' style={{ maxWidth: '500px' }}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">No</label>
                        <input type="text" placeholder='No' className="form-control" id='no' value={_no} onChange={(e) => setNo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Nama</label>
                        <input type="text" placeholder='Nama' className="form-control" id='nama' value={_nama} onChange={(e) => setNama(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tanggal Wafat</label>
                        <input type="text" placeholder='Tanggal Wafat' className="form-control" id='tanggalwafat' value={_tanggalwafat} onChange={(e) => setTanggalwafat(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tanggal Lahir</label>
                        <input type="text" placeholder='Tanggal Wafat' className="form-control" id='tanggallahir' value={_tanggallahir} onChange={(e) => setTanggallahir(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">RT</label>
                        <input type="text" placeholder='RT' className="form-control" id='rt' value={_rt} onChange={(e) => setRt(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">RW</label>
                        <input type="text" placeholder='RW' className="form-control" id='rw' value={_rw} onChange={(e) => setRw(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Bin</label>
                        <input type="text" placeholder='Bin' className="form-control" id='bin' value={_bin} onChange={(e) => setBin(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary w-100" >Update</button>


                </form>
            </div>

        </>
    )
}

export default UpdateDataAlmarhum;