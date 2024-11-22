import React from "react";
import { useLocation } from "react-router-dom";
import "../public/styles.css";

function HomePath() {
  const location = useLocation();

  return (
    <div className="home-container">
      {/* Hero Image Section */}
      <div className="hero-image">
        <h1 className="hero-title">Welcome to the Library</h1>
      </div>
      {/* Content Section */}
      <div className="home-content">
        <p className="home-description">
          Browse our collection of books or add a new one to the list. Discover
          a world of knowledge and stories!
        </p>
      </div>
    </div>
  );
}

export default HomePath;
