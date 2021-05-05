import React, { Component } from 'react'
import {TextField, Button} from '@material-ui/core'

class AddForm extends Component {

    /*
    props will look like this
    this.props = {
        taka: Function
    }
    */

    render() {
        const {taka} = this.props
        return (
            // Using the onSubmit event listener here
            <form onSubmit={taka} noValidate autoComplete="off">
                <TextField name="title" label="Title" />
                <TextField name="price" label="Price" />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
        )
    }
}

export default AddForm
