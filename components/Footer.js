import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="body">
                <footer className="footer">
                    <div className=" px-5">
                        <div className="row">
                            <div className="footer-col text-heading">
                                <a className="navbar-brand" href="#">
                                    <img src="/masjid.png" width='100' height='100' />
                                </a>
                                <ul>
                                    <li><p className='text-light'>Masjid Darul Arham</p></li>
                                    <li><p className='text-light'>"Sebagai Pusat Jamaah Islam di Dusun Kunir, Masjid Darul Arham Harus Didukung Dengan Aplikasi Terbaik Yang Mampu Memberikan Barbagai Fitur Pendukung untuk Kemajuan Ummat"</p></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Profil</h4>
                                <ul>
                                    <li><Link href="/visimisi" legacyBehavior id='link'>
                                        Visi dan Misi
                                    </Link></li>

                                    <li><a href="#">Petugas Ketakmiran</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>informasi</h4>
                                <ul>
                                    <li><Link href="/jadwalsholat" legacyBehavior id='link'>
                                        Jadwal Sholat
                                    </Link></li>
                                    <li><Link href="/dataalmarhum" legacyBehavior id='link'>
                                        Data Almarhum
                                    </Link></li>
                                    <li><a href="#">agenda kegiatan</a></li>
                                    <li><Link href="/petugassholatjumat" legacyBehavior id='link'>
                                        Petugas Sholat Jumat
                                    </Link></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Lokasi</h4>
                                <div className='row'>
                                    <div className="col-12">
                                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.7531739676965!2d114.23467411536893!3d-8.327307086144105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd156a900000001%3A0xfd7ebb88ce1c6e59!2sMasjid%20Darul%20Arham!5e0!3m2!1sid!2sid!4v1667395930745!5m2!1sid!2sid" width="300" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer