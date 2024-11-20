import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import '../public/styles.css'; // Import custom CSS file

function Home() {
  const [loading, setLoading] = useState(true);
  const hasLoaded = useRef(false); // A ref to track if the page has been loaded already
  const location = useLocation(); // Get the current location (URL path)

  useEffect(() => {
    // Only trigger the loading screen on the initial load (not on tab navigation)
    if (!hasLoaded.current && location.pathname === '/') {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // 3 seconds delay

      // Mark the component as loaded to prevent the overlay on subsequent renders
      hasLoaded.current = true;

      return () => clearTimeout(timer); // Clean up timer on component unmount
    } else {
      // Skip loading screen if it's not the first load or if not on the home page
      setLoading(false);
    }
  }, [location.pathname]); // Dependency on location.pathname to trigger on path change

  return (
    <div className="home-container">
      {/* Loading overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-message">
            Welcome to the Library!
          </div>
        </div>
      )}

      {/* Hero Image Section */}
      <div className="hero-image">
        <h1 className="hero-title">Welcome to the Library</h1>
      </div>

      {/* Content Section */}
      <div className="home-content">
        <p className="home-description">
          Browse our collection of books or add a new one to the list. Discover a world of knowledge and stories!
        </p>
      </div>
    </div>
  );
}

export default Home;
