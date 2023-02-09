import Link from 'next/link';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DetailKegiatan = () => {
    const [_id, setId] = useState('');
    const [_judul, setJudul] = useState('');
    const [_tanggal, setTanggal] = useState('')
    const [_waktumulai, setWaktumulai] = useState('');
    const [_waktuselesai, setWaktuselesai] = useState('');
    const [_lokasi, setLokasi] = useState('');
    const [_deskripsi, setDeskripsi] = useState('');
    const [_foto, setFoto] = useState(null);


    const router = useRouter();
    const { id, judul, tanggal, waktumulai, waktuselesai, lokasi, deskripsi, foto } = router.query;

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


    return (
        <>
            <Head>
                <title> Detail Kegiatan</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className="container mt-3 mb-3">
                <div className="card">
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Detail Kegiatan
                        </h4>
                    </div>
                    <div className="card-body" style={{ backgroundColor: '#5F6F94' }}>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Id
                                <span className="text-center " id='id'>{_id}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Judul
                                <span className="text-center" id='judul' >{_judul}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Tanggal
                                <span className="text-center" id='tanggal' >{_tanggal}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Waktu Mulai
                                <span className="text-center" id='waktumulai'>{_waktumulai}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Waktu Selesai
                                <span className="text-center" id='waktuselesai' >{_waktuselesai}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Lokasi
                                <span className="text-center" id='lokasi' >{_lokasi}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Deskripsi
                                <span className="text-center" id='deskripsi' >{_deskripsi}</span>
                            </li>
                        </ul>
                        <Link href='/kegiatan'
                            legacyBehavior id='link' >
                            <button className="btn btn-primary mt-3"  > <i className="fa fa-arrow-left" aria-hidden='true' ></i> Kembali</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailKegiatan;