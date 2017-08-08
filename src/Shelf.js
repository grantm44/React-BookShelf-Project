import React, { Component } from 'react'

class Shelf extends Component{

	render(){
		const{ books, shelfChange, title } = this.props

		return(
		  <div className="list-books-content">
	      <div className="bookshelf">
	        <h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
			      <ol className="books-grid">
							{books.map((book) => (
								<li key={book.id}>
					        <div className="book">
					          <div className="book-top">
					            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
					            <div className="book-shelf-changer">
					              <select defaultValue={book.shelf} onChange={(event) => shelfChange(book, event.target.value)} >
					                <option value="none" disabled>Move to...</option>
					                <option value="currentlyReading">Currently Reading</option>
					                <option value="wantToRead">Want to Read</option>
					                <option value="read">Read</option>
					                <option value="none">None</option>
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
		  </div>
		)
	}
}

export default Shelf;
