
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaComment,
  FaArrowRight,
  FaStar,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const userName =
    user?.user?.name ||
    user?.user?.email ||
    "User";

  // Dummy Booking Data
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

  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (item) => item.status === "Pending"
  ).length;

  const confirmedBookings = bookings.filter(
    (item) => item.status === "Confirmed"
  ).length;

  // Keep this as a placeholder until real chat data is available.
  const activeChats = 0;

  const stats = [
    {
      title: "Total Bookings",
      value: totalBookings,
      icon: <FaCalendarAlt />,
      color: "#7952d8",
      background: "#f1ebff",
    },
    {
      title: "Pending",
      value: pendingBookings,
      icon: <FaClock />,
      color: "#e69a25",
      background: "#fff5df",
    },
    {
      title: "Confirmed",
      value: confirmedBookings,
      icon: <FaCheckCircle />,
      color: "#20a779",
      background: "#e5f8f0",
    },
    {
      title: "Active Chats",
      value: activeChats,
      icon: <FaComment />,
      color: "#4388d8",
      background: "#eaf3ff",
    },
  ];

  return (
    <div className="container py-4 dashboard-page">
      <style>{`
        .dashboard-page {
          color: #29243a;
        }

        .dashboard-hero {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          padding: 35px;
          background: linear-gradient(120deg, #7041c5, #a34dba, #e47aa7);
          color: white;
          box-shadow: 0 12px 30px rgba(112, 65, 197, 0.16);
        }

        .dashboard-hero::after {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: rgba(255,255,255,0.09);
          right: -65px;
          top: -100px;
        }

        .dashboard-hero::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          right: 100px;
          bottom: -100px;
        }

        .dashboard-hero-content {
          position: relative;
          z-index: 1;
        }

        .dashboard-hero h2 {
          font-weight: 800;
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 10px;
        }

        .dashboard-hero p {
          color: rgba(255,255,255,0.85);
          max-width: 500px;
          margin-bottom: 22px;
        }

        .dashboard-primary-btn {
          background: white;
          color: #7041c5;
          border: none;
          border-radius: 10px;
          padding: 11px 20px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          transition: 0.25s ease;
        }

        .dashboard-primary-btn:hover {
          background: #f6f0ff;
          color: #6034b0;
          transform: translateY(-2px);
        }

        .dashboard-section-title {
          font-weight: 800;
          color: #29243a;
          font-size: 1.1rem;
        }

        .dashboard-stat-card {
          height: 100%;
          background: white;
          border: 1px solid #f0edf5;
          border-radius: 18px;
          padding: 21px;
          box-shadow: 0 5px 18px rgba(35, 20, 65, 0.045);
          transition: 0.25s ease;
        }

        .dashboard-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(35, 20, 65, 0.08);
        }

        .dashboard-stat-icon {
          width: 45px;
          height: 45px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
        }

        .dashboard-stat-value {
          font-size: 1.65rem;
          font-weight: 800;
          margin: 12px 0 3px;
          color: #29243a;
        }

        .dashboard-stat-label {
          color: #898397;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .dashboard-panel {
          background: white;
          border: 1px solid #f0edf5;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 5px 18px rgba(35, 20, 65, 0.045);
        }

        .dashboard-action {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px;
          border: 1px solid #eeeaf5;
          border-radius: 14px;
          text-decoration: none;
          color: #302a40;
          transition: 0.25s ease;
          height: 100%;
        }

        .dashboard-action:hover {
          border-color: #cdb8f5;
          background: #faf7ff;
          color: #7041c5;
          transform: translateY(-2px);
        }

        .dashboard-action-icon {
          width: 43px;
          height: 43px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1ebff;
          color: #7952d8;
          flex-shrink: 0;
          font-size: 17px;
        }

        .dashboard-booking {
          border: 1px solid #eeeaf5;
          border-radius: 14px;
          padding: 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          transition: 0.2s ease;
        }

        .dashboard-booking:hover {
          border-color: #d6c6f5;
          background: #fcfaff;
        }

        .dashboard-booking-icon {
          width: 43px;
          height: 43px;
          border-radius: 12px;
          background: #f1ebff;
          color: #7952d8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 17px;
        }

        .dashboard-booking-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 7px 11px;
          border-radius: 20px;
          white-space: nowrap;
        }

        .dashboard-empty {
          padding: 40px 15px;
          text-align: center;
          color: #898397;
        }

        .dashboard-empty-icon {
          width: 65px;
          height: 65px;
          background: #f3edff;
          color: #7952d8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          margin: 0 auto 15px;
        }

        .dashboard-text-link {
          color: #7952d8;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .dashboard-text-link:hover {
          color: #6034b0;
        }

        @media (max-width: 576px) {
          .dashboard-page {
            padding-left: 12px;
            padding-right: 12px;
          }

          .dashboard-hero {
            padding: 25px 20px;
            border-radius: 18px;
          }

          .dashboard-panel {
            padding: 18px;
          }

          .dashboard-stat-card {
            padding: 16px;
          }

          .dashboard-stat-value {
            font-size: 1.4rem;
          }

          .dashboard-booking {
            align-items: flex-start;
          }
        }
      `}</style>

      {/* Welcome Header */}
      <div className="dashboard-hero mb-4">
        <div className="dashboard-hero-content">
          <div className="d-flex align-items-center gap-2 mb-3">
            <FaStar size={15} />
            <small className="fw-semibold">
              YOUR CELEBRITY EXPERIENCE STARTS HERE
            </small>
          </div>

          <h2>Welcome back, {userName}!</h2>

          <p>
            Your favourite celebrities are just a few clicks away.
            Manage your bookings, discover new stars, and enjoy
            exclusive experiences.
          </p>

          <Link to="/app/browse" className="dashboard-primary-btn">
            Explore Celebrities <FaArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-4">
        <div className="mb-3">
          <h5 className="dashboard-section-title mb-1">
            Your Overview
          </h5>
          <small className="text-muted">
            A quick look at your account activity
          </small>
        </div>

        <div className="row g-3">
          {stats.map((stat, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div className="dashboard-stat-card">
                <div
                  className="dashboard-stat-icon"
                  style={{
                    background: stat.background,
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                </div>

                <h3 className="dashboard-stat-value">
                  {stat.value}
                </h3>

                <div className="dashboard-stat-label">
                  {stat.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-panel mb-4">
        <div className="mb-3">
          <h5 className="dashboard-section-title mb-1">
            Quick Actions
          </h5>
          <small className="text-muted">
            Everything you need, right at your fingertips
          </small>
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <Link to="/app/book" className="dashboard-action">
              <div className="dashboard-action-icon">
                <FaCalendarAlt />
              </div>

              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">
                  Book a Session
                </h6>
                <small className="text-muted">
                  Schedule a new celebrity experience
                </small>
              </div>

              <FaArrowRight size={13} />
            </Link>
          </div>

          <div className="col-md-6">
            <Link to="/app/profile" className="dashboard-action">
              <div className="dashboard-action-icon">
                <FaUserCircle />
              </div>

              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">
                  View Profile
                </h6>
                <small className="text-muted">
                  Manage your personal information
                </small>
              </div>

              <FaArrowRight size={13} />
            </Link>
          </div>

          <div className="col-md-6">
            <Link to="/app/browse" className="dashboard-action">
              <div className="dashboard-action-icon">
                <FaSearch />
              </div>

              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">
                  Discover Celebrities
                </h6>
                <small className="text-muted">
                  Find your favourite personalities
                </small>
              </div>

              <FaArrowRight size={13} />
            </Link>
          </div>

          <div className="col-md-6">
            <Link to="/app/checkout" className="dashboard-action">
              <div className="dashboard-action-icon">
                <FaStar />
              </div>

              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">
                  Membership Plans
                </h6>
                <small className="text-muted">
                  Explore available membership options
                </small>
              </div>

              <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* My Bookings */}
      <div className="dashboard-panel">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
          <div>
            <h5 className="dashboard-section-title mb-1">
              My Bookings
            </h5>
            <small className="text-muted">
              Keep track of your scheduled sessions
            </small>
          </div>

          <Link to="/app/book" className="dashboard-text-link">
            Book a Session <FaArrowRight size={11} />
          </Link>
        </div>

        {bookings.length === 0 ? (
          <div className="dashboard-empty">
            <div className="dashboard-empty-icon">
              <FaCalendarAlt />
            </div>

            <h6 className="fw-bold text-dark">
              No bookings yet
            </h6>

            <p className="small mb-3">
              You haven't scheduled any celebrity sessions.
              Start by exploring the celebrities available.
            </p>

            <Link
              to="/app/browse"
              className="dashboard-primary-btn"
              style={{
                background: "linear-gradient(120deg, #7041c5, #a34dba)",
                color: "white",
              }}
            >
              Explore Celebrities <FaArrowRight size={12} />
            </Link>
          </div>
        ) : (
          <div className="d-flex flex-column gap-3">
            {bookings.map((item) => (
              <div className="dashboard-booking" key={item.id}>
                <div className="d-flex align-items-center gap-3">
                  <div className="dashboard-booking-icon">
                    <FaCalendarAlt />
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      {item.name}
                    </h6>

                    <small className="text-muted">
                      <FaClock className="me-1" size={11} />
                      {item.date}
                    </small>
                  </div>
                </div>

                <span
                  className="dashboard-booking-badge"
                  style={{
                    background:
                      item.status === "Pending"
                        ? "#fff4dd"
                        : "#e3f8ed",
                    color:
                      item.status === "Pending"
                        ? "#b77916"
                        : "#168653",
                  }}
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
