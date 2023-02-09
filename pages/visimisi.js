import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
const visimisi = () => {
    return (
        <>
            <Head>
                <title>Visi dan Misi</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className='container py-5'>
                <div className="jumbotron" style={{ backgroundColor: 'white' }}>
                    <h3 className="display-12"><em>Visi</em></h3>
                    <p className="lead">Menjadikan Masjid sebagai sarana untuk menyatukan dan memajukan umat menuju kesejahteraan dan kemandirian muslim di lingkungan Dusun Kunir</p>
                    <hr className="my-4" />
                    <h3 className="display-12"><em>Misi</em></h3>
                    <p className="lead" >
                        <i className="fas fa-angle-double-right mr-1 " aria-hidden='true' style={{ color: 'orange' }}></i>
                        Meningkatkan kualitas pelayanan Ibadah yang sesuai syariah berhaluan ahlus sunah wal jama’ah
                    </p>
                    <p className="lead" >
                        <i className="fas fa-angle-double-right mr-1 " aria-hidden='true' style={{ color: 'orange' }}></i>
                        Menerapkan pengelolaan masjid yang modern dan wawasan lingkungan
                    </p>
                    <p className="lead" >
                        <i className="fas fa-angle-double-right mr-1 " aria-hidden='true' style={{ color: 'orange' }}></i>
                        Meningkatkan kesejahteraan masyarakat dan menumbuhkan kepedulian sosial
                    </p>
                    <p className="lead" >
                        <i className="fas fa-angle-double-right mr-1 " aria-hidden='true' style={{ color: 'orange' }}></i>
                        Menyelenggarakan manajemen masjid yang modern, akuntabel, amanah, dan Profesional (MANTAP).
                    </p>
                </div>
            </div>
            <Footer />

        </>

    )
}

export default visimisi
