//@ts-check

import React, { useEffect } from 'react'
import Jadwalsholat from '../../../components/admin/jadwalsholat/Jadwalsholatadmin'
import AdminLayout from '../../../components/admin/AdminLayout'
import { useRouter } from 'next/router'
const jadwalsholat = () => {
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
            <AdminLayout>
                <Jadwalsholat />
            </AdminLayout>
        </div>
    )
}

export default jadwalsholat