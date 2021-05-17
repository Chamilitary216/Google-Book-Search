// Required module
import axios from "axios";

export default {
    // Get books
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Saves book to the Database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Gets stored books from DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Retrieves books by ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes book by ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};