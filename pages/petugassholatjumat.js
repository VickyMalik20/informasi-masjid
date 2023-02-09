import React from 'react'
import { usePetugasJumat } from '../lib/petugassholatjumat'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'

const Petugassholatjumat = () => {
    const { data, error } = usePetugasJumat()

    if (error) {
        return <div>error</div>
    }
    if (!data) {
        return <div>loading
        </div>
    }
    console.log(data);
    return (
        <>
            <Head>
                <title>Petugas Sholat Jum'at</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className="container mt-5 mb-5">
                <div className="card">
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Petugas Sholat Jumat
                        </h4>
                    </div>
                    {data.map((ptg, idx) => (
                        <div key={idx} className="card-body" style={{ backgroundColor: '#5F6F94' }}>
                            <p className='text-center text-light'><span className="tanggal" >Jum'at, {ptg.tanggal}</span></p>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                    Bilal Awal
                                    <span className="badge text-center ">{ptg.bilalawal}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                    Bilal Akhir
                                    <span className="badge ">{ptg.bilalakhir}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                    Khotib
                                    <span className="badge ">{ptg.khotib}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FEF5AC' }}>
                                    Imam
                                    <span className="badge ">{ptg.imam}</span>
                                </li>
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
            <Footer />
        </>

    )
}

export default Petugassholatjumat;