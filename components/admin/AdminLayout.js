import React from 'react'
import Dashboard from './dashboard'

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Dashboard>
                {children}
            </Dashboard>
        </div>
    )
}

export default AdminLayout;