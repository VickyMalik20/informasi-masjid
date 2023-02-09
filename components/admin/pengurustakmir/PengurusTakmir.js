import React, { useState } from 'react'
import Head from 'next/head'
import { usePengurusTakmir } from '../../../lib/pengurustakmir'
import Link from 'next/link'
import { mutate } from 'swr'
import Router from 'next/router'

const Pengurustakmir = () => {
    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [tanggallahir, setTanggallahir] = useState('');
    const [alamat, setAlamat] = useState('');
    const [jabatan, setJabatan] = useState('');
    const [foto, setFoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');

    const { data, error } = usePengurusTakmir()

    if (error) {
        return <div>error</div>
    }
    if (!data) {
        return <div>loading
        </div>
    }

    async function hapusPengurus(id) {
        let res = await fetch(`/api/hapuspengurus?id=${id}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapuspengurus')
        alert('Pengurus telah dihapus')
        Router.push('/admin/pengurustakmir/pengurustakmir')

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
            const res = await fetch("http://localhost:3000/api/inputpengurustakmir", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id, nama, tanggallahir, alamat, jabatan, foto
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert('Penambahan jadwal sukses')

            Router.push('/admin/pengurustakmir/pengurustakmir')
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (

        <>
            <Head>
                <title>Pengurus Takmir</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div className='mt-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Pengurus Takmir</em></h3>
                </div>
            </div>
            <div className="container">
                <div className='card'>
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Pengurus Takmir
                        </h4>
                        <button className="btn btn-danger mb-2" data-toggle="modal" data-target="#myModal2">Tambah Pengurus Takmir</button>
                    </div>
                    <div id="myModal2" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <p className="modal-title">Tambah Pengurus Takmir<strong className='text-uppercase'></strong> </p>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={submitHandler} className='container' style={{ maxWidth: '500px' }}>
                                        <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Tambah Pengurus Takmir</em></h3>
                                        <div className='form-group text-center'>
                                            <label placeholder='Upload Gambar' htmlFor='uploadGambar'>
                                                <img className='rounded-circle' src={foto} alt="Pilih foto" style={{ width: '100px', height: '100px' }}></img>
                                            </label>
                                            <input type='file' id='uploadGambar' style={{ display: "none" }} onChange={onSelectImage} ></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">id</label>
                                            <input type="text" placeholder='id' className="form-control text-dark" id='id' value={id} onChange={(e) => setId(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Nama</label>
                                            <input type="text" placeholder='Nama' className="form-control text-dark" id='nama' value={nama} onChange={(e) => setNama(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Tanggal lahir</label>
                                            <input type="text" placeholder='Tanggal lahir' className="form-control text-dark" id='tanggallahir' value={tanggallahir} onChange={(e) => setTanggallahir(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Alamat</label>
                                            <input type="text" placeholder='Alamat' className="form-control text-dark" id='alamat' value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Jabatan</label>
                                            <input type="text" placeholder='Jabatan' className="form-control text-dark" id='jabatan' value={jabatan} onChange={(e) => setJabatan(e.target.value)} />
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
                                        <th scope="col">Nama</th>
                                        <th scope="col">Tanggal Lahir</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Jabatan</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((prs, idx) => (
                                        <tr className='text-center' style={{ backgroundColor: '#FEF5AC' }} key={idx}>
                                            <th scope="row">{prs.id}</th>
                                            <td>
                                                <img className='rounded-circle' src={prs.foto} style={{ width: '100px', height: '100px' }}></img>
                                            </td>
                                            <td>{prs.nama}</td>
                                            <td>{prs.tanggallahir}</td>
                                            <td>{prs.alamat}</td>
                                            <td>{prs.jabatan}</td>
                                            <td>
                                                <div className='justify-content-between'>
                                                    <Link href={`/admin/pengurustakmir/updatepengurus?id=${prs.id}&foto=${prs.foto}&nama=${prs.nama}&tanggallahir=${prs.tanggallahir}&alamat=${prs.alamat}&jabatan=${prs.jabatan}`}
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
                                                                    <button type="button" className="btn btn-primary" data-dismiss="modal" value={prs.id} onClick={(e) => hapusPengurus(e.target.value)} >Hapus Data</button>
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

export default Pengurustakmir;