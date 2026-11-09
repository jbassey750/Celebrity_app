import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaStar,
  FaCalendarAlt,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaMicrophone,
  FaTimes,
  FaSlidersH
} from "react-icons/fa";

// Sample Data
const CELEBRITIES = [
  {
    id: 1,
    name: "Alex Rivers",
    category: "Music Artist",
    description: "Grammy-winning pop artist with 5 platinum albums.",
    tags: ["Music", "Pop", "Entertainment"],
    rating: 4.9,
    reviews: 342,
    sessions: 156,
    price: 49.99,
    status: "available",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Sophia Chen",
    category: "Film Actor",
    description: "Award-winning actress known for blockbuster roles.",
    tags: ["Film", "Hollywood", "Acting"],
    rating: 5.0,
    reviews: 521,
    sessions: 243,
    price: 79.99,
    status: "limited",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    category: "Professional Athlete",
    description: "Olympic gold medalist and world champion.",
    tags: ["Sports", "Olympics", "Fitness"],
    rating: 4.8,
    reviews: 289,
    sessions: 134,
    price: 59.99,
    status: "available",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const BrowseCelebrities = () => {
  const { theme } = useContext(ThemeContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");

  const isDark = theme === "dark";

  const categories = [
    "All Categories",
    "Music Artist",
    "Film Actor",
    "Professional Athlete",
    "Tech Entrepreneur"
  ];

  // Filter Logic
  const filteredCelebrities = CELEBRITIES.filter((celeb) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      celeb.name.toLowerCase().includes(search) ||
      celeb.category.toLowerCase().includes(search) ||
      celeb.tags.some((tag) => tag.toLowerCase().includes(search));

    const matchesCategory =
      category === "All Categories" || celeb.category === category;

    return matchesSearch && matchesCategory;
  });

  const colors = {
    background: isDark ? "#0a0a1a" : "#f7f7fb",
    card: isDark ? "#16162d" : "#ffffff",
    heading: isDark ? "#ffffff" : "#25253a",
    text: isDark ? "#b8b8cc" : "#77778b",
    border: isDark ? "#292943" : "#eeeef3",
    input: isDark ? "#16162d" : "#ffffff",
    tag: isDark ? "#24243e" : "#f5f1fa"
  };

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.heading,
        minHeight: "100vh",
        paddingBottom: "50px"
      }}
    >
      <style>{`
        .celebrity-hero {
          background: linear-gradient(120deg, #7615ca, #a000b8, #d02b94);
          border-radius: 20px;
          padding: 38px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .celebrity-hero::after {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          border: 35px solid rgba(255,255,255,.08);
          right: -65px;
          top: -100px;
        }

        .celebrity-search {
          height: 52px;
          border: 1px solid ${colors.border};
          background: ${colors.input};
          color: ${colors.heading};
          border-radius: 12px;
          padding-left: 45px;
          font-size: 14px;
        }

        .celebrity-search:focus {
          border-color: #a000b8;
          box-shadow: 0 0 0 3px rgba(160,0,184,.08);
          background: ${colors.input};
          color: ${colors.heading};
        }

        .celebrity-search::placeholder {
          color: ${colors.text};
        }

        .celebrity-select {
          height: 52px;
          border: 1px solid ${colors.border};
          background-color: ${colors.input};
          color: ${colors.heading};
          border-radius: 12px;
          font-size: 14px;
        }

        .celebrity-select:focus {
          border-color: #a000b8;
          box-shadow: 0 0 0 3px rgba(160,0,184,.08);
        }

        .celebrity-card {
          background: ${colors.card};
          border: 1px solid ${colors.border};
          border-radius: 17px;
          overflow: hidden;
          height: 100%;
          transition: all .25s ease;
          box-shadow: 0 4px 18px rgba(20,20,50,.035);
        }

        .celebrity-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(90,30,130,.12);
        }

        .celebrity-image-wrapper {
          height: 245px;
          overflow: hidden;
          position: relative;
          background: #eee;
        }

        .celebrity-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .celebrity-card:hover .celebrity-image {
          transform: scale(1.05);
        }

        .celebrity-status {
          position: absolute;
          top: 15px;
          right: 15px;
          border-radius: 30px;
          padding: 7px 12px;
          font-size: 10px;
          font-weight: 700;
          text-transform: capitalize;
          letter-spacing: .3px;
          backdrop-filter: blur(8px);
        }

        .status-available {
          background: rgba(18,160,95,.93);
          color: white;
        }

        .status-limited {
          background: rgba(232,153,30,.95);
          color: white;
        }

        .celebrity-category {
          color: #a000b8;
          font-size: 12px;
          font-weight: 700;
        }

        .celebrity-tag {
          background: ${colors.tag};
          color: ${colors.text};
          border: 1px solid ${colors.border};
          border-radius: 6px;
          padding: 5px 9px;
          font-size: 10px;
          font-weight: 600;
        }

        .celebrity-register {
          background: linear-gradient(120deg, #7615ca, #b000a8);
          border: none;
          color: white;
          border-radius: 9px;
          padding: 10px 15px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: .2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .celebrity-register:hover {
          color: white;
          opacity: .9;
          transform: translateY(-2px);
        }

        .celebrity-filter {
          border: 1px solid ${colors.border};
          background: ${colors.card};
          color: ${colors.text};
          border-radius: 9px;
          padding: 9px 15px;
          font-size: 12px;
          font-weight: 600;
          transition: .2s;
        }

        .celebrity-filter.active {
          background: #f3e8ff;
          color: #8515ba;
          border-color: #e4c8ff;
        }

        .celebrity-empty {
          border: 1px dashed ${colors.border};
          border-radius: 15px;
          padding: 55px 20px;
          background: ${colors.card};
        }

        @media(max-width: 576px) {
          .celebrity-hero {
            padding: 25px 20px;
          }

          .celebrity-hero h2 {
            font-size: 23px;
          }

          .celebrity-image-wrapper {
            height: 225px;
          }
        }
      `}</style>

      <div className="container py-4">

        {/* Welcome Hero */}
        <div className="celebrity-hero mb-4">
          <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-3"
              style={{ background: "rgba(255,255,255,.15)", fontSize: "11px" }}>
              <FaMicrophone />
              THE CELEBRITY EXPERIENCE
            </div>

            <h2 className="fw-bold mb-2">
              Discover Your Favourite Stars
            </h2>

            <p className="mb-0 small" style={{ maxWidth: "470px", opacity: .9, lineHeight: 1.8 }}>
              Connect with the people who inspire you. Discover celebrities,
              explore exclusive sessions and create unforgettable experiences.
            </p>

            <div className="d-flex align-items-center gap-4 mt-4 flex-wrap">
              <div className="d-flex align-items-center gap-2 small">
                <FaUsers />
                <span>Exclusive experiences</span>
              </div>

              <div className="d-flex align-items-center gap-2 small">
                <FaCheckCircle />
                <span>Personal connections</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Heading */}
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-2 mb-4">
          <div>
            <h4 className="fw-bold mb-1" style={{ color: colors.heading }}>
              Explore Celebrities
            </h4>
            <p className="small mb-0" style={{ color: colors.text }}>
              Find and connect with your favourite personalities.
            </p>
          </div>

          <div className="small fw-semibold" style={{ color: colors.text }}>
            {filteredCelebrities.length} {filteredCelebrities.length === 1 ? "Celebrity" : "Celebrities"} found
          </div>
        </div>

        {/* Search and Filter */}
        <div className="row g-3 mb-4">
          <div className="col-lg-8">
            <div className="position-relative">
              <FaSearch
                className="position-absolute top-50 translate-middle-y"
                style={{ left: "16px", color: colors.text, zIndex: 2 }}
              />

              <input
                type="text"
                className="form-control celebrity-search shadow-none"
                placeholder="Search by name, category or interest..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {searchTerm && (
                <button
                  type="button"
                  className="btn position-absolute top-50 translate-middle-y p-0"
                  style={{ right: "15px", color: colors.text }}
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="position-relative">
              <FaSlidersH
                className="position-absolute top-50 translate-middle-y"
                style={{ left: "15px", color: colors.text, zIndex: 2 }}
              />

              <select
                className="form-select celebrity-select shadow-none"
                style={{ paddingLeft: "40px" }}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Quick Filters */}
        <div className="d-flex gap-2 flex-wrap mb-4">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`celebrity-filter ${category === item ? "active" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Celebrity Grid */}
        <div className="row g-4">
          {filteredCelebrities.length > 0 ? (
            filteredCelebrities.map((celeb) => (
              <div className="col-12 col-md-6 col-xl-4" key={celeb.id}>
                <div className="celebrity-card">

                  {/* Celebrity Image */}
                  <div className="celebrity-image-wrapper">
                    <img
                      src={celeb.image}
                      alt={celeb.name}
                      className="celebrity-image"
                      loading="lazy"
                    />

                    <span className={`celebrity-status ${
                      celeb.status === "available"
                        ? "status-available"
                        : "status-limited"
                    }`}>
                      {celeb.status === "available" ? "Available" : "Limited Availability"}
                    </span>
                  </div>

                  {/* Celebrity Details */}
                  <div className="p-4">

                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <h5 className="fw-bold mb-1" style={{ color: colors.heading }}>
                          {celeb.name}
                          <FaCheckCircle
                            className="ms-2"
                            style={{ color: "#8e24aa", fontSize: "13px" }}
                            title="Verified profile"
                          />
                        </h5>

                        <p className="celebrity-category mb-2">
                          {celeb.category}
                        </p>
                      </div>

                      <div className="d-flex align-items-center gap-1 small fw-bold flex-shrink-0"
                        style={{ color: colors.heading }}>
                        <FaStar style={{ color: "#f5b82e" }} />
                        {celeb.rating}
                      </div>
                    </div>

                    <p className="small mb-3"
                      style={{ color: colors.text, lineHeight: 1.7, minHeight: "45px" }}>
                      {celeb.description}
                    </p>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {celeb.tags.map((tag) => (
                        <span className="celebrity-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Statistics */}
                    <div className="d-flex align-items-center gap-3 flex-wrap small mb-3"
                      style={{ color: colors.text }}>
                      <span>
                        <FaStar className="me-1" style={{ color: "#f5b82e" }} />
                        {celeb.reviews} reviews
                      </span>

                      <span>
                        <FaCalendarAlt className="me-1" />
                        {celeb.sessions} sessions
                      </span>
                    </div>

                    <hr style={{ borderColor: colors.border, opacity: 1 }} />

                    {/* Price and Register */}
                    <div className="d-flex justify-content-between align-items-center gap-2">
                      <div>
                        <small className="d-block" style={{ color: colors.text, fontSize: "11px" }}>
                          Starting from
                        </small>

                        <h5 className="fw-bold mb-0" style={{ color: "#a000b8" }}>
                          ${celeb.price.toFixed(2)}
                          <small className="fw-normal ms-1"
                            style={{ color: colors.text, fontSize: "11px" }}>
                            / session
                          </small>
                        </h5>
                      </div>

                      <Link
                        to={`/app/payment/${celeb.id}`}
                        className="celebrity-register"
                      >
                        Register
                        <FaArrowRight size={11} />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="celebrity-empty text-center">
                <div className="mb-3" style={{ color: "#a000b8", fontSize: "35px" }}>
                  <FaSearch />
                </div>

                <h5 className="fw-bold" style={{ color: colors.heading }}>
                  No celebrities found
                </h5>

                <p className="small mb-3" style={{ color: colors.text }}>
                  We couldn't find anyone matching your search. Try another name or category.
                </p>

                <button
                  className="celebrity-register"
                  onClick={() => {
                    setSearchTerm("");
                    setCategory("All Categories");
                  }}
                >
                  Clear Filters
                  <FaTimes />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default BrowseCelebrities;