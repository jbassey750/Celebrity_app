import React, { useState } from 'react';
import BookingRequests from './BookingRequests';
import TimeSlots from './TimeSlots';
import RegisteredFans from './RegisteredFans';
import { FaUsers, FaClock, FaCheckCircle, FaComments } from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Booking Requests');

  const stats = [
    { label: 'Total Fans', value: 1, icon: <FaUsers color="#9d00ff" /> },
    { label: 'Pending Requests', value: 0, icon: <FaClock color="#f39c12" /> },
    { label: 'Confirmed', value: 0, icon: <FaCheckCircle color="#27ae60" /> },
    { label: 'Active Chats', value: 0, icon: <FaComments color="#2980b9" /> },
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 p-4 p-md-5">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Admin Dashboard</h2>
        <p className="text-muted">Manage bookings, time slots, and fan interactions</p>
      </div>

      {/* Stats Cards Row */}
      <div className="row g-4 mb-5">
        {stats.map((stat, idx) => (
          <div className="col-12 col-sm-6 col-xl-3" key={idx}>
            <div className="card border-0 shadow-sm p-4 rounded-4 d-flex flex-row justify-content-between align-items-center">
              <div>
                <p className="text-muted small mb-1 fw-bold">{stat.label}</p>
                <h3 className="fw-bold mb-0">{stat.value}</h3>
              </div>
              <div className="fs-3 opacity-75">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Tabs Navigation */}
      <div className="d-flex gap-2 mb-4 bg-white p-1 rounded-pill shadow-sm w-fit-content" style={{ width: 'fit-content' }}>
        {['Booking Requests', 'Time Slots', 'Registered Fans'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`btn rounded-pill px-4 py-2 fw-bold border-0 transition-all ${
              activeTab === tab ? 'bg-dark text-white shadow' : 'text-muted bg-transparent'
            }`}
            style={{ fontSize: '14px' }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content Container */}
      <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4" style={{ minHeight: '400px' }}>
        {activeTab === 'Booking Requests' && <BookingRequests />}
        {activeTab === 'Time Slots' && <TimeSlots />}
        {activeTab === 'Registered Fans' && <RegisteredFans />}
      </div>
    </div>
  );
};

export default AdminDashboard;