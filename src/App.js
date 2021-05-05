import React, { Component } from 'react'

import {Paper, Grid} from '@material-ui/core'
import Items from './components/Items'
import Total from './components/Total'
import data from './books.json'

class App extends Component {


  state = {
    books: data,
    filteredBooks: data, // a copy of the data to have the filter feature
    totalBooks: []
  }

  handleSearch = (e) => {
    // since our onChange event listener is on the input
    // e.target will give us  the input DOM
    let input  = e.target.value 

    const {books} = this.state
    let filteredBooks = books.filter((singleBook) => {
      // converting to same case 
      // checking if the input includes in the books title
      return singleBook.title.toLowerCase().includes(input.toLowerCase())
    })

    this.setState({
      filteredBooks: filteredBooks
    })
  }

  handleAddBook = ( book ) => {
    // adds a single book to the books state
    this.setState({
      books: [book, ...this.state.books]
    })
  }

  handleAddTotal = (book, quantity) => {
    // will update the totalBooks array 
    // we will pass this to the Total.js component
    console.log('Total works', book, quantity)
    let myBook = { ...book, quantity}

    //We update the totalBooks state here which is used by Total.js 
    this.setState({
      totalBooks: [myBook, ...this.state.totalBooks]
    })
  }


  render() {
    // Destructuring our state
    // ALWAYS SHOW THE FILTERED BOOKS TO THE
    const {filteredBooks, totalBooks} = this.state

    return (
       <Grid container spacing={3}>
         <Grid item xs={6} sm={3}>
          <Paper >
            <Items 
              onAdd={this.handleAddBook}  
              onSearch={this.handleSearch}
              onTotal={this.handleAddTotal}
              books={filteredBooks} 
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>
            <Total totalBooks={totalBooks}/>
          </Paper>
        </Grid>
       </Grid>
    )
  }
}

export default App
