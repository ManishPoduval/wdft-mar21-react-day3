import React from 'react'

function Total(props) {
    // destructure the props
    const {totalBooks} = props

        // calculate total here (think of reduce)
    let total = totalBooks.reduce((acc, book) => {
        return acc + (book.price*book.quantity)
    }, 0)

    return (
        <div>
            <h2>Total</h2>
            {
                totalBooks.map((book, i) => {
                    return (
                            // Don't forget the key here ?????
                    <p key={i}>
                        {book.title}: {book.price} x {book.quantity} = ${book.price * book.quantity}
                    </p>    
                    )
                })
            }
            <h1>Final Total: {total}</h1>
        </div>
    )    
}

export default  Total