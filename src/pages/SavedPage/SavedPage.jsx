import React, { Component } from 'react'
import { Container } from "../../components/Grid/Grid";
import Nav from "../../components/Navbar/Navbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from '../../utilities/API';
import SavedList from "../../components/SavedList/SavedList";
import Navbar from '../../components/Navbar/Navbar';

class SavedPage extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }


    render() {
        return (
            <div>
                <Navbar />
                <Container fluid>
                <Jumbotron />
                {this.state.savedBooks.length ? (
                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <h5>No results to display</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default SavedPage