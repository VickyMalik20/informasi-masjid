import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
const about = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className="card container mt-5 mb-5">
                <h5 className="card-header" style={{ color: 'orange' }}><em>About</em></h5>
                <div className="card-body">
                    <p className="card-text">Sistem informasi adalah suatu sistem di dalam organisasi yang mempertemukan kebutuhan pengelolaan transaksi harian, mendukung operasi,
                        bersifat manajerial, dan kegiatan strategi dari suatu organisasi dan menyediakan pihak luar tertentu dengan laporan-laporan yang dibutuhkan.
                        Sistem informasi masjid ini dibuat untuk memenuhi kebutuhan/keperluan takmir dalam hal menyampaikan informasi seputar agenda masjid dan lain sebagainya kepada masyarakat agar lebih efisien, mudah, dan ceoat.
                        Diharapkan, program ini dapat bermanfaat bagi masyarakat seperti yang diharapkan.</p>
                </div>
            </div>

            <Footer />

        </>

    )
}

export default about
