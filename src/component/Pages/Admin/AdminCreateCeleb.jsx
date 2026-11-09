import React, { useState } from 'react';
import { 
  Star, 
  Upload, 
  Tag, 
  DollarSign, 
  User, 
  Music, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Save,
  Trash2
} from 'lucide-react';

const AdminCreateCeleb = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Music Artist",
    description: "",
    tags: [],
    rating: 0,
    reviews: 0,
    sessions: 0,
    price: 0,
    status: "available",
    image: null
  });

  const [currentTag, setCurrentTag] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Tag Logic
  const addTag = () => {
    if (currentTag && !formData.tags.includes(currentTag)) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, currentTag] }));
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tagToRemove) }));
  };

  const handleSave = () => {
    setShowSuccess(true);
    // Logic to send data to API would go here
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-0" style={{ color: '#2d3436' }}>Add New Celebrity</h2>
            <p className="text-muted">Create a professional profile for the talent roster.</p>
          </div>
          <div className="badge bg-white text-dark border p-2 px-3 shadow-sm">
            Step {currentStep} of 3
          </div>
        </div>

        <div className="row g-4">
          {/* Main Form Section */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-body p-4 p-md-5">
                
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <div className="animate__animated animate__fadeIn">
                    <h5 className="fw-bold mb-4 d-flex align-items-center">
                      <User className="me-2 text-primary" size={20} /> Basic Information
                    </h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label text-muted small fw-bold">CELEBRITY NAME</label>
                        <input 
                          type="text" 
                          name="name"
                          className="form-control form-control-lg border-2" 
                          placeholder="e.g. Alex Rivers"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label text-muted small fw-bold">CATEGORY</label>
                        <select name="category" className="form-select form-select-lg border-2" onChange={handleChange}>
                          <option>Music Artist</option>
                          <option>Actor</option>
                          <option>Athlete</option>
                          <option>Influencer</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label text-muted small fw-bold">DESCRIPTION</label>
                        <textarea 
                          name="description"
                          className="form-control border-2" 
                          rows="4" 
                          placeholder="Briefly describe their career and achievements..."
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Pricing & Metrics */}
                {currentStep === 2 && (
                  <div className="animate__animated animate__fadeIn">
                    <h5 className="fw-bold mb-4 d-flex align-items-center">
                      <DollarSign className="me-2 text-success" size={20} /> Pricing & Performance
                    </h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label text-muted small fw-bold">SESSION PRICE ($)</label>
                        <input 
                          type="number" 
                          name="price"
                          className="form-control form-control-lg border-2" 
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label text-muted small fw-bold">INITIAL RATING</label>
                        <input 
                          type="number" 
                          step="0.1" 
                          name="rating"
                          className="form-control form-control-lg border-2" 
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label text-muted small fw-bold">TOTAL REVIEWS</label>
                        <input 
                          type="number" 
                          name="reviews"
                          className="form-control form-control-lg border-2" 
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label text-muted small fw-bold">STATUS</label>
                        <select name="status" className="form-select form-select-lg border-2" onChange={handleChange}>
                          <option value="available">Available</option>
                          <option value="busy">Busy</option>
                          <option value="offline">Offline</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Media & Tags */}
                {currentStep === 3 && (
                  <div className="animate__animated animate__fadeIn">
                    <h5 className="fw-bold mb-4 d-flex align-items-center">
                      <Tag className="me-2 text-purple" size={20} /> Media & Tags
                    </h5>
                    <div className="mb-4">
                      <label className="form-label text-muted small fw-bold">PROFILE IMAGE URL</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white"><Upload size={18}/></span>
                        <input 
                          type="text" 
                          name="image"
                          className="form-control border-2" 
                          placeholder="https://images.pexels.com/..."
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-muted small fw-bold">TAGS</label>
                      <div className="d-flex gap-2">
                        <input 
                          type="text" 
                          className="form-control border-2" 
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          placeholder="Add a tag..."
                        />
                        <button className="btn btn-dark px-4" onClick={addTag}>Add</button>
                      </div>
                      <div className="mt-3 d-flex flex-wrap gap-2">
                        {formData.tags.map(tag => (
                          <span key={tag} className="badge bg-light text-dark border d-flex align-items-center p-2 px-3 rounded-pill">
                            {tag} <Trash2 size={14} className="ms-2 text-danger" style={{ cursor: 'pointer' }} onClick={() => removeTag(tag)} />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Navigation */}
                <hr className="my-5 opacity-10" />
                <div className="d-flex justify-content-between">
                  <button 
                    className="btn btn-outline-secondary px-4 py-2 rounded-3"
                    disabled={currentStep === 1}
                    onClick={() => setCurrentStep(prev => prev - 1)}
                  >
                    <ArrowLeft size={18} className="me-2" /> Back
                  </button>
                  
                  {currentStep < 3 ? (
                    <button 
                      className="btn btn-primary px-5 py-2 rounded-3 shadow"
                      style={{ background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)', border: 'none' }}
                      onClick={() => setCurrentStep(prev => prev + 1)}
                    >
                      Continue <ArrowRight size={18} className="ms-2" />
                    </button>
                  ) : (
                    <button 
                      className="btn btn-success px-5 py-2 rounded-3 shadow"
                      onClick={handleSave}
                    >
                      <Save size={18} className="me-2" /> Save Celebrity
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* Sidebar Preview */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 sticky-top" style={{ top: '20px' }}>
              <div className="card-header bg-dark text-white p-3 rounded-top-4 border-0">
                <span className="small fw-bold opacity-75">LIVE PREVIEW</span>
              </div>
              <div className="card-body p-0">
                <div style={{ height: '220px', backgroundColor: '#eee', overflow: 'hidden' }}>
                  {formData.image ? (
                    <img src={formData.image} alt="Preview" className="w-100 h-100 object-fit-cover" />
                  ) : (
                    <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-muted">
                       <Music size={40} className="mb-2 opacity-25" />
                       <span className="small">Image Preview</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="fw-bold mb-0">{formData.name || "Celebrity Name"}</h5>
                    <span className={`badge ${formData.status === 'available' ? 'bg-success' : 'bg-warning'} text-white`}>
                      {formData.status}
                    </span>
                  </div>
                  <p className="text-muted small mb-3">{formData.category}</p>
                  <p className="small text-secondary mb-3" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {formData.description || "Description will appear here..."}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Star className="text-warning fill-warning me-1" size={16} />
                      <span className="fw-bold small">{formData.rating}</span>
                      <span className="text-muted small ms-1">({formData.reviews})</span>
                    </div>
                    <div className="fw-bold text-primary">${formData.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup Modal */}
      {showSuccess && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1050 }}>
          <div className="card border-0 shadow-lg text-center p-5 rounded-5 animate__animated animate__zoomIn" style={{ maxWidth: '400px' }}>
            <div className="bg-success text-white rounded-circle d-inline-flex p-3 mb-4 mx-auto shadow">
              <CheckCircle size={50} />
            </div>
            <h3 className="fw-bold">Awesome!</h3>
            <p className="text-muted">Celebrity <strong>{formData.name}</strong> has been successfully added to the database.</p>
            <button 
              className="btn btn-dark w-100 py-3 rounded-pill mt-3 shadow-sm"
              onClick={() => window.location.reload()}
            >
              Add Another One
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCreateCeleb;