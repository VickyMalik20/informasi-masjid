
import Head from 'next/head'
import React, { useState } from 'react'
import { useDataJadwalSholat } from '../../../lib/jadwalsholat'
import Link from 'next/link'
import { mutate } from 'swr'
import Router from 'next/router'

const jadwalsholat = () => {

    const [bulan, setBulan] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [imsyak, setImsyak] = useState('');
    const [subuh, setSubuh] = useState('');
    const [terbit, setTerbit] = useState('');
    const [dzuhur, setDzuhur] = useState('');
    const [ashar, setAshar] = useState('');
    const [maghrib, setMaghrib] = useState('');
    const [isya, setIsya] = useState('');

    const { data, error } = useDataJadwalSholat()

    if (error) {
        return <div>error</div>
    }
    if (!data) {
        return <div>loading
        </div>
    }

    async function hapusJadwalSholat(tanggal) {
        let res = await fetch(`/api/hapusjadwalsholat?tanggal=${tanggal}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapusjadwalsholat')
        alert('Jadwal telah dihapus')
        Router.push('/admin/jadwalsholat/jadwalsholatadmin')

    }
    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/inputjadwalsholat", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bulan, tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert('Penambahan jadwal sukses')

            Router.push('/admin/jadwalsholat/jadwalsholatadmin')
        } catch (e) {
            throw Error(e.message)
        }
    }



    return (

        <>
            <Head>
                <title>Jadwal Sholat</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div className='container mt-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#f5f5f5' }}>
                    <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Jadwal Sholat</em></h3>
                </div>
            </div>
            <div className="container">
                <button className="btn btn-danger mb-5" data-toggle="modal" data-target="#myModal1">Tambah Jadwal Sholat</button>
                <div id="myModal1" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title"><i className="fas fa-plus"></i>Tambah Jadwal Sholat <strong className='text-uppercase'></strong></p>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={submitHandler} className='container ' style={{ maxWidth: '500px' }}>
                                    <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Tambah Jadwal Sholat</em></h3>
                                    <div className="form-group">
                                        <label htmlFor="sel1">Bulan</label>
                                        <select className="form-control" placeholder='RW' id="sel1" value={bulan} onChange={(e) => setBulan(e.target.value)}  >
                                            <option></option>
                                            <option>Januari</option>
                                            <option>Februari</option>
                                            <option>Maret</option>
                                            <option>April</option>
                                            <option>Mei</option>
                                            <option>Juli</option>
                                            <option>Agustus</option>
                                            <option>September</option>
                                            <option>Oktober</option>
                                            <option>November</option>
                                            <option>Desember</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Tanggal</label>
                                        <input type="text" placeholder='Tanggal' className="form-control text-dark" id='tanggal' value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Imsyak</label>
                                        <input type="text" placeholder='Imsyak' className="form-control text-dark" id='imsyak' value={imsyak} onChange={(e) => setImsyak(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Subuh</label>
                                        <input type="text" placeholder='Subuh' className="form-control text-dark" id='subuh' value={subuh} onChange={(e) => setSubuh(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Terbit</label>
                                        <input type="text" placeholder='Terbit' className="form-control text-dark" id='terbit' value={terbit} onChange={(e) => setTerbit(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Dzuhur</label>
                                        <input type="text" placeholder='Dzuhur' className="form-control text-dark" id='dzuhur' value={dzuhur} onChange={(e) => setDzuhur(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Ashar</label>
                                        <input type="text" placeholder='Ashar' className="form-control text-dark" id='ashar' value={ashar} onChange={(e) => setAshar(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Maghrib</label>
                                        <input type="text" placeholder='Maghrib' className="form-control text-dark" id='maghrib' value={maghrib} onChange={(e) => setMaghrib(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Isya</label>
                                        <input type="text" placeholder='Isya' className="form-control text-dark" id='isya' value={isya} onChange={(e) => setIsya(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" >Tambah Jadwal</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='table-responsive'>
                    <table className="table table-borderd">
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: 'green' }}>Bulan</th>
                                <th scope="col" style={{ color: 'green' }}>Hari/Tanggal</th>
                                <th scope="col" style={{ color: 'green' }}>Imsyak</th>
                                <th scope="col" style={{ color: 'green' }}>Subuh</th>
                                <th scope="col" style={{ color: 'green' }}>Terbit</th>
                                <th scope="col" style={{ color: 'green' }}>Dzuhur</th>
                                <th scope="col" style={{ color: 'green' }}>Ashar</th>
                                <th scope="col" style={{ color: 'green' }}>Maghrib</th>
                                <th scope="col" style={{ color: 'green' }}>Isya'</th>
                                <th scope="col" style={{ color: 'green' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((jdw, idx) => (
                                <tr key={idx}>
                                    <th scope="row" style={{ color: 'orange' }}>{jdw.bulan}</th>
                                    <th scope="row">{jdw.tanggal}</th>
                                    <td>{jdw.imsyak}</td>
                                    <td>{jdw.subuh}</td>
                                    <td>{jdw.terbit}</td>
                                    <td>{jdw.dzuhur}</td>
                                    <td>{jdw.ashar}</td>
                                    <td>{jdw.maghrib}</td>
                                    <td>{jdw.isya}</td>
                                    <td>
                                        <div className='d-flex justify-content-between'>
                                            <Link href={`/admin/jadwalsholat/updatejadwalsholat?bulan=${jdw.bulan}&tanggal=${jdw.tanggal}&imsyak=${jdw.imsyak}&subuh=${jdw.subuh}&terbit=${jdw.terbit}&dzuhur=${jdw.dzuhur}&ashar=${jdw.ashar}&maghrib=${jdw.maghrib}&isya=${jdw.isya}`}
                                                legacyBehavior id='link' >
                                                <button className="btn btn-primary" >Edit</button>
                                            </Link>
                                            <button className="btn btn-danger " data-toggle="modal" data-target="#myModal">Hapus</button>
                                            <div id="myModal" className="modal fade" role="dialog">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <p className="modal-title">Anda yakin menghapus jadwal sholat ini ?? </p>
                                                            <button type="button" className="close" data-dismiss="modal">×</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Data yang dihapus tidak bisa dikembalikan kembali..!!</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-primary" data-dismiss="modal" value={jdw.tanggal} onClick={(e) => hapusJadwalSholat(e.target.value)} >Hapus Data</button>
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


        </>
    )
}

export default jadwalsholat;