import React, { Component } from 'react'

class SavedPage extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks ()
    }
}


export default Saved