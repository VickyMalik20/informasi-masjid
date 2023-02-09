import React, { useEffect } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import Head from "next/head";
import { useRouter } from 'next/router';

const Admin = () => {
    const router = useRouter();

    useEffect(() => {
        // Ambil data admin dari session storage
        const data = sessionStorage.getItem('admin');

        if (!data) {
            // Jika data tidak tersedia, tolak akses ke halaman dashboard
            router.replace('/login');
        }
    }, []);
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <div>
                <AdminLayout />
            </div>
        </div>
    )
}

export default Admin