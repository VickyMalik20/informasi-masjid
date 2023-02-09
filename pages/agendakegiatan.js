import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const agendakegiatan = () => {
    return (
        <>
            <Head>
                <title>Agenda Kegiatan</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <Footer />
        </>

    )
}

export default agendakegiatan