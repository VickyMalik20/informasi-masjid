import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from '../components/Footer'
import Header from '../components/Header'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Kirim request login ke API
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                // Jika login berhasil, ambil data admin dari response dan simpan ke session storage
                const data = await response.json();
                sessionStorage.setItem('admin', JSON.stringify(data));

                // Redirect ke halaman dashboard
                router.push('/Admin');
            } else {
                // Jika login gagal, ambil pesan error dari response dan tampilkan ke user
                const { message } = await response.json();
                setError(message);
            }
        } catch (err) {
            // Jika terjadi error saat membuat request ke API, tampilkan pesan error ke user
            setError(err.message);
        }
    };

    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />

            <form
                className="mx-auto my-5 px-5"
                style={{ maxWidth: "500px" }}
                onSubmit={handleSubmit}
            >
                {error && <div class="alert alert-danger" role="alert">
                    {error}
                </div>}

                <div className="card shadow p-3 mb-5 bg-body rounded px-4 py-4">
                    <h2 className="text-center text-uppercase mb-4 signin">sign in</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input
                            className="form-control"
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-100 text-uppercase button-sign">
                        sign in
                    </button>
                </div>
            </form>
            <Footer />

        </>

    );
};

export default LoginForm;
