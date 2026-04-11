import React from 'react';
import { FaUserCircle, FaEnvelope, FaGlobe, FaPhone } from 'react-icons/fa';

const RegisteredFans = () => {
  // Mock data representing registered users
  const fans = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      country: "United States",
      joinedDate: "March 10, 2026"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@demo.com",
      phone: "+234 801 234 5678",
      country: "Nigeria",
      joinedDate: "March 12, 2026"
    }
  ];

  return (
    <div className="py-2">
      <div className="mb-4 text-start">
        <h5 className="fw-bold mb-1">Registered Fans</h5>
        <p className="text-muted small">View all fans registered on the platform</p>
      </div>

      {fans.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr style={{ fontSize: '13px', color: '#6c757d' }}>
                <th className="border-0 ps-3">FAN DETAILS</th>
                <th className="border-0">CONTACT</th>
                <th className="border-0">LOCATION</th>
                <th className="border-0 text-end pe-3">JOINED DATE</th>
              </tr>
            </thead>
            <tbody>
              {fans.map((fan) => (
                <tr key={fan.id} style={{ fontSize: '14px' }}>
                  <td className="ps-3 py-3">
                    <div className="d-flex align-items-center gap-3">
                      <FaUserCircle size={32} color="#9d00ff" className="opacity-75" />
                      <span className="fw-bold">{fan.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <small className="text-muted d-flex align-items-center gap-1">
                        <FaEnvelope size={10} /> {fan.email}
                      </small>
                      <small className="text-muted d-flex align-items-center gap-1">
                        <FaPhone size={10} /> {fan.phone}
                      </small>
                    </div>
                  </td>
                  <td>
                    <small className="d-flex align-items-center gap-1 fw-medium">
                      <FaGlobe size={12} className="text-muted" /> {fan.country}
                    </small>
                  </td>
                  <td className="text-end pe-3 text-muted">
                    <small>{fan.joinedDate}</small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Original Empty State */
        <div className="d-flex flex-column align-items-center justify-content-center mt-5 opacity-50 py-5">
          <FaUserCircle size={60} color="#ccd1d9" className="mb-3" />
          <p className="fw-bold text-muted">No registered fans yet</p>
        </div>
      )}
    </div>
  );
};

export default RegisteredFans;