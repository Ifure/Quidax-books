import {createContext, useState} from 'react';
import BookJson from '../books.json';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState(BookJson);
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [query, setQuery] = useState(null);

    const setAllBooks = () => {
        setBooks(books)
        
    }

    const getSingleBook = (id) => {
        const book = books.find(book =>  Number(book.id) === Number(id));
        return book;
    }

    const search = (searchTerm) => {
        setQuery(searchTerm);
        if(searchTerm === "" || searchTerm.length < 2){
           return setSearchedBooks([]);
        }
        const searchedBooks =  books.filter((book) => {
            return book.title.toLowerCase().match(searchTerm.toLowerCase()) || book.authors[0].name.toLowerCase().match(searchTerm.toLowerCase());
        });
        setSearchedBooks([...searchedBooks]);
    }

    return (
        <BookContext.Provider value={{books, searchedBooks, search, query, getSingleBook,  setAllBooks}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;