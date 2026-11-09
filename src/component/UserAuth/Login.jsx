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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔥 Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;

    if (!email || !password) {
      return setError("Email and password are required");
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://artiste-meetup.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const message = data?.message || data?.error || "Login failed";
        throw new Error(message);
      }

      const user = data?.user || data?.data || { email };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(login(user));
      console.log("Login successful:", user);
      navigate("/app");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setIsSubmitting(false);
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
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