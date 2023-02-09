import Link from 'next/link';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DetailTakmir = () => {
    const [_id, setId] = useState('');
    const [_nama, setNama] = useState('');
    const [_tanggallahir, setTanggallahir] = useState('');
    const [_alamat, setAlamat] = useState('');
    const [_jabatan, setJabatan] = useState('');
    const [_foto, setFoto] = useState(null);

    const router = useRouter();
    const { id, nama, tanggallahir, alamat, jabatan, foto } = router.query;

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


    return (
        <>
            <Head>
                <title> Pengurus Takmir</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className="container mt-3 mb-3">
                <div className="card">
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Detail Pengurus Admin
                        </h4>
                    </div>
                    <div className="card-body" style={{ backgroundColor: '#5F6F94' }}>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Id
                                <span className="text-center " id='id'>{_id}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Nama
                                <span className="text-center" id='nama' >{_nama}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Tanggal Lahir
                                <span className="text-center" id='tanggallahir' >{_tanggallahir}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Alamat
                                <span className="text-center" id='Alamat'>{_alamat}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                Jabatan
                                <span className="text-center" id='Jabatan' >{_jabatan}</span>
                            </li>
                        </ul>
                        <Link href='/pengurustakmir'
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

export default DetailTakmir;