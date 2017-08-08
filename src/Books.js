import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
class Books extends Component{
	state = {
		shelf: ''
	}

	onShelfChange= (book, shelf)=>{
		this.setState({shelf: shelf})
		this.props.shelfChange(book, shelf)
	}

	render(){
		const{books} = this.props;
		
	  let read = books.filter((book) => book.shelf === 'read')
		let planningToRead = books.filter((book) => book.shelf === 'wantToRead')
		let reading = books.filter((book) => book.shelf === 'currentlyReading')
		
		return(
			<div className="list-books">
		      <div className="list-books-title">
		        <h1>MyReads</h1>
		      </div>
	        <Shelf books={reading} shelfChange={this.onShelfChange} title={'Currently Reading'}/>
	       	<Shelf books={planningToRead} shelfChange={this.onShelfChange} title={'Want to Read'}/>
	        <Shelf books={read} shelfChange={this.onShelfChange} title={'Read'}/>
					<div className="open-search">
	          <Link to='/search'>Add a book</Link>
	        </div>
		  </div>        
		)
	}
}

export default Books