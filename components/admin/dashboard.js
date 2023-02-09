import Head from 'next/head'
import React, { Component } from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
const Dashboard = ({ children }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".sidebarBtn");
        sidebarBtn.onclick = function () {
            sidebar.classList.toggle("active");
            if (sidebar.classList.contains("active")) {
                sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else
                sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }

        // Ambil data admin dari session storage
        const data = sessionStorage.getItem('admin');

        if (data) {
            // Jika data tersedia, ubah state username sesuai dengan data admin
            const { username } = JSON.parse(data);
            setUsername(username);
        }
    }, []);






    return (
        <>
            <Head>
                <title>Dashboard Admin</title>
                <link rel="icon" href="/lg.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div>
                <div>
                    <div className="sidebar">
                        <div className="logo-details">
                            <i className="bx bxl-mosque" />
                            <span className="logo_name">Darul Arham</span>
                        </div>
                        <ul className="nav-links">
                            <li>
                                <a href="#" >
                                    <i className="bx bx-grid-alt" />
                                    <span className="links_name">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <Link href="/admin/dataalmarhum/dataalmarhumadmin" legacyBehavior id='link'>
                                    <a >
                                        <i className="bx bx-box" />
                                        <span className="links_name">Data Almarhum</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/jadwalsholat/jadwalsholatadmin" legacyBehavior id='link'>
                                    <a >
                                        <i className="bx bx-box" />
                                        <span className="links_name">Jadwal Sholat</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/petugassholat/sholatjumat" legacyBehavior id='link'>
                                    <a href="#">
                                        <i className="bx bx-list-ul" />
                                        <span className="links_name">Petugas Sholat </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/pengurustakmir/pengurustakmir" legacyBehavior id='link'>
                                    <a href="#">
                                        <i className="bx bx-list-ul" />
                                        <span className="links_name">Pengurus Takmir </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/kegiatan/kegiatan" legacyBehavior id='link'>
                                    <a href="#">
                                        <i className="bx bx-list-ul" />
                                        <span className="links_name">Kegiatan </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/jadwalsholat/jadwalsholatadmin" legacyBehavior id='link'>
                                    <a >
                                        <i className="bx bx-cog" />
                                        <span className="links_name">Pengaturan Akun</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="log_out">
                                <Link href="/logout" legacyBehavior id='link'>
                                    <a href="#">
                                        <i className="bx bx-log-out" />
                                        <span className="links_name">Log out</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <section className="home-section">
                        <nav>
                            <div className="sidebar-button">
                                <i className="bx bx-menu sidebarBtn" />
                                <span className="dashboard">Masjid Darul Arham</span>
                            </div>
                            <p>Selamat datang di Dashboard,  <strong className='text-uppercase'>{username}</strong></p>
                        </nav>
                        <div className='table-responsive'>
                            {children}
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}

export default Dashboard;