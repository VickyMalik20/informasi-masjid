import useSWR from 'swr';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const { data, error } = useSWR('/api/admin/admin', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (error) {
        // Jika terjadi error saat membuat request ke API, tampilkan pesan error ke user
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        // Jika data belum tersedia, tampilkan spinner sebagai tanda sedang loading
        return <div>Loading...</div>;
    }

    // Jika data tersedia, simpan data admin ke session storage dan redirect ke halaman dashboard
    sessionStorage.setItem('admin', JSON.stringify(data));
    router.push('/Admin');

    return null;
};

export default Login;
