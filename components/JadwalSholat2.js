import React from 'react'

const JadwalSholat2 = () => {

    const getDate = new Date();
    const getYears = getDate.getFullYear();
    const getMont = getDate.getMonth() + 1;
    const getDay = getDate.getDate();


    function bulan() {
        if (getMont < 10) {
            bulan = `0${getMont}`
        } else {
            bulan = getMont;
        }
        return bulan;
    }

    function hari() {
        if (getDay < 10) {
            hari = `0${getDay}`
        } else {
            hari = getDay;
        }
        return hari;
    }

    const tanggal = `${getYears}-${bulan()}-${hari()}`

    // const tampilKota = document.querySelector('.judul-kota');
    // tampilKota.textContent = localStorage.judulkota;

    function getJadwalSholat() {
        fetch('https://api.banghasan.com/sholat/format/json/jadwal/kota/742/tanggal/' + tanggal)
            .then(response => response.json())
            .then(data => {
                const jadwal = data.jadwal.data;
                document.querySelector('.imsak').textContent = jadwal.imsak;
                document.querySelector('.subuh').textContent = jadwal.subuh;
                document.querySelector('.terbit').textContent = jadwal.terbit;
                document.querySelector('.dzuhur').textContent = jadwal.dzuhur;
                document.querySelector('.ashar').textContent = jadwal.ashar;
                document.querySelector('.maghrib').textContent = jadwal.maghrib;
                document.querySelector('.isya').textContent = jadwal.isya;
            })
    }

    getJadwalSholat();


    return (

        <div className='bg-sholat'>
            <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Jadwal Sholat Singojuruh </em></h3><br />
            <p style={{ textAlign: 'center' }} ><iframe src="https://jam.jadwalsholat.org/digitalclock/" frameBorder="0" width="175″" height="60" ></iframe></p>

            <div className="container-fluid  mb-5 card-deck text-center">
                <div className="card bg-card-1 mb-2">
                    <div className="card-body">
                        <h6 className="card-title">IMSAK</h6>
                        <p></p>
                        <p className='imsak'></p>
                    </div>
                </div>
                <div className="card bg-card-1 mb-2">
                    <div className="card-body">
                        <h6 className="card-title">SUBUH</h6>
                        <p></p>
                        <p className='subuh'></p>
                    </div>
                </div>
                <div className="card bg-card-1 mb-2">
                    <div className="card-body">
                        <h6 className="card-title">TERBIT</h6>
                        <p></p>
                        <p className='terbit'></p>
                    </div>
                </div>
                <div className="card bg-card-1 mb-2">
                    <div className="card-body">
                        <h6 className="card-title">DZUHUR</h6>
                        <p></p>
                        <p className='dzuhur'></p>
                    </div>
                </div>
                <div className="card bg-card-1 mb-2">
                    <div className="card-body">
                        <h6 className="card-title">ASHAR</h6>
                        <p></p>
                        <p className='ashar'></p>
                    </div>
                </div>
                <div className="card bg-card-1 mb-2">
                    <div className="card-body">
                        <h6 className="card-title">MAGHRIB</h6>
                        <p></p>
                        <p className='maghrib'></p>
                    </div>
                </div>
                <div className="card bg-card-1 mb-2">
                    <div className="card-body">
                        <h6 className="card-title">ISYA'</h6>
                        <p></p>
                        <p className='isya'></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JadwalSholat2