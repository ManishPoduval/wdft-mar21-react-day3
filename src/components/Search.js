import React from 'react'
import {TextField} from '@material-ui/core'

// destrcuture the props in the parameter itself
function Search({onSearch}) {
    return (
        <div>
            {/* we use the onChange event listener here */}
            <TextField onChange={onSearch}  label="Search" placeholder="Search a book" />
        </div>
    )
}

export default Search
