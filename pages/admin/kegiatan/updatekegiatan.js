//@ts-check

import React from 'react'
import UpdateKegiatan from '../../../components/admin/kegiatan/UpdateKegiatan'
import AdminLayout from '../../../components/admin/AdminLayout'

const dataalmarhumadmin = () => {
    return (
        <div>
            <AdminLayout>
                <UpdateKegiatan />
            </AdminLayout>
        </div>
    )
}

export default dataalmarhumadmin;