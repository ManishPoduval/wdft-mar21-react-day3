import React, { Component } from 'react'
import ItemDetail from './ItemDetail'
import AddForm from './AddForm'
import { Button } from '@material-ui/core';
import Search from './Search';

class Items extends Component {

    /*
    props will look like this
    this.props = {
        books: Array
    }
    */

    state = {
        showForm: false
    }

    handleSubmit = (e) => {
        // PREVENT THE DEFAULT BEHAVIOUR OF SUBMIT EVENTS
        // REMEBER THE ? IT PUTS IN THE URL
        // By default submit events make a GET request with queries
        e.preventDefault()

        const {title, price} = e.target
        // create a new object, same as how it's in our state
        let newBook = {
            title: title.value,
            price: price.value
        }
        console.log(newBook)
        this.setState({ showForm: false }, () => {
            //calling the onAdd prop from App.js
            // to add a new book to the books state
            this.props.onAdd( newBook )
        })

    }

    handleShowForm = () => {
        this.setState({   showForm: true })
    }

    render() {
        //destructure the props
        const {books, onTotal, onSearch} = this.props

        const {showForm} = this.state

        return (
            <div>
                <h2>List</h2>
                <Search onSearch={onSearch}/>
                {
                    showForm ? 
                    <AddForm taka={this.handleSubmit} /> : 
                    <Button onClick={this.handleShowForm} variant="contained" color="primary">Show form</Button> 
                }
                {
                    books.map((book, index) => {
                        return <ItemDetail 
                        onTotal={onTotal}
                        book={book}
                        key={index} 
                        />
                    })
                }
            </div>
        )
    }
}

export default Items