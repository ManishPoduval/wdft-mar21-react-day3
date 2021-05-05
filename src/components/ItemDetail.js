import React, { Component } from 'react'
import {TextField, Button} from '@material-ui/core'

class ItemDetail extends Component {

    // props will look like this
    /*
    this.props = {
        book: Object
    }
    */

    state = {
        quantity: 0
    }

    handleChange = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    render() {
        const {book, onTotal} = this.props
        return (
            <div>
                <h4>{book.title}</h4>
                <p>{book.price}</p>
                <TextField onChange={this.handleChange} label="Quantity"  />
                <Button onClick={ () => { onTotal(book, this.state.quantity)  }   } variant="contained" color="secondary">Add</Button>
            </div>
        )
    }
}

export default ItemDetail
