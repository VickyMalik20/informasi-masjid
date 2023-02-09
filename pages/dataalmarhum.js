import React, { useState } from 'react'
import Head from 'next/head'
import { useDataalmarhum } from '../lib/dataalmarhum'
import Header from '../components/Header'
import Footer from '../components/Footer'

const dataalmarhum = () => {
    const { data, error } = useDataalmarhum()

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
                <title>Data Almarhum</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className='mt-3'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Data Almarhum</em></h3>
                </div>
            </div>
            <div className='container '>
                <div className="text-center" style={{ backgroundColor: 'white' }}>
                    <p className='lead' style={{ color: 'green' }}>Ingat !! Kematian pasti datang menghampiri kita</p>
                    <p className="lead">
                        Menurut Faidh Kasyani dalam buku Etika Islam: Menuju Evolusi Diri, dengan mengingat kematian, seorang muslim akan bersikap zuhud dan menjauhi keburukan.
                        Salah satu ayat Al-Qur'an yang membahas tentang kematian ada dalam surah An Nisa. Allah SWT berfirman:
                    </p>
                    <p className='fw-bold'> اَيْنَمَا تَكُوْنُوْا يُدْرِكْكُّمُ الْمَوْتُ وَلَوْ كُنْتُمْ فِيْ بُرُوْجٍ مُّشَيَّدَةٍ ۗ وَاِنْ تُصِبْهُمْ حَسَنَةٌ يَّقُوْلُوْا هٰذِهٖ مِنْ عِنْدِ اللّٰهِ ۚ وَاِنْ تُصِبْهُمْ سَيِّئَةٌ يَّقُوْلُوْا هٰذِهٖ مِنْ عِنْدِكَ ۗ قُلْ كُلٌّ مِّنْ عِنْدِ اللّٰهِ ۗ فَمَالِ هٰٓؤُلَاۤءِ الْقَوْمِ لَا يَكَادُوْنَ يَفْقَهُوْنَ حَدِيْثًا</p>
                    <p>
                        Artinya: “Di mana pun kamu berada, kematian akan mendapatkan kamu, kendati pun kamu berada di dalam benteng yang tinggi dan kukuh.
                        Jika mereka memperoleh kebaikan, mereka mengatakan: Ini dari sisi Allah. Dan jika mereka ditimpa suatu keburukan, mereka mengatakan:
                    </p>
                </div>
            </div>
            <div className="container">
                <div className='card'>
                    <div className="card-header " style={{ backgroundColor: '#25316D' }}>
                        <h4 className="text-center" style={{ color: 'white' }}>
                            Data Almarhum
                        </h4>
                    </div>
                    <div className="card-body" style={{ backgroundColor: '#5F6F94' }}>
                        <div className='table-responsive'>
                            <table className="table" id="example">
                                <thead>
                                    <tr className='text-center' style={{ backgroundColor: '#97D2EC' }}>
                                        <th scope="col">No</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Tanggal Wafat</th>
                                        <th scope="col">Tanggal Wafat</th>
                                        <th scope="col">RT</th>
                                        <th scope="col">RW</th>
                                        <th scope="col">Bin</th>
                                    </tr>
                                </thead>
                                <tbody id='table'>
                                    {data.map((alm, idx) => (
                                        <tr className='text-center' style={{ backgroundColor: '#FEF5AC' }} key={idx}>
                                            <th scope="row">{alm.no}</th>
                                            <td>{alm.nama}</td>
                                            <td>{alm.tanggalwafat}</td>
                                            <td>{alm.tanggallahir}</td>
                                            <td>{alm.rt}</td>
                                            <td>{alm.rw}</td>
                                            <td>{alm.bin}</td>
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

export default dataalmarhum;