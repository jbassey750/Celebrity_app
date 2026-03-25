import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaComment,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // 🔥 Dummy Booking Data
  const bookings = [
    {
      id: 1,
      name: "Session with Celebrity A",
      date: "March 25, 2026",
      status: "Pending",
    },
    {
      id: 2,
      name: "Live Chat with Celebrity B",
      date: "March 28, 2026",
      status: "Confirmed",
    },
  ];

  return (
    <div className="container py-4">
      {/* 🔥 HEADER */}
      <h2 className="fw-bold">Welcome back, John Doe!</h2>
      <p className="text-muted">
        Manage your bookings and chat sessions all in one place
      </p>

      {/* 🔥 STATS */}
      <div className="row g-3 my-3">
        <div className="col-md-3">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <div className="d-flex justify-content-between">
              <div>
                <small className="text-muted">Total Bookings</small>
                <h4 className="fw-bold">0</h4>
              </div>
              <FaCalendarAlt size={22} color="purple" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <div className="d-flex justify-content-between">
              <div>
                <small className="text-muted">Pending</small>
                <h4 className="fw-bold">0</h4>
              </div>
              <FaClock size={22} color="orange" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <div className="d-flex justify-content-between">
              <div>
                <small className="text-muted">Confirmed</small>
                <h4 className="fw-bold">0</h4>
              </div>
              <FaCheckCircle size={22} color="green" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm border-0 rounded-4">
            <div className="d-flex justify-content-between">
              <div>
                <small className="text-muted">Active Chats</small>
                <h4 className="fw-bold">0</h4>
              </div>
              <FaComment size={22} color="blue" />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 QUICK ACTIONS */}
      <div className="card p-4 shadow-sm border-0 rounded-4 mb-4">
        <h6 className="fw-bold mb-1">Quick Actions</h6>
        <p className="text-muted small mb-3">Common tasks to get you started</p>

        <div className="d-flex gap-2">
          <button className="btn btn-dark">
            <Link
              to="/book"
              className="text-white text-decoration-none d-flex align-items-center gap-1"
            >
              <FaCalendarAlt size={15} color="gray" /> Book New Session
            </Link>
          </button>

          <button className="btn btn-outline-secondary">
            <Link to="/profile" className="text-decoration-none text-dark">
              View Profile
            </Link>
          </button>
        </div>
      </div>

      {/* 🔥 MY BOOKINGS */}
      <div className="card p-4 shadow-sm border-0 rounded-4">
        <h6 className="fw-bold mb-1">My Bookings</h6>
        <p className="text-muted small mb-3">
          View and manage all your scheduled sessions
        </p>

        {/* Booking List */}
        {bookings.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center flex-column gap-2 text-muted py-4">
             <FaCalendarAlt size={25} color="gray" />
            <div className="text-center text-muted py-4">No bookings yet</div>
            <button className="btn btn-dark">
              <Link
                to="/book"
                className="text-white text-decoration-none d-flex align-items-center gap-1"
              >
                Book Your First Session
              </Link>
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column gap-3">
            {bookings.map((item) => (
              <div
                key={item.id}
                className="border rounded-3 p-3 d-flex justify-content-between align-items-center"
              >
                <div>
                  <h6 className="mb-1">{item.name}</h6>
                  <small className="text-muted">{item.date}</small>
                </div>

                <span
                  className={`badge ${
                    item.status === "Pending"
                      ? "bg-warning text-dark"
                      : "bg-success"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
