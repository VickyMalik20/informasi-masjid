
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const UpdatePengurusTakmir = () => {
    const [_id, setId] = useState('');
    const [_nama, setNama] = useState('');
    const [_tanggallahir, setTanggallahir] = useState('');
    const [_alamat, setAlamat] = useState('');
    const [_jabatan, setJabatan] = useState('');
    const [_foto, setFoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState('')
    const [file, setFile] = useState('');

    const router = useRouter();
    const { id, nama, tanggallahir, alamat, jabatan, foto } = router.query;

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
    useEffect(() => {

        if (typeof id == 'string') {
            setId(id);
        }
        if (typeof nama == 'string') {
            setNama(nama);
        }
        if (typeof tanggallahir == 'string') {
            setTanggallahir(tanggallahir);
        }
        if (typeof alamat == 'string') {
            setAlamat(alamat);
        }
        if (typeof jabatan == 'string') {
            setJabatan(jabatan);
        }
        if (typeof foto == 'string') {
            setFoto(foto);
        }

    }, [id, nama, tanggallahir, alamat, jabatan, foto],)

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch('/api/updatepengurustakmir', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: _id,
                    nama: _nama,
                    tanggallahir: _tanggallahir,
                    alamat: _alamat,
                    jabatan: _jabatan,
                    foto: _foto
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Update data sukses")

            Router.push('/admin/pengurustakmir/pengurustakmir')
        } catch (e) {
            throw Error(e.message)
        }
    }


    return (
        <>
            <Head>
                <title>Ubah Data Pengurus Takmir</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div className='container mt-5'>
                <div className='container mt-5'>
                    <div className="jumbotron text-center" style={{ backgroundColor: '#f5f5f5' }}>
                        <h3 className="display-12" style={{ color: 'orange' }}><em>Edit Data Pengurus Takmir</em></h3>
                    </div>
                </div>
                <form onSubmit={submitHandler} className='container' style={{ maxWidth: '500px' }}>
                    <div className='form-group text-center'>
                        <label placeholder='Upload Gambar' htmlFor='uploadGambar'>
                            <img src={_foto} alt="Pilih foto" style={{ width: '200px', height: '200px' }}></img>
                        </label>
                        <input type='file' id='uploadGambar' style={{ display: "none" }} onChange={onSelectImage} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Id</label>
                        <input type="text" placeholder='Id' className="form-control" id='id' value={_id} onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Nama</label>
                        <input type="text" placeholder='Nama' className="form-control" id='nama' value={_nama} onChange={(e) => setNama(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tanggal Lahir</label>
                        <input type="text" placeholder='Tanggal Lahir' className="form-control" id='tanggallahir' value={_tanggallahir} onChange={(e) => setTanggallahir(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Alamat</label>
                        <input type="text" placeholder='Alamat' className="form-control" id='Alamat' value={_alamat} onChange={(e) => setAlamat(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Jabatan</label>
                        <input type="text" placeholder='Jabatan' className="form-control" id='Jabatan' value={_jabatan} onChange={(e) => setJabatan(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary w-100" >Update</button>


                </form>
            </div>

        </>
    )
}

export default UpdatePengurusTakmir;