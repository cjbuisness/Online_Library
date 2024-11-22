import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';  
import HomePath from './HomePath';  
import Books from './Books';
import AddBook from './AddBook';
import About from './About';
import '../public/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with an array of books
    this.state = {
      books: [
        { title: '1984', author: 'George Orwell' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
      ]
    };
  }

  // Implement addBook function to add a new book to the state
  addBook = (book) => {
    this.setState((prevState) => ({
      books: [...prevState.books, book]
    }));
  };

  // Function to remove a book from the state
  removeBook = (index) => {
    this.setState((prevState) => {
      const updatedBooks = prevState.books.filter((book, i) => i !== index);
      return { books: updatedBooks };
    });
  };

  render() {
    return (
      <Router>
        <div className="home-container">
          {/* Header Section */}
          <header className="header">
            <div className="logo-container">
              <h1 className="header-title">Library Management</h1>
            </div>
            <nav>
              <ul className="nav-list">
           
                <li><Link to="/HomePath">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/add-book">Add Book</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </header>

          {/* Main Routes */}
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/HomePath" element={<HomePath />} />
            <Route path="/books" element={<Books books={this.state.books} removeBook={this.removeBook} />} />
            <Route path="/add-book" element={<AddBook addBook={this.addBook} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <footer className="footer">
          <p>© 2024 CJBuisness. All rights reserved.</p>
        </footer>
      </Router>
    );
  }
}

export default App;
