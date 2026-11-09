import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaEdit,
  FaCheck,
  FaTimes,
  FaCamera,
  FaShieldAlt,
  FaRegUserCircle
} from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "fan@demo.com",
    phone: "+1234567890",
    country: "United States",
    bio: "Biggest fan since 2010!"
  });

  const [savedData, setSavedData] = useState(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setSavedData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(savedData);
    setIsEditing(false);
  };

  const initials = formData.name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const fields = [
    {
      label: "Full Name",
      name: "name",
      icon: <FaUser />,
      type: "text",
      placeholder: "Enter your full name"
    },
    {
      label: "Email Address",
      name: "email",
      icon: <FaEnvelope />,
      type: "email",
      placeholder: "Your email address",
      readOnly: true
    },
    {
      label: "Phone Number",
      name: "phone",
      icon: <FaPhone />,
      type: "tel",
      placeholder: "Enter your phone number"
    },
    {
      label: "Country",
      name: "country",
      icon: <FaGlobe />,
      type: "text",
      placeholder: "Enter your country"
    }
  ];

  return (
    <div className="container-fluid py-4 px-3 px-md-4" style={{ background: "#f7f7fb", minHeight: "100vh" }}>
      <style>{`
        .profile-wrapper {
          max-width: 1050px;
          margin: 0 auto;
        }

        .profile-card {
          border: 1px solid #eeeef3;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 5px 25px rgba(20, 20, 50, 0.04);
        }

        .profile-banner {
          height: 175px;
          background: linear-gradient(120deg, #7414c5, #a000b8, #d02b94);
          border-radius: 18px 18px 0 0;
          position: relative;
        }

        .profile-avatar {
          width: 112px;
          height: 112px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7615ca, #d02b94);
          border: 5px solid #fff;
          color: white;
          font-size: 32px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,.12);
        }

        .profile-input {
          height: 48px;
          border: 1px solid #e9e9f0;
          border-radius: 10px !important;
          background: #fafafd;
          font-size: 14px;
          padding: 10px 14px;
          color: #29293a;
          transition: .2s ease;
        }

        .profile-input:focus {
          border-color: #a000b8;
          box-shadow: 0 0 0 3px rgba(160,0,184,.08);
          background: #fff;
        }

        .profile-input:disabled {
          background: #f8f8fb;
          color: #555568;
          opacity: 1;
          cursor: default;
        }

        .profile-icon {
          color: #a000b8;
          font-size: 14px;
        }

        .profile-label {
          font-size: 13px;
          font-weight: 600;
          color: #454557;
          margin-bottom: 9px;
        }

        .profile-action {
          background: linear-gradient(120deg, #7615ca, #b000a8);
          border: none;
          color: white;
          border-radius: 9px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          transition: .2s ease;
        }

        .profile-action:hover {
          color: white;
          opacity: .9;
          transform: translateY(-1px);
        }

        .profile-secondary {
          border: 1px solid #e4e4ec;
          color: #555568;
          background: #fff;
          border-radius: 9px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
        }

        .profile-secondary:hover {
          background: #f7f7fb;
        }

        .profile-textarea {
          min-height: 110px;
          resize: vertical;
        }

        @media (max-width: 576px) {
          .profile-banner {
            height: 135px;
          }

          .profile-avatar {
            width: 90px;
            height: 90px;
            font-size: 26px;
          }

          .profile-heading {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="profile-wrapper">

        {/* Page Heading */}
        <div className="mb-4">
          <h4 className="fw-bold mb-1 profile-heading" style={{ color: "#25253a" }}>
            My Profile
          </h4>
          <p className="text-muted small mb-0">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Main Profile Card */}
        <div className="profile-card overflow-hidden mb-4">

          {/* Banner */}
          <div className="profile-banner">
            <div className="position-absolute top-0 end-0 p-4 text-white opacity-50">
              <FaRegUserCircle size={65} />
            </div>
          </div>

          {/* Profile Information */}
          <div className="px-4 px-md-5 pb-4">

            <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between"
              style={{ marginTop: "-55px" }}>

              <div className="d-flex flex-column flex-sm-row align-items-sm-end gap-3">
                <div className="profile-avatar">
                  {initials || "JD"}
                </div>

                <div className="pb-2">
                  <h5 className="fw-bold mb-1" style={{ color: "#25253a" }}>
                    {formData.name}
                  </h5>
                  <p className="text-muted small mb-0">
                    {formData.email}
                  </p>
                </div>
              </div>

              <div className="mt-3 mt-md-0 pb-md-2">
                {!isEditing ? (
                  <button
                    className="profile-action"
                    onClick={() => setIsEditing(true)}
                  >
                    <FaEdit className="me-2" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="d-flex gap-2">
                    <button
                      className="profile-secondary"
                      onClick={handleCancel}
                    >
                      <FaTimes className="me-1" />
                      Cancel
                    </button>

                    <button
                      className="profile-action"
                      onClick={handleSave}
                    >
                      <FaCheck className="me-1" />
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            </div>

            <hr className="my-4" />

            {/* Section Heading */}
            <div className="mb-4">
              <h6 className="fw-bold mb-1" style={{ color: "#25253a" }}>
                Personal Information
              </h6>
              <p className="text-muted small mb-0">
                Your personal details and contact information.
              </p>
            </div>

            {/* Information Fields */}
            <div className="row g-4">
              {fields.map((field) => (
                <div className="col-md-6" key={field.name}>
                  <label className="profile-label d-block">
                    {field.label}
                  </label>

                  <div className="position-relative">
                    <span className="position-absolute top-50 translate-middle-y profile-icon"
                      style={{ left: "15px", zIndex: 2 }}>
                      {field.icon}
                    </span>

                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      disabled={!isEditing || field.readOnly}
                      className="form-control profile-input"
                      style={{ paddingLeft: "42px" }}
                      placeholder={field.placeholder}
                    />
                  </div>

                  {field.readOnly && (
                    <small className="text-muted mt-2 d-block">
                      <FaShieldAlt className="me-1 text-success" />
                      Email address cannot be changed.
                    </small>
                  )}
                </div>
              ))}

              {/* Bio */}
              <div className="col-12">
                <label className="profile-label d-block">
                  About Me
                </label>

                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="form-control profile-input profile-textarea"
                  placeholder="Tell celebrities and other fans a little about yourself..."
                />

                <small className="text-muted mt-2 d-block">
                  Share a little about yourself and your interests.
                </small>
              </div>
            </div>

            {/* Account Information */}
            <div className="mt-5 p-3 rounded-3 d-flex align-items-center gap-3"
              style={{ background: "#faf6ff", border: "1px solid #eee3fa" }}>
              <div className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "42px", height: "42px", background: "#f0e2ff", color: "#8c20bd" }}>
                <FaShieldAlt />
              </div>

              <div>
                <h6 className="fw-bold small mb-1" style={{ color: "#3c2850" }}>
                  Your account, your privacy
                </h6>
                <p className="text-muted small mb-0">
                  Keep your profile information accurate and up to date.
                </p>
              </div>
            </div>

          </div>
        </div>

        <p className="text-center text-muted small">
          Your profile information is only used to personalize your experience.
        </p>

      </div>
    </div>
  );
};

export default Profile;