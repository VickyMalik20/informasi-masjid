//@ts-check

import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Navbar brand */}
                    <Link legacyBehavior id='link' href="/">
                        <a className="navbar-brand">
                            <img src="/masjid.png" height='50' loading="lazy" />
                        </a>
                    </Link>
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" aria-hidden='true'></i>
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Left links */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" legacyBehavior id='link'>
                                    <a className="nav-link" >Home</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-expanded="false">Profil</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><Link href="/visimisi" legacyBehavior id='link'>
                                        <a className="dropdown-item" >Visi dan Misi</a>
                                    </Link></li>

                                    <li><Link href="/pengurustakmir" legacyBehavior id='link'>
                                        <a className="dropdown-item" >Pengurus Takmir</a>
                                    </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-expanded="false">Informasi</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><Link href="/dataalmarhum" legacyBehavior id='link'>
                                        <a className="dropdown-item" >Data Almarhum</a>
                                    </Link></li>
                                    <Link href="/petugassholatjumat" legacyBehavior id='link'>
                                        <a className="dropdown-item" >Petugas Sholat Jum'at</a>
                                    </Link>
                                    <Link href="/petugashariraya" legacyBehavior id='link'>
                                        <a className="dropdown-item" >Petugas Sholat Idhul Fitri/Adha</a>
                                    </Link>
                                    <Link href="/petugastarawih" legacyBehavior id='link'>
                                        <a className="dropdown-item" >Petugas Sholat Tarawih</a>
                                    </Link>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/kegiatan" legacyBehavior id='link'>
                                    <a className="nav-link" >Agenda Kegiatan</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/jadwalsholat" legacyBehavior id='link'>
                                    <a className="nav-link" >Jadwal Sholat</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" legacyBehavior id='link'>
                                    <a className="nav-link" >About</a>
                                </Link>
                            </li>
                        </ul>
                        {/* Left links */}
                        {/* Search form */}

                        <Link href="/login" legacyBehavior id='link'>

                            <button className="btn btn-info" ><i className="fa fa-home" aria-hidden='true' ></i> Login</button>
                        </Link>



                    </div>

                    {/* Collapsible wrapper */}
                </div>

                {/* Container wrapper */}
            </nav>
            {/* Navbar */}


        </>
    )
}

export default Header