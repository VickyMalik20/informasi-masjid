import React from 'react'
import Head from 'next/head'
import { useKegiatan } from '../lib/kegiatan'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
const kegiatan = () => {
    const { data, error } = useKegiatan()

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
                <title>Kegiatan</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className='mt-3'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Kegiatan</em></h3>
                </div>
            </div>
            <div className='container py-5'>
                <div className='row'>
                    {data.map((kg, idx) => (
                        <div className='col-lg-4 col-md-6 col-sm-4 mb-5' key={idx}>
                            <div className="card-deck">
                                <div className="card">
                                    <img className="card-img-top" src={kg.foto} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{kg.judul}</h5>
                                        <p className="card-text">{kg.deskripsi}</p>
                                        <p className="card-text">Rutinan yang akan datang pada tanggal "{kg.tanggal}"</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link href={`/user/detail-kegiatan?id=${kg.id}&judul=${kg.judul}&tanggal=${kg.tanggal}&waktumulai=${kg.waktumulai}&waktuselesai=${kg.waktuselesai}&lokasi=${kg.lokasi}&deskripsi=${kg.deskripsi}`}
                                            legacyBehavior id='link' >
                                            <button className="btn btn-primary" >Detail Info</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>


    )
}

export default kegiatan;