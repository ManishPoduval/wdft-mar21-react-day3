import React, { useState } from 'react'
import {Paper, Grid} from '@material-ui/core'
import Items from './components/Items'
import Total from './components/Total'
import data from './books.json'

function App() {

  //create your state here
  const [books, updateBooks] = useState(data)
  const [filteredBooks, updateFilteredBooks] = useState(data)
  const [totalBooks, updateTotalBooks] = useState([])

  const handleSearch = (e) => {
    // since our onChange event listener is on the input
    // e.target will give us  the input DOM
    let input  = e.target.value 

    let filteredBooks = books.filter((singleBook) => {
      // converting to same case 
      // checking if the input includes in the books title
      return singleBook.title.toLowerCase().includes(input.toLowerCase())
    })

    // update the state
    updateFilteredBooks(filteredBooks)
  }

  const handleAddBook = ( book ) => {
    // adds a single book to the books state
    updateBooks( [book, ...books] )

    //---------***********----------------
    //--------SUPER IMPORTANT-------------
    //---------***********----------------

    // update the filtered books as well when a new book is added
    updateFilteredBooks( [book, ...books] )

    //---------***********----------------
    //---------***********----------------
    
  }

  const handleAddTotal = (book, quantity) => {
    // will update the totalBooks array 
    // we will pass this to the Total.js component

    let myBook = { ...book, quantity}

    //We update the totalBooks state here which is used by Total.js 
    updateTotalBooks([myBook, ...totalBooks])

  }

  return (
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper >
            <Items 
              onAdd={handleAddBook}  
              onSearch={handleSearch}
              onTotal={handleAddTotal}
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

export default App
