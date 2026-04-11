import React from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const TimeSlots = () => {
  const slots = [
    { date: 'March 5, 2026', time: '10:00 - 11:00', bookings: '2 / 5', status: 'Available' },
    { date: 'March 5, 2026', time: '14:00 - 15:00', bookings: '1 / 5', status: 'Available', highlight: true },
    { date: 'March 6, 2026', time: '10:00 - 11:00', bookings: '0 / 5', status: 'Available' },
    { date: 'March 6, 2026', time: '16:00 - 17:00', bookings: '3 / 3', status: 'Full' },
    { date: 'March 7, 2026', time: '11:00 - 12:00', bookings: '0 / 5', status: 'Available' },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 className="fw-bold mb-1">Time Slots Management</h5>
          <p className="text-muted small">Create and manage available time slots for fan bookings</p>
        </div>
        <button className="btn btn-dark fw-bold rounded-3 px-4 py-2 d-flex align-items-center gap-2">
          <FaPlus size={12} /> Add Time Slot
        </button>
      </div>

      <div className="row g-4">
        {slots.map((slot, idx) => (
          <div className="col-12 col-md-6" key={idx}>
            <div 
              className={`p-4 rounded-4 position-relative border-2 transition-all ${
                slot.highlight ? 'border-primary' : 'border-light'
              }`}
              style={{ backgroundColor: '#fff', borderStyle: 'solid' }}
            >
              <button className="btn btn-link text-danger position-absolute top-0 end-0 m-3 p-2 border-0">
                <FaTrashAlt size={18} />
              </button>
              
              <h6 className="fw-bold mb-1">{slot.date}</h6>
              <p className="text-muted small mb-2">{slot.time}</p>
              <p className="small mb-3">Bookings: <span className="fw-bold">{slot.bookings}</span></p>
              
              <span className={`badge px-3 py-2 rounded-pill fw-bold ${
                slot.status === 'Full' ? 'bg-light text-muted' : 'bg-dark text-white'
              }`} style={{ fontSize: '11px' }}>
                {slot.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;