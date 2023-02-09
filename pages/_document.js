import Doucument, { Html, Main, Head, NextScript } from 'next/document'

class MyDocument extends Doucument {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <main name='description' content='Sistem informasi tentang masjid' />

                    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
                    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0/css/bootstrap.min.css'></link>
                    <link rel="stylesheet" href='https://cdn.datatables.net/1.13.1/css/dataTables.bootstrap5.min.css'></link>

                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />


                    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" ></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" ></script>
                    <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>


                    <script src='https://code.jquery.com/jquery-3.5.1.js'></script>
                    <script src='https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js'></script>
                    <script src='https://cdn.datatables.net/1.13.1/js/dataTables.bootstrap5.min.js'></script>

                </Head>
                <body>

                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}

export default MyDocument