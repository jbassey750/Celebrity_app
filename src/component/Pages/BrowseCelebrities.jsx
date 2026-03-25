import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// Sample Data
const CELEBRITIES = [
  { id: 1, name: "Alex Rivers", category: "Music Artist", description: "Grammy-winning pop artist with 5 platinum albums.", tags: ["Music", "Pop", "Entertainment"], rating: 4.9, reviews: 342, sessions: 156, price: 49.99, status: "available", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, name: "Sophia Chen", category: "Film Actor", description: "Award-winning actress known for blockbuster roles.", tags: ["Film", "Hollywood", "Acting"], rating: 5.0, reviews: 521, sessions: 243, price: 79.99, status: "limited", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 3, name: "Marcus Johnson", category: "Professional Athlete", description: "Olympic gold medalist and world champion.", tags: ["Sports", "Olympics", "Fitness"], rating: 4.8, reviews: 289, sessions: 134, price: 59.99, status: "available", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

const BrowseCelebrities = () => {
  const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");

  const isDark = theme === "dark";

  // Filter Logic
  const filteredCelebrities = CELEBRITIES.filter((celeb) => {
    const matchesSearch = celeb.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All Categories" || celeb.category === category;
    return matchesSearch && matchesCategory;
  });

  const pageStyles = {
    backgroundColor: isDark ? "#0a0a1a" : "#f8f9fa",
    color: isDark ? "#ffffff" : "#000000",
    minHeight: "100vh"
  };

  return (
    <div style={pageStyles}>
      {/* PURPLE HEADER */}
      <div style={{ background: "linear-gradient(90deg, #9d00ff, #ff00ea)", padding: "60px 20px" }} className="text-white text-center">
        <h1 className="fw-bold">Browse Celebrities</h1>
        <p>Choose your favorite celebrity and book an exclusive chat session</p>
      </div>

      <div className="container py-4">
        {/* SEARCH AND FILTER BAR */}
        <div className="row g-2 mb-4">
          <div className="col-md-9">
            <input
              type="text"
              className="form-control shadow-none border-0 p-3"
              placeholder="Search celebrities by name, category, or interest..."
              style={{ backgroundColor: isDark ? "#16162d" : "#ffffff", color: isDark ? "white" : "black" }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select shadow-none border-0 p-3"
              style={{ backgroundColor: isDark ? "#16162d" : "#ffffff", color: isDark ? "white" : "black" }}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Music Artist</option>
              <option>Film Actor</option>
              <option>Professional Athlete</option>
              <option>Tech Entrepreneur</option>
            </select>
          </div>
        </div>

        <p className="text-muted small">Showing {filteredCelebrities.length} celebrities</p>

        {/* GRID */}
        <div className="row g-4">
          {filteredCelebrities.map((celeb) => (
            <div className="col-12 col-md-6 col-lg-4" key={celeb.id}>
              <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ backgroundColor: isDark ? "#16162d" : "#ffffff", borderRadius: "15px" }}>
                <div style={{ position: "relative" }}>
                  <img src={celeb.image} alt={celeb.name} className="w-100" style={{ height: "250px", objectFit: "cover" }} />
                  <span className={`badge position-absolute top-0 end-0 m-3 ${celeb.status === "available" ? "bg-success" : "bg-warning"}`} style={{ opacity: "0.9" }}>
                    {celeb.status}
                  </span>
                </div>
                
                <div className="card-body p-4">
                  <h4 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>{celeb.name}</h4>
                  <p className="text-primary small fw-bold mb-2">{celeb.category}</p>
                  <p className="text-muted small mb-3" style={{ height: "40px", overflow: "hidden" }}>{celeb.description}</p>
                  
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {celeb.tags.map(tag => (
                      <span key={tag} className="badge bg-light text-dark border px-2 py-1" style={{ fontSize: "10px" }}>{tag}</span>
                    ))}
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-4 small text-muted">
                    <span>⭐ {celeb.rating} ({celeb.reviews} reviews)</span>
                    <span>📅 {celeb.sessions} sessions</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-bold" style={{ color: "#9d00ff" }}>${celeb.price}<small className="text-muted fw-light">/session</small></h5>
                    <button className="btn text-white px-2 fw-bold" style={{ backgroundColor: "#9d00ff", borderRadius: "8px" }}> <Link to={`/checkout`}>Buy Ticket</Link></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCelebrities;