import React from "react";
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            sisaUang: 0,
            persentaseUang: 0,
            pemasukanUang: 0,
            pengeluaranUang: 0,
            transaksiIN: 0,
            transaksiOUT: 0,
            summary: []
        }

        this.tambahItem = this.tambahItem.bind(this);
        this.fnHitung = this.fnHitung.bind(this);
    }

    tambahItem(objek) {
        let newData = [...this.state.summary, objek]

        let dataUangIN = newData.filter((item) => item.category === 'IN');
        let nominalUang = dataUangIN.map((item) => item.nominal)
        let jumlahUangIN = nominalUang.reduce((total, num) => total + num, 0)
        let dataUangOUT = newData.filter((item) => item.category === 'OUT');
        let nominalUangOUT = dataUangOUT.map((item) => item.nominal)
        let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num, 0)

        this.setState({
            pemasukanUang: jumlahUangIN,
            transaksiIN: nominalUang.length,
            pengeluaranUang: jumlahUangOUT,
            transaksiOUT: nominalUangOUT.length,
            sisaUang: jumlahUangIN - jumlahUangOUT,
            persentaseUang: (jumlahUangIN - jumlahUangOUT) / jumlahUangIN * 100,
            summary: newData
        })
    }

    fnHitung() {
        let dataUangIN = this.state.summary.filter((item) => item.category === 'IN');
        let nominalUang = dataUangIN.map((item) => item.nominal)
        let jumlahUangIN = nominalUang.reduce((total, num) => total + num)
        let dataUangOUT = this.state.summary.filter((item) => item.category === 'OUT');
        let nominalUangOUT = dataUangOUT.map((item) => item.nominal)
        let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num)

        this.setState({
            pemasukanUang: jumlahUangIN,
            transaksiIN: nominalUang.length,
            pengeluaranUang: jumlahUangOUT,
            transaksiOUT: nominalUangOUT.length,
            sisaUang: jumlahUangIN - jumlahUangOUT,
            persentaseUang: (jumlahUangIN - jumlahUangOUT) / jumlahUangIN * 100
        })
    }

    componentDidMount() {
        if (this.state.summary.length < 1) {

        }
        else (
            this.fnHitung()
        )

    }

    render() {
        return (
            <>
                <div className='container py-5'>

                    <div className='row text-center'>
                        <div className='col-12'>
                            <h1 className='judul fw-bold'>LAPORAN KAS MASJID  </h1>
                            <hr className='w-75 mx-auto' />
                            <h2 className='fw-bold sisa'>Rp. {this.state.sisaUang},-</h2>
                            <span className='title'>Sisa kas masjid tersisa {this.state.persentaseUang}% lagi  </span>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-6'>
                            <div className='card-wrapper p-4'>
                                <div className='icon-wrapper mt-1'>
                                    <i className="bi bi-wallet2"></i>
                                </div>
                                <span className='title'>Pemasukan</span>
                                <h3 className='h3 fw-bold'>Rp. {this.state.pemasukanUang},-</h3>
                                <div>
                                    <span className='title text-ungu fw-bold'>{this.state.transaksiIN}</span> <span className='title'>Transaksi</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='card-wrapper p-4'>
                                <div className='icon-wrapper mt-1'>
                                    <i className="bi bi-cash-stack"></i>
                                </div>
                                <span className='title'>Pemakaian</span>
                                <h3 className='h3 fw-bold'>Rp. {this.state.pengeluaranUang},-</h3>
                                <div>
                                    <span className='title text-ungu fw-bold'>{this.state.transaksiOUT}</span> <span className='title'>Transaksi</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 d-flex justify-content-between align-items-center'>
                            <h4 className='h4'>Ringkasan Transaksi</h4>
                            <div className='wrapper-button'>
                                <ModalCreate action={this.tambahItem} category='IN' variant=" button btn-ungu px-3 py-2 me-2" text="Pemasukan" icon="bi bi-plus-circle-fill" modalheading="Tambah Pemasukan" />
                                <ModalCreate action={this.tambahItem} category='OUT' variant=" button btn-pink px-3 py-2 me-2" text="Pengeluaran" icon="bi bi-dash-circle-fill" modalheading="Tambah Pengeluaran" />

                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        {this.state.summary.length < 1 && <Alert />}
                        {this.state.summary.map((sum, idx) => {
                            return (
                                <div className=' mb-3 col-12 d-flex justify-content-between align-items-center' key={idx}>
                                    <div className='d-flex align-items-center'>
                                        <div className={sum.category === 'IN' ? 'icon-wrapper-IN' : 'icon-wrapper-OUT'}>
                                            <i className={sum.category === 'IN' ? 'bi bi-wallet2' : 'bi bi-bag-dash'}></i>
                                        </div>

                                        <div className='transaction ms-3 d-flex flex-column'>
                                            <h6 className='h6'>{sum.deskripsi}</h6>
                                            <span className='title'>{sum.tanggal}</span>
                                        </div>
                                    </div>

                                    <h5 className={sum.category === 'IN' ? 'text-money-in' : 'text-money-out'}>RP. {sum.nominal}</h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

class ModalCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            deskripsi: '',
            nominal: 0,
            tanggal: '',
            category: ''
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.tambahItem = this.tambahItem.bind(this)
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    handleShow() {
        this.setState({
            show: true,
            category: this.props.category
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    tambahItem() {
        const Data = {
            deskripsi: this.state.deskripsi,
            nominal: parseInt(this.state.nominal),
            tanggal: this.state.tanggal,
            category: this.state.category
        }
        const fnTambahItem = this.props.action
        fnTambahItem(this.state);
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleShow} className={this.props.variant}>{this.props.text} <i className={this.props.icon}></i></button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.modalheading}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <label className="form-label">Deskripsi</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Masukkan Deskripsi"
                                name="deskripsi"
                                value={this.state.deskripsi}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Nominal</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Masukkan Deskripsi"
                                name="nominal"
                                value={this.state.nominal}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Tanggal</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Masukkan Deskripsi"
                                name="tanggal"
                                value={this.state.tanggal}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <input
                                type="hidden"
                                className="form-control"
                                placeholder="Masukkan Deskripsi"
                                name="category"
                                value={this.state.category}
                                onChange={this.handleChange}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className={this.props.variant} onClick={this.tambahItem}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

class Alert extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <h1>Data masih kosong</h1>
        )
    }
}


export default App;