import React, { useState } from 'react'
import { usePetugasTarawih } from '../../../lib/petugastarawih';
import Head from 'next/head';
import Link from 'next/link'
import { mutate } from 'swr'
import Router from 'next/router'

const Petugastarawih = () => {
    const [no, setNo] = useState('')
    const [malam, setMalam] = useState('');
    const [imam, setImam] = useState('');
    const [bilal, setBilal] = useState('');


    const { data, error } = usePetugasTarawih()

    if (error) {
        return <div>error</div>
    }
    if (!data) {
        return <div>loading
        </div>
    }
    console.log(data);


    async function hapusPetugasTarawih(no) {
        let res = await fetch(`/api/hapustarawih?no=${no}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapustarawih')
        alert('Jadwal telah dihapus')
        Router.push('/admin/petugassholat/sholatjumat')

    }
    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/inputtarawih", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    no, malam, imam, bilal
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert('Penambahan jadwal sukses')

            Router.push('/admin/petugassholat/sholatjumat')
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (
        <>
            <Head>
                <title>Petugas Sholat Tarawih</title>
                <link rel="icon" href="/lg.png" />
            </Head>

            <div className="container mt-5 mb-5">
                <div className="card">
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Petugas Sholat Tarawih
                        </h4>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#myModal1">Tambah Petugas Tarawih</button>
                        <div id="myModal1" className="modal fade" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">Tambah Jadwal Sholat <strong className='text-uppercase'></strong></p>
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={submitHandler} className='container ' style={{ maxWidth: '500px' }}>
                                            <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Tambah Petugas Tarawih</em></h3>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">No</label>
                                                <input type="text" placeholder='No Ke-' className="form-control text-dark" id='no' value={no} onChange={(e) => setNo(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Malam</label>
                                                <input type="text" placeholder='Malam Ke-' className="form-control text-dark" id='malam' value={malam} onChange={(e) => setMalam(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Imam</label>
                                                <input type="text" placeholder='Imam' className="form-control text-dark" id='imam' value={imam} onChange={(e) => setImam(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Bilal</label>
                                                <input type="text" placeholder='Bilal' className="form-control text-dark" id='bilal' value={bilal} onChange={(e) => setBilal(e.target.value)} />
                                            </div>
                                            <button type="submit" className="btn btn-primary" >Tambah Petugas</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card-body" style={{ backgroundColor: '#5F6F94' }}>
                        <p className='text-center text-light'><span className="tanggal" >Jadwal Petugas Sholat Tarawih Tahun Ini</span></p>
                        <div className='table-responsive'>
                            <table className="table">
                                <thead>
                                    <tr className='text-center' style={{ backgroundColor: '#97D2EC' }}>
                                        <th scope="col">Malam</th>
                                        <th scope="col">Malam</th>
                                        <th scope="col">Imam</th>
                                        <th scope="col">Bilal</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((ptg, idx) => (
                                        <tr key={idx} className='text-center' style={{ backgroundColor: '#FEF5AC' }}>
                                            <th scope="row">{ptg.no}</th>
                                            <td>{ptg.malam}</td>
                                            <td>{ptg.imam}</td>
                                            <td>{ptg.bilal}</td>
                                            <td>
                                                <div>
                                                    <Link href={`/admin/petugassholat/updatetarawih?no=${ptg.no}&malam=${ptg.malam}&imam=${ptg.imam}&bilal=${ptg.bilal}`}
                                                        legacyBehavior id='link' >
                                                        <button className="btn btn-primary" >Edit</button>
                                                    </Link>
                                                    <button className="btn btn-danger" data-toggle="modal" data-target="#myModal">Hapus</button>
                                                    <div id="myModal" className="modal fade" role="dialog">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <p className="modal-title">Anda yakin menghapus petugas ini ?</p>
                                                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <p>Data yang dihapus tidak bisa dikembalikan kembali..!!</p>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <a type="button" className="btn btn-primary" data-dismiss="modal" value={ptg.no} onClick={(e) => hapusPetugasTarawih(e.target.value)} >Hapus Data</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default Petugastarawih;