import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "fan@demo.com",
    phone: "+1234567890",
    country: "United States",
    bio: "Biggest fan since 2010!",
  });

  // Handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container py-4">
      <div className="card p-4 shadow-sm border-0 rounded-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h6 className="fw-bold">Personal Information</h6>

          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "save" : "Edit Profile"}
          </button>
        </div>

        {/* Avatar */}
        <div className="d-flex justify-content-center mb-4">
          <div
            className="d-flex align-items-center justify-content-center text-white fw-bold"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, purple, blue)",
              fontSize: "24px",
            }}
          >
            JD
          </div>
        </div>

        {/* Form */}
        <div className="row g-4">
          {/* Name */}
          <div className="col-md-6">
            <label className="fw-semibold mb-1">Full Name</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className={`form-control ${
                  isEditing ? "bg-light text-muted" : "bg-light border-0"
                }`}
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="fw-semibold mb-1">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <FaEnvelope />
              </span>
              <input
                type="email"
                value={formData.email}
                disabled
                className={`form-control ${
                  isEditing ? "bg-light text-muted" : "bg-light border-0"
                }`}
              />
            </div>
            <small className="text-muted">Email cannot be changed</small>
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label className="fw-semibold mb-1">Phone Number</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <FaPhone />
              </span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className={`form-control ${
                  isEditing ? "bg-light text-muted" : "bg-light border-0"
                }`}
              />
            </div>
          </div>

          {/* Country */}
          <div className="col-md-6">
            <label className="fw-semibold mb-1">Country</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <FaGlobe />
              </span>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                disabled={!isEditing}
                className={`form-control ${
                  isEditing ? "bg-light text-muted" : "bg-light border-0"
                }`}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="col-12">
            <label className="fw-semibold mb-1">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              disabled={!isEditing}
              className={`form-control ${
                isEditing ? "bg-light text-muted" : "bg-light border-0"
              }`}
              rows="3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
