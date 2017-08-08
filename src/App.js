import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books'
import { Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({ books: state.books.filter(b => b.id !== book.id).concat([book]) })
      )
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() =>(
          <Search shelfChange={this.shelfChange} books={this.state.books}/>
          )}
        />
        <Route exact path='/' render={()=>(
          <Books books={this.state.books} shelfChange={this.shelfChange} />
          )} 
        /> 
      </div>  
    )
  }

}

export default BooksApp
