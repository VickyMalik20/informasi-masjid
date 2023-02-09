import React from 'react'
import { usePetugasTarawih } from '../lib/petugastarawih';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';

const Petugastarawih = () => {
    const { data, error } = usePetugasTarawih()

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
                <title>Petugas Sholat Tarawih</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className="container mt-5 mb-5">
                <div className="card">
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Petugas Sholat Tarawih
                        </h4>
                    </div>

                    <div className="card-body" style={{ backgroundColor: '#5F6F94' }}>
                        <div className='table-responsive'>
                            <table className="table">
                                <thead>
                                    <tr className='text-center' style={{ backgroundColor: '#97D2EC' }}>
                                        <th scope="col">Malam</th>
                                        <th scope="col">Imam</th>
                                        <th scope="col">Bilal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((ptg, idx) => (
                                        <tr key={idx} className='text-center' style={{ backgroundColor: '#FEF5AC' }}>
                                            <th scope="row">{ptg.malam}</th>
                                            <td>{ptg.imam}</td>
                                            <td>{ptg.bilal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Petugastarawih;