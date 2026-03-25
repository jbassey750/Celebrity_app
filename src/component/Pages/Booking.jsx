import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt, FaPaperPlane } from 'react-icons/fa';

export default function BookSessionPage() {
  // Common style objects for consistency and to match the visual design
  const cardStyle = {
    borderRadius: '16px',
    border: '1px solid #eef0f2',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    backgroundColor: '#ffffff',
  };

  const inputStyle = {
    backgroundColor: '#f3f4f6', // Light gray background for inputs
    border: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#333',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '6px',
  };

  // Button styles to match the original design
  const primaryButtonStyle = {
    backgroundColor: '#050517', // Very dark blue/black
    border: 'none',
    padding: '14px',
    fontWeight: '700',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '15px',
    letterSpacing: '0.2px',
  };

  const pageBackground = {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={pageBackground}>
      <div className="container py-4 py-md-5">
        
        {/* Page Header Section */}
        <div className="mb-4 mb-md-5">
          <h1 className="fw-bold mb-1" style={{ fontSize: '1.75rem', letterSpacing: '-0.5px' }}>
            Book Your Session
          </h1>
          <p className="text-muted" style={{ fontSize: '15px' }}>
            Select an available time slot and submit your booking request
          </p>
        </div>

        {/* Main Content Grid: Left card (Slots), Right card (Details) */}
        {/* We use standard Bootstrap row/col classes with g-4 for spacing */}
        <div className="row g-4">
          
          {/* AVAILABLE TIME SLOTS CARD (Left) */}
          <div className="col-12 col-md-7">
            <div className="card h-100 p-4" style={cardStyle}>
              <div className="mb-4">
                <h2 className="fw-bold" style={{ fontSize: '1.25rem', letterSpacing: '-0.2px' }}>
                  Available Time Slots
                </h2>
                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                  Choose a time that works best for you
                </p>
              </div>

              {/* EMPTY STATE CONTAINER */}
              {/* This flex container centers the calendar icon and message */}
              <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center text-muted" style={{ minHeight: '300px' }}>
                <FaCalendarAlt size={60} color="#ccd1d9" className="mb-4" />
                <p className="fw-bold mb-1" style={{ color: '#6c757d', fontSize: '15px' }}>
                  No available slots at the moment
                </p>
                <p style={{ fontSize: '13px', color: '#8c98a4' }}>
                  Check back later or contact us for more information
                </p>
              </div>
            </div>
          </div>

          {/* BOOKING DETAILS FORM CARD (Right) */}
          <div className="col-12 col-md-5">
            <div className="card p-4 p-md-5" style={cardStyle}>
              <div className="mb-4">
                <h2 className="fw-bold" style={{ fontSize: '1.25rem', letterSpacing: '-0.2px' }}>
                  Booking Details
                </h2>
                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                  Add a personal message and optional Telegram handle
                </p>
              </div>

              <form>
                {/* MESSAGE INPUT */}
                <div className="mb-3">
                  <label htmlFor="bookingMessage" style={labelStyle}>
                    Message (Optional)
                  </label>
                  <textarea
                    id="bookingMessage"
                    className="form-control shadow-none"
                    rows="4"
                    placeholder="Tell us why you're a fan and what you'd like to discuss..."
                    style={inputStyle}
                  ></textarea>
                </div>

                {/* TELEGRAM USERNAME INPUT with '@' prefix */}
                <div className="mb-4">
                  <label htmlFor="telegramHandle" style={labelStyle}>
                    Telegram Username (Optional)
                  </label>
                  <div className="input-group" style={inputStyle}>
                    {/* The prefix is inside a span that is styled to look like the rest of the input */}
                    <span 
                      className="input-group-text border-0 bg-transparent ps-0 py-0 text-muted" 
                      style={{ fontSize: '14px', pointerEvents: 'none' }}
                    >
                      @
                    </span>
                    <input
                      type="text"
                      id="telegramHandle"
                      className="form-control border-0 bg-transparent p-0 shadow-none"
                      placeholder="username"
                      style={{ fontSize: '14px', color: '#333' }}
                    />
                  </div>
                  {/* HELPER TEXT */}
                  <p className="mt-2 text-muted" style={{ fontSize: '12px' }}>
                    Link your Telegram for seamless chat integration
                  </p>
                </div>

                {/* SUBMIT BUTTON */}
                <button type="submit" className="btn btn-primary w-100" style={primaryButtonStyle}>
                  Submit Booking Request
                </button>
                
                {/* CONFIRMATION NOTICE TEXT */}
                <div className="text-center mt-3">
                  <p className="text-muted mb-0" style={{ fontSize: '12px', color: '#6c757d' }}>
                    Your request will be reviewed and you'll receive a confirmation
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Footer info or navigation could go here */}
      </div>
    </div>
  );
}