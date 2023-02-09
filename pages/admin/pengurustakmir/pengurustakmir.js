//@ts-check

import React from 'react'
import Pengurustakmir from '../../../components/admin/pengurustakmir/PengurusTakmir'
import AdminLayout from '../../../components/admin/AdminLayout'

const dataalmarhumadmin = () => {
    return (
        <div>
            <AdminLayout>
                <Pengurustakmir />
            </AdminLayout>
        </div>
    )
}

export default dataalmarhumadmin;