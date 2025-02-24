import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminTable from './AdminTable'
import ShowTotals from './ShowTotals'

const AdminDashboard = () => {
  return (
    <div className=' m-2'>
    <ShowTotals/>
    <div className=' flex'>
    <AdminSidebar/>
    <AdminTable/>
    </div>
     
    </div>
  )
}

export default AdminDashboard