import React, { Component } from 'react';
import '../public/styles.css'; // Import custom CSS for styling

class LoadingOverlay extends Component {
  render() {
    return (
      this.props.show && (
        <div className="loading-overlay">
          <div className="loading-message">
            Welcome to the Library!
          </div>
        </div>
      )
    );
  }
}

export default LoadingOverlay;