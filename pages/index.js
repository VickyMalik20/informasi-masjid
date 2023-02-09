import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import JadwalSholat2 from '../components/JadwalSholat2'

export default function Home() {
  return (
    <>
      <Head>
        <title>Masjid Darul Arham</title>
        <link rel="icon" href="/lg.png" />
      </Head>
      {/* Header */}
      <Header />

      {/* Bagian Banner Awal */}
      <div className='banner w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div className='container banner-conten col-lg-6'>
          <div className='text-center my-5'>
            <h1><strong>
              ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
            </strong>
            </h1>
            <p className='py-3'>
              Kami segenap pengurus Masjid Darul Arham mengucapkan selamat datang di website kami.
            </p>
            <p className='d-none d-sm-block'>
              "Sebagai Pusat Jamaah Islam di Dusun Kunir, Masjid Darul Arham Harus Didukung Dengan Aplikasi Terbaik Yang Mampu Memberikan Barbagai Fitur Pendukung untuk Kemajuan Ummat"
            </p>
            <a href="#fasilitas" className="btn btn-info text-light">
              TELL ME MORE
            </a>
          </div>
        </div>
      </div>
      <JadwalSholat2 />

      {/* Bagian Fasilitas */}
      <div id='bgfasilitas'>
        <div className='container py-4' id='fasilitas'>
          <h3 className='text-center'>Fasilitas</h3>
          <div className='row py-5 text-center'>
            <div className=' col-lg-4 col-md-6 mb-5 text-center'>
              <img src="/wc.svg" alt="Bootstrap" width="100" height="100" className='text-center'></img>
              <h4 className="my-3" style={{ color: 'orange', fontFamily: 'revert-layer' }} >Kamar Mandi</h4>
              <p className="text-muted">Tersedianya kamar mandi yang bersih dan air dari sumber mata air/sumur</p>
            </div>
            <div className=' col-lg-4 col-md-6 mb-5 text-center'>
              <img src="/pakaian.svg" alt="Bootstrap" width="100" height="100" className='text-center'></img>
              <h4 className="my-3" style={{ color: 'orange', fontFamily: 'revert-layer' }} >Perlengkapan Sholat</h4>
              <p className="text-muted">Tersedia perlenglapan sholat bagi laki-laki dan perempuan seperti, sarung dan mukenah.</p>
            </div>
            <div className=' col-lg-4 col-md-6 mb-5 text-center'>
              <img src="/parkir.svg" alt="Bootstrap" width="100" height="100" className='text-center'></img>
              <h4 className="my-3" style={{ color: 'orange', fontFamily: 'revert-layer' }} >Area Parkir</h4>
              <p className="text-muted">Tersedia halaman parkir untuk mobil dan sepeda motor.</p>
            </div>
            <div className=' col-lg-4 col-md-6 mb-5 text-center'>
              <img src="/wifi.svg" alt="Bootstrap" width="100" height="100" className='text-center'></img>
              <h4 className="my-3" style={{ color: 'orange', fontFamily: 'revert-layer' }} >Free Wi-Fi</h4>
              <p className="text-muted">Masjid ini dilengkapi dengan Wi-Fi yang bisa diakses semua orang. Gunakan untuk hal yang positif ya !!</p>
            </div>
            <div className=' col-lg-4 col-md-6 mb-5 text-center'>
              <img src="/kran.svg" alt="Bootstrap" width="100" height="100" className='text-center'></img>
              <h4 className="my-3" style={{ color: 'orange', fontFamily: 'revert-layer' }} >Tempat Wudlu</h4>
              <p className="text-muted">Tersedia tempat wudlu bagi laki-laki dan perempuan</p>
            </div>
            <div className=' col-lg-4 col-md-6 mb-5 text-center'>
              <img src="/kipas.svg" alt="Bootstrap" width="100" height="100" className='text-center'></img>
              <h4 className="my-3" style={{ color: 'orange', fontFamily: 'revert-layer' }} >Kipas Angin</h4>
              <p className="text-muted">Dimasjid ini sudah terpasang kipas angin di seluruh penjuru masjid.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Sejarah Masjid */}
      <div className='py-5 mb-5' id='sejarahbg'>
        <div className='container py-5 rounded' id='sejarahbg2'>
          <div className='row'>
            <div className='col-lg-6'>
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="/masjid1.jpg" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="/masjid2.jpg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="/masjid3.jpg" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className='col-lg-6 align-self-cente r'>
              <div className=" text-center" style={{ backgroundColor: 'white' }}>
                <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Deskripsi Singkat</em></h3>
                <p className='lead' style={{ color: 'green' }}>Masjid Darul Arham</p>
                <p className="lead text-start">Masjid Darul Arham merupakan masjid satu-satunya yang berdiri di Dusun Kunir, Desa Singojuruh, Kecamatan Singojuruh, Kabupaten Banyuwangi.
                  Masjid ini masih memiliki nuansa yang klasik karena beberapa bagian dari bangunan masjid ini masih menggunakan
                  bahan bangunan asli pada zaman 90-an. Masjid ini didirikan pada tahun 90-an oleh Bapak Kepala Desa Singojuruh pada zamannya. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}
