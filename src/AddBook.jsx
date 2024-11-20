import React, { Component } from 'react';

class AddBook extends Component {
  constructor(props) {
    super(props);
    // Initialize state to track title and author
    this.state = {
      title: '',
      author: ''
    };
  }

  handleChange = (e) => {
    // Update the state based on user input
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, author } = this.state;
    const newBook = { title, author };
    
    // Call addBook function passed via props to add the new book
    this.props.addBook(newBook);

    // Reset the form
    this.setState({ title: '', author: '' });
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="form-heading">Add a New Book</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input 
              id="title"
              type="text" 
              name="title" 
              value={this.state.title} 
              onChange={this.handleChange} 
              placeholder="Enter book title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input 
              id="author"
              type="text" 
              name="author" 
              value={this.state.author} 
              onChange={this.handleChange} 
              placeholder="Enter author's name"
            />
          </div>
          <button type="submit" className="submit-button">Add Book</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
