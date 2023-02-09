
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const UpdateJadwalSholat = () => {
  const [_bulan, setBulan] = useState('');
  const [_tanggal, setTanggal] = useState('');
  const [_imsyak, setImsyak] = useState('');
  const [_subuh, setSubuh] = useState('');
  const [_terbit, setTerbit] = useState('');
  const [_dzuhur, setDzuhur] = useState('');
  const [_ashar, setAshar] = useState('');
  const [_maghrib, setMaghrib] = useState('');
  const [_isya, setIsya] = useState('');

  const router = useRouter();
  const { bulan, tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya } = router.query;

  useEffect(() => {

    if (typeof bulan == 'string') {
      setBulan(bulan);
    }
    if (typeof tanggal == 'string') {
      setTanggal(tanggal);
    }
    if (typeof imsyak == 'string') {
      setImsyak(imsyak);
    }
    if (typeof subuh == 'string') {
      setSubuh(subuh);
    }
    if (typeof terbit == 'string') {
      setTerbit(terbit);
    }
    if (typeof dzuhur == 'string') {
      setDzuhur(dzuhur);
    }
    if (typeof ashar == 'string') {
      setAshar(ashar);
    }
    if (typeof maghrib == 'string') {
      setMaghrib(maghrib);
    }
    if (typeof isya == 'string') {
      setIsya(isya);
    }
  }, [bulan, tanggal, imsyak, subuh, terbit, dzuhur, ashar, maghrib, isya],)

  async function submitHandler(e) {
    e.preventDefault()
    try {
      const res = await fetch('/api/updatejadwalsholat', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bulan: _bulan,
          tanggal: _tanggal,
          imsyak: _imsyak,
          subuh: _subuh,
          terbit: _terbit,
          dzuhur: _dzuhur,
          ashar: _ashar,
          maghrib: _maghrib,
          isya: _isya
        }),
      })

      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      alert("Update jadwal sukses")

      Router.push('/admin/jadwalsholat/jadwalsholatadmin')
    } catch (e) {
      throw Error(e.message)
    }
  }


  return (
    <>
      <Head>
        <title>Ubah jadwal sholat</title>
        <link rel="icon" href="/lg.png" />
      </Head>
      <div className=' mt-5'>
        <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
          <h3 className="display-12" style={{ color: 'orange' }}><em>Update Jadwal Sholat</em></h3>
        </div>
      </div>
      <form onSubmit={submitHandler} className='container' style={{ maxWidth: '500px' }}>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Bulan</label>
          <input type="text" placeholder='Bulan' className="form-control" id='bulan' value={_bulan} onChange={(e) => setBulan(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Tanggal</label>
          <input type="text" placeholder='Tanggal' className="form-control" id='tanggal' value={_tanggal} onChange={(e) => setTanggal(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Imsyak</label>
          <input type="text" placeholder='Imsyak' className="form-control" id='imsyak' value={_imsyak} onChange={(e) => setImsyak(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Subuh</label>
          <input type="text" placeholder='Subuh' className="form-control" id='subuh' value={_subuh} onChange={(e) => setSubuh(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Terbit</label>
          <input type="text" placeholder='Terbit' className="form-control" id='terbit' value={_terbit} onChange={(e) => setTerbit(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Dzuhur</label>
          <input type="text" placeholder='Dzuhur' className="form-control" id='dzuhur' value={_dzuhur} onChange={(e) => setDzuhur(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Ashar</label>
          <input type="text" placeholder='Ashar' className="form-control" id='ashar' value={_ashar} onChange={(e) => setAshar(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Maghrib</label>
          <input type="text" placeholder='Maghrib' className="form-control" id='maghrib' value={_maghrib} onChange={(e) => setMaghrib(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Isya</label>
          <input type="text" placeholder='Isya' className="form-control" id='isya' value={_isya} onChange={(e) => setIsya(e.target.value)} />
        </div>


        <button type="submit" className="btn btn-primary w-100" >Update</button>


      </form>
    </>
  )
}

export default UpdateJadwalSholat;