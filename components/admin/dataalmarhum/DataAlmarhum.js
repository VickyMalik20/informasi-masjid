import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useDataalmarhum } from '../../../lib/dataalmarhum'
import Link from 'next/link'
import { mutate } from 'swr'
import Router from 'next/router'

const DataAlmarhum = () => {

    const [nama, setNama] = useState('');
    const [tanggalwafat, setTanggalwafat] = useState('');
    const [tanggallahir, setTanggallahir] = useState('');
    const [rt, setRt] = useState('');
    const [rw, setRw] = useState('');
    const [bin, setBin] = useState('');



    const { data, error } = useDataalmarhum()

    if (error) {
        return <div>error</div>
    }
    if (!data) {
        return <div>loading
        </div>
    }


    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/inputdataalmarhum", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nama, tanggalwafat, tanggallahir, rt, rw, bin
                }),
            })


            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert('Penambahan data almarhum sukses')

            Router.push('/admin/dataalmarhum/dataalmarhumadmin')
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (

        <>
            <Head>
                <title>Data Almarhum</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div className='mt-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Data Almarhum</em></h3>
                </div>
            </div>
            <div className="container">
                <div className='card'>
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Data Almarhum
                        </h4>
                        <button className="btn btn-danger mb-2" data-toggle="modal" data-target="#myModal2">Tambah Data Almarhum</button>
                    </div>
                    <div id="myModal2" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <p className="modal-title">Tambah data Almarhum<strong className='text-uppercase'></strong> </p>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={submitHandler} className='container' style={{ maxWidth: '500px' }}>
                                        <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Tambah Data Almarhum</em></h3>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Nama</label>
                                            <input type="text" placeholder='Nama' className="form-control text-dark" value={nama} onChange={(e) => setNama(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Tanggal Wafat</label>
                                            <input type="date" placeholder='Tanggal Wafat' className="form-control text-dark" value={tanggalwafat} onChange={(e) => setTanggalwafat(e.target.value)} />
                                        </div>                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Tanggal Lahir</label>
                                            <input type="date" placeholder='Tanggal Lahir' className="form-control text-dark" value={tanggallahir} onChange={(e) => setTanggallahir(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="sel1">RT</label>
                                            <select className="form-control" placeholder='RT' id="sel1" value={rt} onChange={(e) => setRt(e.target.value)}>
                                                <option>RT</option>
                                                <option>001</option>
                                                <option>002</option>
                                                <option>003</option>
                                                <option>004</option>
                                                <option>005</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="sel1">RW</label>
                                            <select className="form-control" placeholder='RW' id="sel1" value={rw} onChange={(e) => setRw(e.target.value)} >
                                                <option>RW</option>
                                                <option>001</option>
                                                <option>002</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">BIN</label>
                                            <input type="text" placeholder='BIN' className="form-control text-dark" id='dzuhur' value={bin} onChange={(e) => setBin(e.target.value)} />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100" >Simpan</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{ backgroundColor: '#5F6F94' }}>
                        <div className='table-responsive'>
                            <table className="table">
                                <thead>
                                    <tr className='text-center' style={{ backgroundColor: '#97D2EC' }}>
                                        <th scope="col">No</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Tanggal Wafat</th>
                                        <th scope="col">Tanggal Lahir</th>
                                        <th scope="col">RT</th>
                                        <th scope="col">RW</th>
                                        <th scope="col">Bin</th>
                                        <th scope="col">Hari Ke-</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((alm, idx) => (
                                        <tr className='text-center' style={{ backgroundColor: '#FEF5AC' }} key={idx}>
                                            <th scope="row">{alm.no}</th>
                                            <td>{alm.nama}</td>
                                            <td>{alm.tanggalwafat}</td>
                                            <td>{alm.tanggallahir}</td>
                                            <td>{alm.rt}</td>
                                            <td>{alm.rw}</td>
                                            <td>{alm.bin}</td>
                                            <td></td>
                                            <td>
                                                <div className='justify-content-between'>
                                                    <Link href={`/admin/dataalmarhum/updatedataalmarhum?no=${alm.no}&nama=${alm.nama}&tanggalwafat=${alm.tanggalwafat}&tanggallahir=${alm.tanggallahir}&rt=${alm.rt}&rw=${alm.rw}&bin=${alm.bin}`}
                                                        legacyBehavior id='link' >
                                                        <button className="btn btn-primary" >Edit</button>
                                                    </Link>
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

export default DataAlmarhum;