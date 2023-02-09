import React from 'react'
import Head from 'next/head'
import { usePetugasHariRaya } from '../../../lib/petugassholathariraya'
import Link from 'next/link'
const PetugasHariRaya = () => {
    const { data, error } = usePetugasHariRaya()

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
                <title>Petugas Sholat</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div className="container mt-3 mb-5">
                <div className="card">
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Petugas Sholat Idhul Fitri/Adha
                        </h4>
                    </div>
                    {data.map((ptg, idx) => (
                        <div key={idx} className="card-body" style={{ backgroundColor: '#5F6F94' }}>
                            <p className='text-center text-light'><span className="tanggal" >Idhul Fitri/Adha {ptg.tanggal}</span></p>
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
                            <Link href={`/admin/petugassholat/updatehariraya?no=${ptg.no}&tanggal=${ptg.tanggal}&bilalawal=${ptg.bilalawal}&bilalakhir=${ptg.bilalakhir}&khotib=${ptg.khotib}&imam=${ptg.imam}`}
                                legacyBehavior id='link' >
                                <button className="btn btn-primary mt-3" >Edit Petugas Hari Raya</button>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </>

    )
}

export default PetugasHariRaya;