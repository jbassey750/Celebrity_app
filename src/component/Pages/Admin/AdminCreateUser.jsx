import React, { useState } from 'react';
import { FaUserPlus, FaEnvelope, FaLock, FaUser, FaArrowLeft } from 'react-icons/fa';

const AdminCreateUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    createdByAdmin: true,
    hasPaid: false
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  // Clean, consistent styling for admin inputs
  const inputStyle = {
    backgroundColor: "#f3f4f6",
    border: "1px solid #eef0f2",
    padding: "12px 16px 12px 45px",
    borderRadius: "10px",
    color: "#000",
    fontSize: "14px"
  };

  const iconStyle = {
    position: 'absolute',
    left: '15px',
    top: '42px',
    color: '#9d00ff'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating user:", formData);
    setStatus({ type: 'success', message: 'User created successfully!' });
    
    setTimeout(() => setStatus({ type: '', message: '' }), 3000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          
          {/* Header */}
          <div className="mb-4 d-flex align-items-center justify-content-between">
            <div>
              <h2 className="fw-bold mb-1">Create New Fan</h2>
              <p className="text-muted small">Manually register a user to the platform</p>
            </div>
            <FaUserPlus size={30} className="text-primary opacity-50" />
          </div>

          {/* Form Card */}
          <div className="card p-4 p-md-5 shadow-sm border-0 rounded-4" 
               style={{ backgroundColor: "#ffffff", color: "#000" }}>
            
            {status.message && (
              <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} border-0 small mb-4`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              
              <div className="mb-4 position-relative">
                <label className="form-label small fw-bold mb-2">Username</label>
                <FaUser style={iconStyle} />
                <input 
                  type="text" 
                  className="form-control shadow-none" 
                  placeholder="Enter username" 
                  style={inputStyle}
                  required
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>

              <div className="mb-4 position-relative">
                <label className="form-label small fw-bold mb-2">Email Address</label>
                <FaEnvelope style={iconStyle} />
                <input 
                  type="email" 
                  className="form-control shadow-none" 
                  placeholder="example@mail.com" 
                  style={inputStyle}
                  required
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="mb-4 position-relative">
                <label className="form-label small fw-bold mb-2">Initial Password</label>
                <FaLock style={iconStyle} />
                <input 
                  type="password" 
                  className="form-control shadow-none" 
                  placeholder="••••••••" 
                  style={inputStyle}
                  required
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              <div className="d-flex gap-3 mb-4">
                <div className="badge bg-primary bg-opacity-10 text-primary p-2 px-3 border border-primary border-opacity-25 rounded-pill">
                  Admin Created: True
                </div>
                <div className="badge bg-secondary bg-opacity-10 text-secondary p-2 px-3 border border-secondary border-opacity-25 rounded-pill">
                  Payment Bypass: Active
                </div>
              </div>

              <button 
                type="submit" 
                className="btn w-100 py-3 fw-bold text-white border-0 shadow-sm mt-2"
                style={{ background: "linear-gradient(135deg, #9d00ff, #ff00ea)", borderRadius: "12px" }}>
                Register User
              </button>
            </form>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-link text-decoration-none text-muted small d-flex align-items-center justify-content-center mx-auto gap-2">
              <FaArrowLeft size={12} /> Back to User List
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminCreateUser;