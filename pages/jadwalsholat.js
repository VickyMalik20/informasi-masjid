import Head from 'next/head'
import React from 'react'
import { useDataJadwalSholat } from '../lib/jadwalsholat'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Jadwalsholatp = () => {
    const { data, error } = useDataJadwalSholat()

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
                <title>Jadwal Sholat</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className='container py-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: 'white' }}>
                    <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Jadwal Sholat</em></h3>
                    <p className='lead' style={{ color: 'green' }}>Mari Sholat Berjama'ah</p>
                    <p className="lead">Dari Abi Darda` radhiyallahu ‘anhu bahwa Rasulullah shallallahu ‘alaihi wasallam bersabda,"Tidaklah 3 orang yang tinggal di suatu kampung atau pelosok tapi tidak melakukan shalat jamaah, kecuali syetan telah menguasai mereka.
                        Hendaklah kalian berjamaah, sebab srigala itu memakan domba yang lepas dari kawanannya". (HR Abu Daud 547 dan Nasai 2/106 dengan sanad yang hasan)</p>
                </div>
            </div>
            <div className="container mt-3">
                <h2><span style={{ color: 'orange' }}>Jadwal Sholat</span> Singojuruh</h2>
                <p>Per Satu Bulan, Jadwal akan berubah setiap bulan-nya</p>
                <div className='table-responsive'>
                    <table className="table table-borderd">
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: 'green' }}>Bulan</th>
                                <th scope="col" style={{ color: 'green' }}>Hari/Tanggal</th>
                                <th scope="col" style={{ color: 'green' }}>Imsyak</th>
                                <th scope="col" style={{ color: 'green' }}>Subuh</th>
                                <th scope="col" style={{ color: 'green' }}>Terbit</th>
                                <th scope="col" style={{ color: 'green' }}>Dzuhur</th>
                                <th scope="col" style={{ color: 'green' }}>Ashar</th>
                                <th scope="col" style={{ color: 'green' }}>Maghrib</th>
                                <th scope="col" style={{ color: 'green' }}>Isya'</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((jdw, idx) => (
                                <tr key={idx}>
                                    <th scope="row" style={{ color: 'orange' }}>{jdw.bulan}</th>
                                    <th scope="row">{jdw.tanggal}</th>
                                    <td>{jdw.imsyak}</td>
                                    <td>{jdw.subuh}</td>
                                    <td>{jdw.terbit}</td>
                                    <td>{jdw.dzuhur}</td>
                                    <td>{jdw.ashar}</td>
                                    <td>{jdw.maghrib}</td>
                                    <td>{jdw.isya}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Jadwalsholatp;