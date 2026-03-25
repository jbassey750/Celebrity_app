import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🔥 Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // 🔥 Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email === "admin@gmail.com" && password === "123456") {
      const userData = { email };

      dispatch(login(userData));
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#fdfdfd" }}
    >
      <div
        className="card shadow-sm border-0 p-4 rounded-4"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <h3 className="fw-bold mb-1">Welcome Back</h3>
        <p className="text-muted mb-4 small">
          Sign in to your account to continue
        </p>

        {/* 🔴 Error */}
        {error && (
          <div className="alert alert-danger py-2 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold small mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control bg-light border-0 py-2 rounded-3 shadow-none"
              placeholder="your@email.com"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold small mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control bg-light border-0 py-2 rounded-3 shadow-none"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-dark w-100 py-2 mb-4 fw-bold rounded-3"
            style={{ backgroundColor: "#050517" }}
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center mb-4">
          <hr className="flex-grow-1 m-0" />
          <span className="mx-3 text-muted" style={{ fontSize: "11px" }}>
            DEMO ACCOUNTS
          </span>
          <hr className="flex-grow-1 m-0" />
        </div>

        {/* Demo Accounts */}
        <div className="bg-light p-3 rounded-3 mb-2">
          <p className="mb-0 fw-bold">Fan Account:</p>
          <p className="mb-0 text-muted">
            fan@demo.com / any password
          </p>
        </div>

        <div className="bg-light p-3 rounded-3 mb-4">
          <p className="mb-0 fw-bold">Celebrity Account:</p>
          <p className="mb-0 text-muted">
            celebrity@demo.com / any password
          </p>
        </div>

        {/* Footer */}
        <p className="text-center mb-0">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-decoration-none fw-semibold"
            style={{ color: "#9d00ff" }}
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}