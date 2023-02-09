import React, { useState } from 'react'
import Head from 'next/head'
import { useKegiatan } from '../../../lib/kegiatan'
import Link from 'next/link'
import { mutate } from 'swr'
import Router from 'next/router'

const Kegiatan = () => {
    const [id, setId] = useState('');
    const [judul, setJudul] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [waktumulai, setWaktumulai] = useState('');
    const [waktuselesai, setWaktuselesai] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [deskripsi, setDeskripsi] = useState('')
    const [foto, setFoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');

    const { data, error } = useKegiatan()

    if (error) {
        return <div>error</div>
    }
    if (!data) {
        return <div>loading
        </div>
    }

    async function hapusKegiatan(id) {
        let res = await fetch(`/api/hapuskegiatan?id=${id}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapuskegiatan')
        alert('Kegiatan telah dihapus')
        Router.push('/admin/kegiatan/kegiatan')

    }

    const onSelectImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        const _file = e.target.files[0];
        const render = new FileReader()
        render.onload = function () {
            setFile(_file);
            setFoto(render.result);
        }
        render.readAsDataURL(_file)
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/inputkegiatan", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id, judul, tanggal, waktumulai, waktuselesai, deskripsi, lokasi, foto
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert('Penambahan kegiatan sukses')

            Router.push('/admin/kegiatan/kegiatan')
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (

        <>
            <Head>
                <title>Kegiatan</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div className='mt-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Kegiatan</em></h3>
                </div>
            </div>
            <div>
                <div className='card'>
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Kegiatan
                        </h4>
                        <button className="btn btn-danger mb-2" data-toggle="modal" data-target="#myModal2">Tambah Kegiatan</button>
                    </div>
                    <div id="myModal2" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <p className="modal-title">Tambah Kegiatan<strong className='text-uppercase'></strong> </p>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={submitHandler} className='container' style={{ maxWidth: '500px' }}>
                                        <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Tambah Kegiatan</em></h3>
                                        <div className='form-group text-center'>
                                            <label placeholder='Upload Gambar' htmlFor='uploadGambar'>
                                                <img className='rounded-circle' src={foto} alt="Pilih foto" style={{ width: '100px', height: '100px' }}></img>
                                            </label>
                                            <input type='file' id='uploadGambar' style={{ display: "none" }} onChange={onSelectImage} ></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Id</label>
                                            <input type="text" placeholder='id' className="form-control text-dark" id='id' value={id} onChange={(e) => setId(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Judul</label>
                                            <input type="text" placeholder='Judul' className="form-control text-dark" id='Judul' value={judul} onChange={(e) => setJudul(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Tanggal</label>
                                            <input type="text" placeholder='Tanggal' className="form-control text-dark" id='tanggal' value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Waktu Mulai</label>
                                            <input type="text" placeholder='Waktu Mulai' className="form-control text-dark" id='waktumulai' value={waktumulai} onChange={(e) => setWaktumulai(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Waktu selesai</label>
                                            <input type="text" placeholder='Waktu selesai' className="form-control text-dark" id='waktuselesai' value={waktuselesai} onChange={(e) => setWaktuselesai(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Lokasi</label>
                                            <input type="text" placeholder='Lokasi' className="form-control text-dark" id='Lokasi' value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Deskripsi</label>
                                            <input type="text" placeholder='Deskripsi' className="form-control text-dark" id='deskripsi' value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
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
                                        <th scope="col">Id</th>
                                        <th scope="col">Foto</th>
                                        <th scope="col">Judul</th>
                                        <th scope="col">Tanggal</th>
                                        <th scope="col">Waktu Mulai</th>
                                        <th scope="col">Waltu Selesai</th>
                                        <th scope="col">Lokasi</th>
                                        <th scope="col">Deskripsi</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((kg, idx) => (
                                        <tr className='text-center' style={{ backgroundColor: '#FEF5AC' }} key={idx}>
                                            <th scope="row">{kg.id}</th>
                                            <td>
                                                <img className='rounded-circle' src={kg.foto} style={{ width: '100px', height: '100px' }}></img>
                                            </td>
                                            <td>{kg.judul}</td>
                                            <td>{kg.tanggal}</td>
                                            <td>{kg.waktumulai}</td>
                                            <td>{kg.waktuselesai}</td>
                                            <td>{kg.lokasi}</td>
                                            <td>{kg.deskripsi}</td>
                                            <td>
                                                <div className='justify-content-between'>
                                                    <Link href={`/admin/kegiatan/updatekegiatan?id=${kg.id}&foto=${kg.foto}&judul=${kg.judul}&tanggal=${kg.tanggal}&waktumulai=${kg.waktumulai}&waktuselesai=${kg.waktuselesai}&lokasi=${kg.lokasi}&deskripsi=${kg.deskripsi}`}
                                                        legacyBehavior id='link' >
                                                        <button className="btn btn-primary" >Edit</button>
                                                    </Link>
                                                    <button className="btn btn-danger type=" data-toggle="modal" data-target="#myModal">Hapus</button>
                                                    <div id="myModal" className="modal fade" role="dialog">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <p className="modal-title">Anda yakin menghapus data pengurus ini ??</p>
                                                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <p>Data yang dihapus tidak bisa dikembalikan kembali..!!</p>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-primary" data-dismiss="modal" value={kg.id} onClick={(e) => hapusKegiatan(e.target.value)} >Hapus Data</button>
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

export default Kegiatan;