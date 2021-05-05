import React, { Component } from 'react'
import {TextField} from '@material-ui/core'

class Search extends Component {
    render() {
        return (
            <div>
                {/* we use the onChange event listener here */}
                <TextField onChange={this.props.onSearch}  label="Search" placeholder="Search a book" />
            </div>
        )
    }
}

export default Search
