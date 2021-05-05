import React, { useState } from 'react'
import ItemDetail from './ItemDetail'
import AddForm from './AddForm'
import { Button } from '@material-ui/core';
import Search from './Search';

function Items(props) {

    const [showForm, updateForm] = useState(false)

    const handleSubmit = (e) => {
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

        updateForm(false)
        props.onAdd( newBook )
    }

    const handleShowForm = () => {
         updateForm(true)
    }

    // Destructure all props here
    const {onSearch, onTotal, books} = props
    return (
        <div>
            <h2>List</h2>
            <Search onSearch={onSearch}/>
            {
                showForm ? 
                    <AddForm taka={handleSubmit} /> : 
                    <Button onClick={handleShowForm} variant="contained" color="primary">Show form</Button> 
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

export default Items