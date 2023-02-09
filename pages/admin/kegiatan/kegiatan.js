//@ts-check

import React from 'react'
import Kegiatan from '../../../components/admin/kegiatan/Kegiatan'
import AdminLayout from '../../../components/admin/AdminLayout'

const dataalmarhumadmin = () => {
    return (
        <div>
            <AdminLayout>
                <Kegiatan />
            </AdminLayout>
        </div>
    )
}

export default dataalmarhumadmin;