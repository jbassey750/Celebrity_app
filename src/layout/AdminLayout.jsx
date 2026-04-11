import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from '../component/widget/AdminNav'; // Create this specifically for Admin

const AdminLayout = () => {
  return (
    <div className="admin-wrapper" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <AdminNav /> 
      <main className="admin-content">
        <Outlet /> 
      </main>
    </div>
  );
};

export default AdminLayout;