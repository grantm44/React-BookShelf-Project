import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends Component{

  state = {
    query: '',
    shelf: '',
    books: []
  }

  onShelfChange= (book, shelf)=>{
    this.setState({shelf: shelf})
    this.props.shelfChange(book, shelf)
  }
  
  search(query){
    BooksAPI.search(query, 10).then((res) => {
      console.log(this.state.books)
      this.setState({books: res})
    })
  }
  
  render(){
    
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/* 
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" 
              placeholder="Search by title or author" 
              onChange={(event) =>this.search(event.target.value)} 
              />
            
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books && this.state.books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select defaultValue={book.shelf} onChange={(event) => this.onShelfChange(book, event.target.value)} >
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  {book.authors &&
                    book.authors.map((author,i) => 
                      <div key={i} className="book-authors">{author}</div>
                    )
                  }
                </div>
              </li>
              ))}
          </ol>
        </div>
      </div>
      )
  }
}

export default Search;
