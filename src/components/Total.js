import React, { Component } from 'react'

class Total extends Component {
    render() {
        // console.log('Props Total', this.props.totalBooks )
        const {totalBooks} = this.props

        let total = 0
        // calculate total here (think of reduce)

        return (
            <div>
                <h2>Total</h2>
                {
                    totalBooks.map((book) => {
                        return (
                            // Don't forget the key here ?????
                            <p>
                          {book.title}: {book.price} x {book.quantity} = ${book.price * book.quantity}
                            </p>    
                        )
                    })
                }
                <h1>Final Total: {total}</h1>
            </div>
        )
    }
}

export default  Total