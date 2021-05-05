import React, {useState} from 'react'
import {TextField, Button} from '@material-ui/core'

function ItemDetail(props) {
    
    // Create the quantity state here
    const [quantity, updateQuantity] = useState(0)

    // Update the state , quantity here
    const handleChange = (e) => {
        updateQuantity(e.target.value)
    }
    
    const {book, onTotal} = props
    return (
        <div>
            <h4>{book.title}</h4>
            <p>{book.price}</p>
            <TextField onChange={handleChange} label="Quantity"  />
            <Button onClick={ () => { onTotal(book, quantity)  }   } variant="contained" color="secondary">Add</Button>
        </div>
    )
}

export default ItemDetail
