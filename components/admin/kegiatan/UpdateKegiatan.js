
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const UpdateKegiatan = () => {
    const [_id, setId] = useState('');
    const [_judul, setJudul] = useState('');
    const [_tanggal, setTanggal] = useState('')
    const [_waktumulai, setWaktumulai] = useState('');
    const [_waktuselesai, setWaktuselesai] = useState('');
    const [_lokasi, setLokasi] = useState('');
    const [_deskripsi, setDeskripsi] = useState('');
    const [_foto, setFoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState('')
    const [file, setFile] = useState('');

    const router = useRouter();
    const { id, judul, tanggal, waktumulai, waktuselesai, lokasi, deskripsi, foto } = router.query;

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
        if (typeof judul == 'string') {
            setJudul(judul);
        }
        if (typeof tanggal == 'string') {
            setTanggal(tanggal);
        }
        if (typeof waktumulai == 'string') {
            setWaktumulai(waktumulai);
        }
        if (typeof waktuselesai == 'string') {
            setWaktuselesai(waktuselesai);
        }
        if (typeof lokasi == 'string') {
            setLokasi(lokasi);
        }
        if (typeof deskripsi == 'string') {
            setDeskripsi(deskripsi);
        }
        if (typeof foto == 'string') {
            setFoto(foto);
        }

    }, [id, judul, tanggal, waktumulai, waktuselesai, lokasi, deskripsi, foto],)

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch('/api/updatekegiatan', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: _id,
                    judul: _judul,
                    tanggal: _tanggal,
                    waktumulai: _waktumulai,
                    waktuselesai: _waktuselesai,
                    lokasi: _lokasi,
                    deskripsi: _deskripsi,
                    foto: _foto
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Update kegiatan sukses")

            Router.push('/admin/kegiatan/kegiatan')
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
                        <label htmlFor="exampleInputPassword1">Judul</label>
                        <input type="text" placeholder='Judul' className="form-control" id='Judul' value={_judul} onChange={(e) => setJudul(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tanggal </label>
                        <input type="text" placeholder='Tanggal ' className="form-control" id='tanggal' value={_tanggal} onChange={(e) => setTanggal(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Waktu Mulai</label>
                        <input type="text" placeholder='Waktu Mulai' className="form-control" id='Waktu Mulai' value={_waktumulai} onChange={(e) => setWaktumulai(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Waktu Selesai</label>
                        <input type="text" placeholder='Waktu Selesai' className="form-control" id='Waktu selesai' value={_waktuselesai} onChange={(e) => setWaktuselesai(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Lokasi</label>
                        <input type="text" placeholder='Lokasi' className="form-control" id='Lokasi' value={_lokasi} onChange={(e) => setLokasi(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Deskripsi</label>
                        <input type="text" placeholder='Deskripsi' className="form-control" id='Deskripsi' value={_deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary w-100" >Update</button>


                </form>
            </div>

        </>
    )
}

export default UpdateKegiatan;