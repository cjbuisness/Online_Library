import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom'; 
import LoadingOverlay from './LoadingOverlay';  // Ensure this path is correct
import '../public/styles.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const hasLoaded = useRef(false); // Track if the page has loaded
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Only trigger the loading screen on the initial load (not on tab navigation)
    if (!hasLoaded.current && location.pathname === '/') {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);  // 1 second delay for the loading overlay

      // Mark the component as loaded
      hasLoaded.current = true;

      return () => clearTimeout(timer);  // Clean up the timer when component unmounts
    } else {
      // Skip loading overlay if not the root path
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <div className="home-container">
      {/* Display the LoadingOverlay if the page is loading */}
      <LoadingOverlay show={loading} />
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
