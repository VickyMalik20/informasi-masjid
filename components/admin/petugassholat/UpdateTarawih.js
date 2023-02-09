import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const UpdateTarawih = () => {

    const [_no, setNo] = useState('');
    const [_malam, setMalam] = useState('');
    const [_imam, setImam] = useState('');
    const [_bilal, setBilal] = useState('');

    const router = useRouter();
    const { no, malam, imam, bilal } = router.query;

    useEffect(() => {

        if (typeof no == 'string') {
            setNo(no);
        }
        if (typeof malam == 'string') {
            setMalam(malam);
        }
        if (typeof imam == 'string') {
            setImam(imam);
        }
        if (typeof bilal == 'string') {
            setBilal(bilal);
        }
    }, [no, malam, imam, bilal],)

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch('/api/updatetarawih', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    no: _no,
                    malam: _malam,
                    imam: _imam,
                    bilal: _bilal,

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
                <title>Ubah Petugas Jum'at</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div className=' mt-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Update Petugas Sholat Tarawih</em></h3>
                </div>
            </div>
            <form onSubmit={submitHandler} className='container' style={{ maxWidth: '500px' }}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">No</label>
                    <input type="text" placeholder='No' className="form-control" id='no' value={_no} onChange={(e) => setNo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Malam</label>
                    <input type="text" placeholder='Malam' className="form-control" id='malam' value={_malam} onChange={(e) => setMalam(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Imam</label>
                    <input type="text" placeholder='Imam' className="form-control" id='imam' value={_imam} onChange={(e) => setImam(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Bilal</label>
                    <input type="text" placeholder='Bilal' className="form-control" id='bilal' value={_bilal} onChange={(e) => setBilal(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary w-100" >Update</button>


            </form>
        </>
    )
}

export default UpdateTarawih;