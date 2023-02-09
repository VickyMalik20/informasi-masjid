import React from 'react'
import Head from 'next/head'
import { usePengurusTakmir } from '../lib/pengurustakmir'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
const pengurustakmir = () => {
    const { data, error } = usePengurusTakmir()

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
                <title>Pengurus Takmir</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className='mt-3'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Pengurus Takmir</em></h3>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {data.map((prs, idx) => (
                        <div className='col-lg-4 col-md-6 col-sm-4 mb-5' key={idx}>
                            <div className="card text-center" style={{ width: 280 }} >
                                <img className="card-img-top " src={prs.foto} alt="Card image" style={{ width: '100%', backgroundColor: '#25316D' }} />
                                <div className="card-body bg-warning">
                                    <p className="card-title text-center bg-dark text-light">{prs.nama}</p>
                                    <p className="card-text text-center">{prs.jabatan}</p>
                                    <Link href={`/user/detile-takmir?id=${prs.id}&nama=${prs.nama}&tanggallahir=${prs.tanggallahir}&alamat=${prs.alamat}&jabatan=${prs.jabatan}`}
                                        legacyBehavior id='link' >
                                        <button className="btn btn-primary" >Detail Info</button>
                                    </Link>
                                </div>
                            </div>
                            <br />
                        </div>))}
                </div>
            </div>
            <Footer />
        </>


    )
}

export default pengurustakmir;