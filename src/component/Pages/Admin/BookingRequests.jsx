import React from 'react';
import { FaCalendarAlt, FaCheck, FaTimes, FaTelegramPlane } from 'react-icons/fa';

const BookingRequests = () => {
  // Mock data representing the list of booked requests
  const requests = [
    {
      id: 1,
      fanName: "John Doe",
      date: "March 25, 2026",
      time: "10:00 AM - 11:00 AM",
      telegram: "@johndoe_fan",
      status: "Pending"
    },
    {
      id: 2,
      fanName: "Jane Smith",
      date: "March 26, 2026",
      time: "02:00 PM - 03:00 PM",
      telegram: "@janesmith_official",
      status: "Pending"
    }
  ];

  return (
    <div className="py-2">
      {/* Header section matching your Admin Dashboard style */}
      <div className="mb-4 text-start">
        <h5 className="fw-bold mb-1">Booking Requests</h5>
        <p className="text-muted small">Review and manage fan booking requests</p>
      </div>

      {requests.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover align-middle border-light">
            <thead className="table-light">
              <tr style={{ fontSize: '12px', color: '#6c757d', letterSpacing: '0.5px' }}>
                <th className="ps-4 py-3 border-0">FAN NAME</th>
                <th className="border-0">DATE & TIME</th>
                <th className="border-0">TELEGRAM</th>
                <th className="border-0 text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="bg-white">
                  <td className="ps-4 py-3 fw-bold" style={{ fontSize: '14px' }}>
                    {request.fanName}
                  </td>
                  <td style={{ fontSize: '13px' }}>
                    <div className="fw-medium">{request.date}</div>
                    <div className="text-muted small">{request.time}</div>
                  </td>
                  <td className="text-primary" style={{ fontSize: '13px' }}>
                    <FaTelegramPlane className="me-1" />
                    {request.telegram}
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn btn-sm btn-success rounded-pill px-3 shadow-sm" style={{ fontSize: '12px' }}>
                        <FaCheck className="me-1" /> Approve
                      </button>
                      <button className="btn btn-sm btn-outline-danger rounded-pill px-3" style={{ fontSize: '12px' }}>
                        <FaTimes className="me-1" /> Decline
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Original Empty State fallback */
        <div className="text-center py-5">
          <div className="d-flex flex-column align-items-center justify-content-center mt-5 opacity-50">
            <FaCalendarAlt size={60} color="#ccd1d9" className="mb-3" />
            <p className="fw-bold text-muted">No bookings yet</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingRequests;