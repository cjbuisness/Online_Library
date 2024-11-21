import React, { Component } from 'react';
import '../public/styles.css'; // Import CSS file for styling

class Books extends Component {
  constructor(props) {
    super(props);
    // Initialize state to track liked books
    this.state = {
      likedBooks: new Set(), // Use a Set to store liked book indices or ids
    };
  }

  handleLike = (book, index) => {
    this.setState((prevState) => {
      const updatedLikedBooks = new Set(prevState.likedBooks);
      
      // Toggle the liked status
      if (updatedLikedBooks.has(index)) {
        updatedLikedBooks.delete(index); // If already liked, remove it
      } else {
        updatedLikedBooks.add(index); // Otherwise, add it
      }
      
      return { likedBooks: updatedLikedBooks };
    });

    console.log(`Liked ${book.title}`);
  };

  handleDoubleClick = (index) => {
    // Toggle the like status when double-clicking on the book card container
    this.setState((prevState) => {
      const updatedLikedBooks = new Set(prevState.likedBooks);
      
      if (updatedLikedBooks.has(index)) {
        updatedLikedBooks.delete(index); // If already liked, remove it
      } else {
        updatedLikedBooks.add(index); // Otherwise, add it
      }
      
      return { likedBooks: updatedLikedBooks };
    });

    console.log(`Double-clicked to like/unlike book at index: ${index}`);
  };

  render() {
    const { books } = this.props;

    return (
      <div className="book-list-container" onDoubleClick={(e) => this.handleDoubleClick(parseInt(e.target.closest('.book-item').getAttribute('data-index')))}>
        <h2 className="book-list-title">Book List</h2>
        {books.length === 0 ? (
          <p className="no-books-message">This just in! We're bookless!.</p> // Display message if books array is empty
        ) : (
          <ul className="book-list">
            {/* Map through the books and display them with modern styling */}
            {books.map((book, index) => (
              <li 
                key={index} 
                className="book-item" 
                data-index={index} // Store the index of the book for later use
              >
                <div className="book-card">
                  <div className="book-details">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                  </div>
                  <div className="book-actions">
                    <button
                      className={`like-button ${this.state.likedBooks.has(index) ? 'liked' : ''}`}
                      onClick={() => this.handleLike(book, index)}
                    >
                      ❤
                    </button>
                    <button
                      className="remove-button"
                      onClick={() => this.props.removeBook(index)} // Call removeBook from App.jsx
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Books;
