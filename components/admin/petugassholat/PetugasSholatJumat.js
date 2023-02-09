import React from 'react'
import Head from 'next/head'
import { usePetugasJumat } from '../../../lib/petugassholatjumat'
import Link from 'next/link'
import Hariraya from '../../../pages/admin/petugassholat/hariraya'
import Tarawih from '../../../pages/admin/petugassholat/tarawih'
const PetugasSholatJumat = () => {
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
            <div className='mt-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Update Petugas Sholat</em></h3>
                </div>
            </div>
            <div className="container">
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
                            <Link href={`/admin/petugassholat/updatepetugasjumat?no=${ptg.no}&tanggal=${ptg.tanggal}&bilalawal=${ptg.bilalawal}&bilalakhir=${ptg.bilalakhir}&khotib=${ptg.khotib}&imam=${ptg.imam}`}
                                legacyBehavior id='link' >
                                <button className="btn btn-primary mt-3" >Edit Petugas Jum'at</button>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
            {/* <Tarawih />
            <Hariraya /> */}
        </>

    )
}

export default PetugasSholatJumat;