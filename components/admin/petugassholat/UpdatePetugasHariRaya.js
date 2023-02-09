import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const UpdatePetugasHariRaya = () => {

    const [_no, setNo] = useState('');
    const [_tanggal, setTanggal] = useState('');
    const [_bilalawal, setBilalawal] = useState('');
    const [_bilalakhir, setBilalakhir] = useState('');
    const [_khotib, setKhotib] = useState('');
    const [_imam, setImam] = useState('');

    const router = useRouter();
    const { no, tanggal, bilalawal, bilalakhir, khotib, imam } = router.query;

    useEffect(() => {

        if (typeof no == 'string') {
            setNo(no);
        }
        if (typeof tanggal == 'string') {
            setTanggal(tanggal);
        }
        if (typeof bilalawal == 'string') {
            setBilalawal(bilalawal);
        }
        if (typeof bilalakhir == 'string') {
            setBilalakhir(bilalakhir);
        }
        if (typeof khotib == 'string') {
            setKhotib(khotib);
        }
        if (typeof imam == 'string') {
            setImam(imam);
        }
    }, [no, tanggal, bilalawal, bilalakhir, khotib, imam],)

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch('/api/updatepetugashariraya', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    no: _no,
                    tanggal: _tanggal,
                    bilalawal: _bilalawal,
                    bilalakhir: _bilalakhir,
                    khotib: _khotib,
                    imam: _imam,

                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Update data sukses")

            Router.push('/admin/petugassholat/sholatjumat')
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (
        <>
            <Head>
                <title>Ubah Petugas Idhul Fitri/Adha</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div className='container mt-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Update Petugas Idhul Fitr/Adha </em></h3>
                </div>
            </div>
            <form onSubmit={submitHandler} className='container' style={{ maxWidth: '500px' }}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">No</label>
                    <input type="text" placeholder='No' className="form-control" id='no' value={_no} onChange={(e) => setNo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Tanggal</label>
                    <input type="text" placeholder='Tanggal' className="form-control" id='tanggal' value={_tanggal} onChange={(e) => setTanggal(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Bilal Awal</label>
                    <input type="text" placeholder='Bilal Awal' className="form-control" id='bilalawal' value={_bilalawal} onChange={(e) => setBilalawal(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Bilal Akhir</label>
                    <input type="text" placeholder='Bilal Akhir' className="form-control" id='bilalakhir' value={_bilalakhir} onChange={(e) => setBilalakhir(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Khotib</label>
                    <input type="text" placeholder='Khotib' className="form-control" id='khotib' value={_khotib} onChange={(e) => setKhotib(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Imam</label>
                    <input type="text" placeholder='Imam' className="form-control" id='imam' value={_imam} onChange={(e) => setImam(e.target.value)} />
                </div>


                <button type="submit" className="btn btn-primary w-100" >Update</button>


            </form>
        </>
    )
}

export default UpdatePetugasHariRaya;