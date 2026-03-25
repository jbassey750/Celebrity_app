import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // 🔥 Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
    bio: ""
  });

  const [error, setError] = useState("");

  // 🔥 Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      return setError("All required fields must be filled");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.email === email) {
      return setError("User already exists");
    }

    const newUser = { fullName, email };

    localStorage.setItem("user", JSON.stringify(newUser));

    dispatch(login(newUser));
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
      <div className="card p-4 p-md-5 shadow-sm border-0 rounded-4" style={{ maxWidth: "650px", width: "100%" }}>

        <h2 className="fw-bold mb-1">Create Your Account</h2>
        <p className="text-muted mb-4">
          Join thousands of fans and start your journey
        </p>

        {/* 🔴 Error */}
        {error && (
          <div className="alert alert-danger py-2 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="fw-semibold">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control bg-light border-0"
                placeholder="John Doe"
              />
            </div>

            <div className="col-md-6">
              <label className="fw-semibold">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control bg-light border-0"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="fw-semibold">Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control bg-light border-0"
                placeholder="••••••••"
              />
            </div>

            <div className="col-md-6">
              <label className="fw-semibold">Confirm Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control bg-light border-0"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="fw-semibold">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control bg-light border-0"
                placeholder="+1 234 567 890"
              />
            </div>

            <div className="col-md-6">
              <label className="fw-semibold">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control bg-light border-0"
                placeholder="Your country"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="fw-semibold">About You</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="form-control bg-light border-0"
              rows="3"
              placeholder="Tell us about yourself..."
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">
            Create Account
          </button>

        </form>

        <div className="text-center mt-4">
          <span className="text-muted">Already have an account? </span>
          <Link to="/auth/login" className="fw-bold text-decoration-none" style={{ color: "#9d00ff" }}>
            Sign in
          </Link>
        </div>

      </div>
    </div>
  );
}